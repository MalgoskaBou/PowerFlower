const handleInputState = (e, state, setState, value = e.target.value) => {
  setState({
    ...state,
    [e.target.name]: value
  });
};

export { handleInputState };
