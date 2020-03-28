import React from "react";
import { render, waitForElement } from "@testing-library/react";
import { MockedProvider } from "@apollo/react-testing";
import LoginScreen from "../../pages/loginScreen/LoginForm";
import Dashboard from "../../pages/dashboard/Dashboard";
import loginUserMutation from "../../queries/loginUser";
import currentUserQuery from "../../queries/currentUser";
import UserProvider from "../context/UserProvider";

const loginUserMutationMock = [
  {
    request: {
      query: loginUserMutation
    }
  }
];

const currentUserQueryMock = [
  {
    request: {
      query: currentUserQuery
    },
    result: {
      data: {
        currentUser: {
          name: "kitek",
          confirmed: true,
          zones: [
            {
              id: "5e275b818ad8e80a0079a7c6",
              name: "Zone1"
            },
            {
              id: "5e5bf5ec40b37f43b4947dd6",
              name: "Zone2"
            }
          ]
        }
      }
    }
  }
];

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
      <MockedProvider mocks={currentUserQueryMock} addTypename={false}>
        <UserProvider>
          <Dashboard />
        </UserProvider>
      </MockedProvider>
    );

    const zone = await waitForElement(() => getByText(/zone1/i));
    expect(zone).toBeInTheDocument();
    expect(getByText(/wyloguj/i)).toBeInTheDocument();
  });
});
