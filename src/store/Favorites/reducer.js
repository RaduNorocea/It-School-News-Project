export const initialState = {
  products: [],
};

export function favoritesReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_FAVORITES": {
      let isInList = state.products.find((product) => {
        return product.id === action.payload.id;
      });
      if (isInList) {
        return state;
      } else {
        let newState = {
          products: [action.payload, ...state.products],
        };
        return newState;
      }
    }
    case "REMOVE_FROM_FAVORITES": {
      let filteredProducts = state.products.filter((product) => {
        return product.id !== action.payload;
      });
      let newState = {
        products: filteredProducts,
      };
      return newState;
    }
    default: {
      return state;
    }
  }
}
