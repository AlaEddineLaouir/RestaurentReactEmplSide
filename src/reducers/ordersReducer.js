import {
  GET_SERVED_ORDERS,
  GET_ORDERS_TO_BE_SERVED,
  SERVE_ORDER,
  PAY_ORDER,
  GET_ON_PREPARATION_ORDERS,
  GET_ORDERS_TO_BE_PREPARED,
  ORDER_PREPARED,
  PREPARE_ORDER,
  GET_ORDERS_TO_BE_DELIVERD,
  GET_ON_DELIVERY_ORDERS,
  DELIVER_ORDER,
  PAY_DELIVERY_ORDER,
  GET_ONLINE_ORDERS,
  VALIDE_ORDER
} from "../actions/types";

const intialState = {
  orders: {
    servedOrders: [],
    toBeServedOrders: [],
    toBePreparedOrders: [],
    onPreparationOrders: [],
    toBeDeliveredOrders: [],
    onDeliveryOrders: [],
    onlineOrders: []
  }
};

export default function(state = intialState, action) {
  switch (action.type) {
    case GET_SERVED_ORDERS:
      return {
        ...state,
        orders: { ...state.orders, servedOrders: action.payload }
      };
    case GET_ORDERS_TO_BE_SERVED:
      return {
        ...state,
        orders: { ...state.orders, toBeServedOrders: action.payload }
      };
    case GET_ON_PREPARATION_ORDERS:
      return {
        ...state,
        orders: { ...state.orders, onPreparationOrders: action.payload }
      };
    case GET_ORDERS_TO_BE_PREPARED:
      return {
        ...state,
        orders: { ...state.orders, toBePreparedOrders: action.payload }
      };
    case GET_ORDERS_TO_BE_DELIVERD:
      return {
        ...state,
        orders: { ...state.orders, toBeDeliveredOrders: action.payload }
      };
    case GET_ON_DELIVERY_ORDERS:
      return {
        ...state,
        orders: { ...state.orders, onDeliveryOrders: action.payload }
      };
    case GET_ONLINE_ORDERS:
      return {
        ...state,
        orders: { ...state.orders, onlineOrders: action.payload }
      };
    case VALIDE_ORDER:
      return {
        ...state,
        orders: {
          ...state.orders,
          onlineOrders: state.orders.onlineOrders.filter(
            order => order.id !== action.payload
          )
        }
      };
    case DELIVER_ORDER:
      return {
        ...state,
        orders: {
          ...state.orders,
          toBeDeliveredOrders: state.orders.toBeDeliveredOrders.filter(
            order => order.id !== action.payload
          )
        }
      };
    case PAY_DELIVERY_ORDER:
      return {
        ...state,
        orders: {
          ...state.orders,
          onDeliveryOrders: state.orders.onDeliveryOrders.filter(
            order => order.id !== action.payload
          )
        }
      };
    case SERVE_ORDER:
      return {
        ...state,
        orders: {
          ...state.orders,
          toBeServedOrders: state.orders.toBeServedOrders.filter(
            order => order.id !== action.payload
          )
        }
      };
    case PAY_ORDER:
      return {
        ...state,
        orders: {
          ...state.orders,
          servedOrders: state.orders.servedOrders.filter(
            order => order.id !== action.payload
          )
        }
      };
    case PREPARE_ORDER:
      return {
        ...state,
        orders: {
          ...state.orders,
          toBePreparedOrders: state.orders.toBePreparedOrders.filter(
            order => order.id !== action.payload
          )
        }
      };
    case ORDER_PREPARED:
      return {
        ...state,
        orders: {
          ...state.orders,
          onPreparationOrders: state.orders.onPreparationOrders.filter(
            order => order.id !== action.payload
          )
        }
      };
    default:
      return state;
  }
}
