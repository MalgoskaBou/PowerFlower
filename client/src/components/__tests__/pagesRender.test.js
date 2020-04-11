import React from "react";
import { render, waitForElement } from "@testing-library/react";
import { MockedProvider } from "@apollo/react-testing";
import { BrowserRouter as Router } from "react-router-dom";
import LoginScreen from "../../pages/loginScreen/LoginForm";
import Dashboard from "../../pages/dashboard/Dashboard";
import loginUserMutation from "../../queries/loginUser";
import currentUserQuery from "../../queries/currentUser";
import UserProvider from "../context/UserProvider";
import renderer from "react-test-renderer";

const loginUserMutationMock = [
  {
    request: {
      query: loginUserMutation,
    },
  },
];

const currentUserQueryMock = [
  {
    request: {
      query: currentUserQuery,
    },
    result: {
      data: {
        currentUser: {
          name: "kitek",
          confirmed: true,
          zones: [
            {
              id: "5e275b818ad8e80a0079a7c6",
              name: "Zone1",
            },
            {
              id: "5e5bf5ec40b37f43b4947dd6",
              name: "Zone2",
            },
          ],
        },
      },
    },
  },
];

async function wait(ms = 0) {
  await renderer.act(() => {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  });
}

describe("Pages render correctly", () => {
  it("Login screen render correctly", () => {
    const { getByPlaceholderText, getByText } = render(
      <MockedProvider mocks={loginUserMutationMock} addTypename={false}>
        <LoginScreen />
      </MockedProvider>
    );
    expect(getByPlaceholderText(/e-mail/i)).toBeInTheDocument();
    expect(getByPlaceholderText(/Password/i)).toBeInTheDocument();
    expect(getByText(/Log in/i)).toBeInTheDocument();
    expect(getByText(/flowerLogin.svg/i)).toBeInTheDocument();
  });

  it("Dashboard screen render correctly", async () => {
    const { getByText } = render(
      <Router>
        <MockedProvider mocks={currentUserQueryMock} addTypename={false}>
          <UserProvider>
            <Dashboard />
          </UserProvider>
        </MockedProvider>
      </Router>
    );

    const zone = await waitForElement(() => getByText(/zone1/i));
    expect(zone).toBeInTheDocument();
    expect(getByText(/wyloguj/i)).toBeInTheDocument();
  });

  it("Dashboard snapshot", async () => {
    const tree = renderer
      .create(
        <Router>
          <MockedProvider mocks={currentUserQueryMock} addTypename={false}>
            <UserProvider>
              <Dashboard />
            </UserProvider>
          </MockedProvider>
        </Router>
      )
      .toJSON();

    await wait();

    expect(tree).toMatchSnapshot();
  });

  it("LoginScreen snapshot", async () => {
    const tree = renderer
      .create(
        <MockedProvider mocks={currentUserQueryMock} addTypename={false}>
          <LoginScreen />
        </MockedProvider>
      )
      .toJSON();

    await wait();

    expect(tree).toMatchSnapshot();
  });
});
