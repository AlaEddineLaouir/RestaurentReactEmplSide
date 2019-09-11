import {
  GET_EMPLOYEES_LIST,
  ADD_EMPLOYEE,
  DELETE_EMPLOYEE,
  EDIT_EMPLOYEE,
  LOGIN_EMPLOYEE,
  LOGOUT_EMPLOYEE
} from "../actions/types";

const initialState = {
  User: {},
  token: "",
  isLoggedIn: false,
  EmployeeList: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN_EMPLOYEE: {
      return {
        ...state,
        User: action.payload.account,
        token: action.payload.token,
        isLoggedIn: true
      };
    }
    case LOGOUT_EMPLOYEE:
      return {
        ...state,
        User: {},
        token: "",
        isLoggedIn: false
      };
    case GET_EMPLOYEES_LIST:
      return {
        ...state,
        EmployeeList: action.payload
      };
    case ADD_EMPLOYEE:
      return {
        ...state,
        EmployeeList: state.EmployeeList.concat(action.payload)
      };
    case DELETE_EMPLOYEE:
      return {
        ...state,
        EmployeeList: state.EmployeeList.filter(
          employee => employee.id !== action.payload
        )
      };

    case EDIT_EMPLOYEE:
      return {
        ...state,
        EmployeeList: state.EmployeeList.map(employee => {
          if (employee.id === action.payload.id) {
            return Object.assign({}, employee, action.payload);
          } else {
            return employee;
          }
        })
      };
    default:
      return state;
  }
}
