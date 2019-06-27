const initialState = {
  contacts: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return {
        ...state
      };
    default:
      return {
        ...state
      };
  }
};

export default reducer;
