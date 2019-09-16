import {
  GET_EMPLOYEES_LIST,
  ADD_EMPLOYEE,
  DELETE_EMPLOYEE,
  EDIT_EMPLOYEE,
  LOGIN_EMPLOYEE,
  LOGOUT_EMPLOYEE
} from "./types";
import Axios from "axios";
import axios from "axios";

export const logIn = user => async dispatch => {
  try {
    const res = await axios.post(
      "http://localhost:8000/api/loginEmployee",
      user
    );
    Axios.defaults.headers["Authorization"] = "Bearer " + res.data.token;

    dispatch({
      type: LOGIN_EMPLOYEE,
      payload: res.data
    });
  } catch (error) {
    alert("Erreur: " + error.response.data);
  }
};

export const getEmployeeList = () => async dispatch => {
  const res = await axios.get("http://localhost:8000/api/employee/list");
  dispatch({
    type: GET_EMPLOYEES_LIST,
    payload: res.data.data
  });
};

export const addEmployee = employee => async dispatch => {
  const res = await axios.post(
    "http://localhost:8000/api/employee/add",
    employee
  );
  console.log(res.data);
  dispatch({
    type: ADD_EMPLOYEE,
    payload: employee
  });
};

export const deleteEmployee = id => async dispatch => {
  /*const res = await axios.delete(
    "http://localhost:8000/api/employee/delete/" + id
  );*/
  dispatch({
    type: DELETE_EMPLOYEE,
    payload: id
  });
};

export const editEmployee = employee => async dispatch => {
  const res = await axios.put(
    "http://localhost:8000/api/employee/edit/" + employee.id,
    employee
  );
  console.log(res.data);
  dispatch({
    type: EDIT_EMPLOYEE,
    payload: employee
  });
};

export const logout = () => async dispatch => {
  const res = await axios.get("http://localhost:8000/api/employee/logout");
  console.log(res.data);
  dispatch({
    type: LOGOUT_EMPLOYEE
  });
};
