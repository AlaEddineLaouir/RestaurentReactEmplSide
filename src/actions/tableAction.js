import {
  GET_TABLE_LIST,
  GET_OCCUPIED_TABLE_LIST,
  GET_NON_OCCUPIED_TABLE_LIST,
  ADD_TABLE,
  EDIT_TABLE,
  DELETE_TABLE
} from "./types";

export const getTablesList = () => dispatch => {
  dispatch({
    type: GET_TABLE_LIST
  });
};

export const getOccupiedTableList = () => dispatch => {
  dispatch({
    type: GET_OCCUPIED_TABLE_LIST
  });
};
export const getNonOccupiedTAbleList = () => dispatch => {
  dispatch({
    type: GET_NON_OCCUPIED_TABLE_LIST
  });
};

export const addTable = table => dispatch => {
  dispatch({
    type: ADD_TABLE,
    payload: table
  });
};
export const editTable = table => dispatch => {
  dispatch({
    type: EDIT_TABLE,
    payload: table
  });
};
export const deleteTable = tableId => dispatch => {
  dispatch({
    type: DELETE_TABLE,
    payload: tableId
  });
};
