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
import { async } from "q";

export const getMenu = () => async dispatch => {
  const res = await axios.get("http://localhost:8000/api/welcom");
  dispatch({
    type: GET_MENU,
    payload: res.data.data
  });
};

export const addPlat = ({ categoryId, plat }) => async dispatch => {
  const { name, price, description } = plat;

  const res = await axios.post("http://localhost:8000/api/menu/plat/add", {
    name,
    price,
    description,
    category_id: categoryId
  });

  dispatch({
    type: ADD_PLAT,
    payload: { categoryId, plat: res.data.data }
  });
};

export const editPlat = ({ categoryId, plat }) => async dispatch => {
  const res = await axios.put(
    "http://localhost:8000/api/menu/plat/edit/" + plat.id,
    plat
  );

  dispatch({
    type: EDIT_PLAT,
    payload: { categoryId, plat: res.data.data }
  });
};
export const deletePlat = ({ categoryId, plat }) => async dispatch => {
  const res = await axios.delete(
    "http://localhost:8000/api/menu/plat/delete/" + plat
  );
  console.log("delete plat : " + res.data);

  dispatch({
    type: DELETE_PLAT,
    payload: { categoryId, plat }
  });
};

export const addCategory = category => async dispatch => {
  const title = category.name;
  const res = await axios.post("http://localhost:8000/api/menu/category/add", {
    title
  });

  dispatch({
    type: ADD_CATEGORY,
    payload: res.data.data
  });
};
export const editCategory = category => async dispatch => {
  const title = category.name;
  const res = await axios.put(
    "http://localhost:8000/api/menu/category/edit/" + category.id,
    { title, id: category.id }
  );

  dispatch({
    type: EDIT_CATEGORY,
    payload: res.data.data
  });
};
export const deleteCategory = categoryId => async dispatch => {
  const res = await axios.delete(
    "http://localhost:8000/api/menu/category/delete/" + categoryId
  );
  console.log("delete category : " + res.data);

  dispatch({
    type: DELETE_CATEGORY,
    payload: categoryId
  });
};
