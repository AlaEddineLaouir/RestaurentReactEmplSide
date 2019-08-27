import {
  GET_SERVED_ORDERS,
  GET_ORDERS_TO_BE_SERVED,
  SERVE_ORDER,
  PAY_ORDER
} from "./types";

export const getServedOrders = () => dispatch => {
  dispatch({
    type: GET_SERVED_ORDERS
  });
};

export const getOrdersToBeServed = () => dispatch => {
  dispatch({
    type: GET_ORDERS_TO_BE_SERVED
  });
};

export const serveOrder = id => dispatch => {
  dispatch({
    type: SERVE_ORDER,
    payload: id
  });
};

export const payOrder = id => dispatch => {
  dispatch({
    type: PAY_ORDER,
    payload: id
  });
};
export const makeOrder = order => dispatch => {};
