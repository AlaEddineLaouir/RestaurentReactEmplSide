import {
  GET_MENU,
  ADD_PLAT,
  EDIT_PLAT,
  DELETE_PLAT,
  ADD_CATEGORY,
  EDIT_CATEGORY,
  DELETE_CATEGORY
} from "./types";
import axios from "axios";

export const getMenu = () => async dispatch => {
  const res = await axios.get("http://localhost:8000/api/welcom");
  dispatch({
    type: GET_MENU,
    payload: res.data.data
  });
};

export const addPlat = ({ categoryId, plat }) => dispatch => {
  dispatch({
    type: ADD_PLAT,
    payload: { categoryId, plat }
  });
};

export const editPlat = ({ categoryId, plat }) => dispatch => {
  dispatch({
    type: EDIT_PLAT,
    payload: { categoryId, plat }
  });
};
export const deletePlat = ({ categoryId, plat }) => dispatch => {
  dispatch({
    type: DELETE_PLAT,
    payload: { categoryId, plat }
  });
};

export const addCategory = category => dispatch => {
  dispatch({
    type: ADD_CATEGORY,
    payload: category
  });
};
export const editCategory = category => dispatch => {
  dispatch({
    type: EDIT_CATEGORY,
    payload: category
  });
};
export const deleteCategory = categoryId => dispatch => {
  dispatch({
    type: DELETE_CATEGORY,
    payload: categoryId
  });
};
