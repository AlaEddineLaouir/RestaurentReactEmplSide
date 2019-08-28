import {
  GET_SERVED_ORDERS,
  GET_ORDERS_TO_BE_SERVED,
  SERVE_ORDER,
  PAY_ORDER,
  PREPARE_ORDER,
  ORDER_PREPARED,
  GET_ORDERS_TO_BE_PREPARED,
  GET_ON_PREPARATION_ORDERS
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
export const prepareOrder = id => dispatch => {
  dispatch({
    type: PREPARE_ORDER,
    payload: id
  });
};

export const preparedOrder = id => dispatch => {
  dispatch({
    type: ORDER_PREPARED,
    payload: id
  });
};

export const getToBePreparedOrders = () => dispatch => {
  dispatch({
    type: GET_ORDERS_TO_BE_PREPARED
  });
};
export const getOnPreparetionOrders = () => dispatch => {
  dispatch({
    type: GET_ON_PREPARATION_ORDERS
  });
};
