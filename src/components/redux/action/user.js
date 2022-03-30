import axios from "../../axios/axios";

export const setUser = (user) => {
  return {
    type: "ADD_USER",
    user,
  };
};

export const addToCart = (basket) => {
  return {
    type: "ADD_TO_CART",
    basket,
  };
};

export const handelUser = (token) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/api/users/data", {
        headers: {
          authorization: localStorage.getItem("Tokens"),
        },
      });

      localStorage.setItem("userInfo", JSON.stringify(data.user));
      dispatch(setUser(data.user));
    } catch (error) {
      console.log(error);
    }
  };
};
