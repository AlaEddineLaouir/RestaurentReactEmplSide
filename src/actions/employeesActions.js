import {
  GET_EMPLOYEES_LIST,
  ADD_EMPLOYEE,
  DELETE_EMPLOYEE,
  EDIT_EMPLOYEE
} from "./types";

export const getEmployeeList = () => dispatch => {
  dispatch({
    type: GET_EMPLOYEES_LIST
  });
};

export const addEmployee = employee => dispatch => {
  dispatch({
    type: ADD_EMPLOYEE,
    payload: employee
  });
};

export const deleteEmployee = id => dispatch => {
  dispatch({
    type: DELETE_EMPLOYEE,
    payload: id
  });
};

export const editEmployee = employee => dispatch => {
  dispatch({
    type: EDIT_EMPLOYEE,
    payload: employee
  });
};
