import {
  GET_TABLE_LIST,
  GET_OCCUPIED_TABLE_LIST,
  GET_NON_OCCUPIED_TABLE_LIST,
  ADD_TABLE,
  EDIT_TABLE,
  DELETE_TABLE
} from "./types";
import axios from "axios";

export const getTablesList = () => async dispatch => {
  const res = await axios.get("http://localhost:8000/api/tables");

  dispatch({
    type: GET_TABLE_LIST,
    payload: res.data.data
  });
};

export const getOccupiedTableList = () => async dispatch => {
  dispatch({
    type: GET_OCCUPIED_TABLE_LIST
  });
};
export const getNonOccupiedTAbleList = () => async dispatch => {
  const res = await axios.get("http://localhost:8000/api/tables/unOccupied");

  dispatch({
    type: GET_NON_OCCUPIED_TABLE_LIST,
    payload: res.data.data
  });
};

export const addTable = table => async dispatch => {
  const res = await axios.post("http://localhost:8000/api/table/add", {
    placement: table.position
  });

  dispatch({
    type: ADD_TABLE,
    payload: res.data.data
  });
};
export const editTable = table => async dispatch => {
  const placement = table.position;

  const res = await axios.put(
    "http://localhost:8000/api/table/edit/" + table.id,
    { placement, id: table.id }
  );

  dispatch({
    type: EDIT_TABLE,
    payload: res.data.data
  });
};
export const deleteTable = tableId => async dispatch => {
  const res = await axios.delete(
    "http://localhost:8000/api/table/delete/" + tableId
  );
  console.log(res.data.data);
  dispatch({
    type: DELETE_TABLE,
    payload: tableId
  });
};
