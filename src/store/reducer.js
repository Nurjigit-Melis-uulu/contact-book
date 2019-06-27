const initialState = {
  contacts: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: action.contacts
      };
    default:
      return {
        ...state
      };
  }
};

export default reducer;
