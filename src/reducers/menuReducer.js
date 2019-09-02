import {
  GET_MENU,
  ADD_CATEGORY,
  EDIT_CATEGORY,
  ADD_PLAT,
  EDIT_PLAT,
  DELETE_PLAT,
  DELETE_CATEGORY
} from "../actions/types";
const initialState = {
  categories: []
};
export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_CATEGORY:
      return {
        ...state,
        categories: state.categories.concat(action.payload)
      };
    case EDIT_CATEGORY:
      return {
        ...state,
        categories: state.categories.map(category => {
          if (category.id === action.payload.id) {
            return Object.assign({}, category, action.payload);
          } else {
            return category;
          }
        })
      };
    case DELETE_CATEGORY:
      return {
        ...state,
        categories: state.categories.filter(
          category => category.id !== action.payload
        )
      };
    case ADD_PLAT:
      return {
        ...state,
        categories: state.categories.map(category => {
          if (category.id === action.payload.categoryId) {
            category.dishes = category.dishes.concat(action.payload.plat);
          }
          return category;
        })
      };
    case EDIT_PLAT:
      return {
        ...state,
        categories: state.categories.map(category => {
          if (category.id === action.payload.categoryId) {
            category.dishes = category.dishes.map(plat => {
              if (plat.id === action.payload.plat.id) {
                return Object.assign({}, plat, action.payload.plat);
              } else {
                return plat;
              }
            });
            return category;
          } else {
            return category;
          }
        })
      };
    case DELETE_PLAT:
      return {
        ...state,
        categories: state.categories.map(category => {
          if (category.id === action.payload.categoryId) {
            category.dishes = category.dishes.filter(
              plat => plat.id !== action.payload.plat
            );
          }
          return category;
        })
      };

    case GET_MENU:
      return {
        ...state,
        categories: action.payload
      };
    default:
      return state;
  }
}
