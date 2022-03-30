const userInfo = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  user: userInfo,
  cart: [],
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        user: action.user,
      };

    case "ADD_TO_CART":
      return {
        ...state,

        cart: [...state.cart, action.basket],
      };

    default:
      return state;
  }
};

export default appReducer;
