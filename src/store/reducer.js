const initialState = {
  contacts: [
    {
      email: "nurjigit.melis.uulu@gmail.com",
      id: 1,
      name: "Front_Programmer",
      phone: "+996 708 339 220",
      picture:
        "https://i.pinimg.com/564x/aa/8f/76/aa8f76d994737e9cd6762cb0ee305d62.jpg"
    },
    {
      email: "Simple@gmail.com",
      id: 2,
      name: "Back_Ender",
      phone: "+1 770 880 990",
      picture:
        "https://i.pinimg.com/564x/b8/ac/7d/b8ac7d151cf88557581fe5f8a9ccb61c.jpg"
    },
    {
      email: "justy@outlook.com",
      id: 3,
      name: "Designer_m",
      phone: "+996 700 963 842",
      picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYm-KcyvHy3PDkmh0V9KzkUk26255h0RwthshiaoanTnfH2B_IRg"
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
