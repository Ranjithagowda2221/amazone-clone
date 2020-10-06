// Login for data layer

export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  // state is data layer, we manipulate it with action like addToBasket
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "ADD_TO_BASKET":
      //Login to add item to basket
      return { ...state, basket: [...state.basket, action.item] };
      break;

    case "REMOVE_FROM_BASKET":
      // Logic for removing item from basket
      let newBasket = [...state.basket]; // we cloned the basket
      console.log("state in reducer", state);
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        // item exists in the basket

        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant't remove product (id: ${action.id} as it's not in the basket)`
        );
      }
      return { ...state, basket: newBasket };

      break;
    default:
      return state;
  }
};

export default reducer;
