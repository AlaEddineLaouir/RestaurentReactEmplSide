import {
  GET_SERVED_ORDERS,
  GET_ORDERS_TO_BE_SERVED,
  SERVE_ORDER,
  PAY_ORDER,
  PREPARE_ORDER,
  ORDER_PREPARED,
  GET_ORDERS_TO_BE_PREPARED,
  GET_ON_PREPARATION_ORDERS,
  DELIVER_ORDER,
  PAY_DELIVERY_ORDER,
  GET_ON_DELIVERY_ORDERS,
  GET_ONLINE_ORDERS,
  VALIDE_ORDER,
  GET_ORDERS_TO_BE_DELIVERD,
  ADD_TAKEAWAY_ORDER,
  ADD_TABLE_ORDER,
  EDIT_ORDER,
  DELETE_ORDER
} from "./types";

import axios from "axios";

export const getServedOrders = () => async dispatch => {
  const res = await axios.get("http://localhost:8000/api/orders/served");

  dispatch({
    type: GET_SERVED_ORDERS,
    payload: res.data.data
  });
};

export const getOrdersToBeServed = () => async dispatch => {
  const res = await axios.get("http://localhost:8000/api/orders/toBeServed");

  dispatch({
    type: GET_ORDERS_TO_BE_SERVED,
    payload: res.data.data
  });
};

export const serveOrder = id => async dispatch => {
  const res = await axios.put("http://localhost:8000/api/order/serve/" + id);

  dispatch({
    type: SERVE_ORDER,
    payload: id
  });
};

export const payOrder = id => async dispatch => {
  const res = await axios.put("http://localhost:8000/api/order/pay/" + id);

  dispatch({
    type: PAY_ORDER,
    payload: id
  });
};
export const makeOrder = (orders, takeaway, tableId) => async dispatch => {
  if (takeaway) {
    await axios.post("http://localhost:8000/api/order/takeaway/add", {
      orders: orders
    });
    dispatch({
      type: ADD_TAKEAWAY_ORDER
    });
  } else {
    await axios.post("http://localhost:8000/api/order/tableOrder/Add", {
      orders: orders,
      tableId: tableId
    });
    dispatch({
      type: ADD_TABLE_ORDER
    });
  }
};
export const prepareOrder = id => async dispatch => {
  const res = await axios.put("http://localhost:8000/api/order/prepare/" + id);

  dispatch({
    type: PREPARE_ORDER,
    payload: id
  });
};

export const preparedOrder = id => async dispatch => {
  const res = await axios.put("http://localhost:8000/api/order/ready/" + id);
  dispatch({
    type: ORDER_PREPARED,
    payload: id
  });
};

export const getToBePreparedOrders = () => async dispatch => {
  const res = await axios.get("http://localhost:8000/api/orders/newOrders");
  dispatch({
    type: GET_ORDERS_TO_BE_PREPARED,
    payload: res.data.data
  });
};
export const getOnPreparetionOrders = () => async dispatch => {
  const res = await axios.get("http://localhost:8000/api/orders/handled");
  dispatch({
    type: GET_ON_PREPARATION_ORDERS,
    payload: res.data.data
  });
};

export const deliverOrder = id => async dispatch => {
  const res = await axios.put("http://localhost:8000/api/order/deliver/" + id);
  dispatch({
    type: DELIVER_ORDER,
    payload: id
  });
};

export const payDeliveryOrder = id => async dispatch => {
  const res = await axios.put("http://localhost:8000/api/order/pay/" + id);
  dispatch({
    type: PAY_DELIVERY_ORDER,
    payload: id
  });
};
export const getOnDeliveryOrders = () => async dispatch => {
  const res = await axios.get("http://localhost:8000/api/orders/delivered");

  dispatch({
    type: GET_ON_DELIVERY_ORDERS,
    payload: res.data.data
  });
};
export const getToBeDeliveredOrders = () => async dispatch => {
  const res = await axios.get("http://localhost:8000/api/orders/toBeDelivered");
  dispatch({
    type: GET_ORDERS_TO_BE_DELIVERD,
    payload: res.data.data
  });
};

export const getOnlineOrders = () => async dispatch => {
  const res = await axios.get("http://localhost:8000/api/orders/invalide");

  dispatch({
    type: GET_ONLINE_ORDERS,
    payload: res.data.data
  });
};

export const valideOrder = id => async dispatch => {
  const res = await axios.put("http://localhost:8000/api/order/validate/" + id);
  console.log(res.data.data);
  dispatch({
    type: VALIDE_ORDER,
    payload: id
  });
};

export const editOrder = order => async dispatch => {
  const res = await axios.put("http://localhost:8000/api/order/edit", {
    order
  });

  dispatch({
    type: EDIT_ORDER,
    payload: res.data.data
  });
};
export const deleteOrder = orderId => async dispatch => {
  const res = await axios.delete(
    "http://localhost:8000/api/order/delete/" + orderId
  );

  dispatch({
    type: DELETE_ORDER,
    payload: orderId
  });
};
