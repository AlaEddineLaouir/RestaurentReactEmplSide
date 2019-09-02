import {
  GET_EMPLOYEES_LIST,
  ADD_EMPLOYEE,
  DELETE_EMPLOYEE,
  EDIT_EMPLOYEE
} from "../actions/types";

const initialState = {
  User: {
    id: 1,
    name: "mehdi",
    email: "ala@ala.a",
    phone: "0541863592",
    role: "RC",
    token: "sdklfjqsifdklfnclmkvoxjvcxwv"
  },
  EmployeeList: [
    {
      id: 1,
      name: "mehdi",
      email: "ala@ala.a",
      phone: "0541863592",
      role: "admin",
      token: "sdklfjqsifdklfnclmkvoxjvcxwv"
    },
    {
      id: 2,
      name: "mPix",
      email: "alqsda@alqsqda.a",
      phone: "0541854564wxc63592",
      role: "caissier",
      token: "sdklfjqsifdklfnclmkvoxjvcxwv"
    }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_EMPLOYEES_LIST:
      return state;
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
