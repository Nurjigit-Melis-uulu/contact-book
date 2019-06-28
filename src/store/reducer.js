const initialState = {
  contacts: [
    {
      email: "nurjigit.melis.uulu@gmail.com",
      id: 0,
      name: "Front_Programmer",
      phone: "+996 708 339 220",
      picture:
        "https://i.pinimg.com/564x/aa/8f/76/aa8f76d994737e9cd6762cb0ee305d62.jpg"
    }
  ]
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
