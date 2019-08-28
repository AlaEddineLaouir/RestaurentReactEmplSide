import {
  GET_SERVED_ORDERS,
  GET_ORDERS_TO_BE_SERVED,
  SERVE_ORDER,
  PAY_ORDER,
  GET_ON_PREPARATION_ORDERS,
  GET_ORDERS_TO_BE_PREPARED,
  ORDER_PREPARED,
  PREPARE_ORDER
} from "../actions/types";

const intialState = {
  orders: {
    servedOrders: [
      {
        id: 1,
        state: "servis",
        table: "3: 4iem etag deuaxiem a droite",
        total: 1550,
        orders: [
          {
            dish: {
              id: 1,
              name: "frite",
              price: "750 DA",
              description: "kjfcsdvjqqdslkvjkljvlkdsvv"
            },
            quantity: 2
          },
          {
            dish: {
              id: 2,
              name: "viande",
              price: "800 DA",
              description: "taktaktaktataktataktaktaktaktaktak"
            },
            quantity: 1
          }
        ]
      },
      {
        id: 2,
        state: "servis",
        table: "2: 2iem etag premier a droite",
        total: 1550,
        orders: [
          {
            dish: {
              id: 1,
              name: "frite",
              price: "750 DA",
              description: "kjfcsdvjqqdslkvjkljvlkdsvv"
            },
            quantity: 2
          },
          {
            dish: {
              id: 2,
              name: "viande",
              price: "800 DA",
              description: "taktaktaktataktataktaktaktaktaktak"
            },
            quantity: 1
          }
        ]
      }
    ],
    toBeServedOrders: [
      {
        id: 1,
        state: "prete",
        table: "3: 4iem etag deuaxiem a droite",
        total: 1550,
        orders: [
          {
            dish: {
              id: 1,
              name: "frite",
              price: "750 DA",
              description: "kjfcsdvjqqdslkvjkljvlkdsvv"
            },
            quantity: 2
          },
          {
            dish: {
              id: 2,
              name: "viande",
              price: "800 DA",
              description: "taktaktaktataktataktaktaktaktaktak"
            },
            quantity: 1
          }
        ]
      },
      {
        id: 2,
        state: "prete",
        table: "2: 2iem etag premier a droite",
        total: 1550,
        orders: [
          {
            dish: {
              id: 1,
              name: "frite",
              price: "750 DA",
              description: "kjfcsdvjqqdslkvjkljvlkdsvv"
            },
            quantity: 2
          },
          {
            dish: {
              id: 2,
              name: "viande",
              price: "800 DA",
              description: "taktaktaktataktataktaktaktaktaktak"
            },
            quantity: 1
          }
        ]
      }
    ],
    toBePreparedOrders: [
      {
        id: 1,
        state: "valide",
        table: "3: 4iem etag deuaxiem a droite",
        total: 1550,
        orders: [
          {
            dish: {
              id: 1,
              name: "frite",
              price: "750 DA",
              description: "kjfcsdvjqqdslkvjkljvlkdsvv"
            },
            quantity: 2
          },
          {
            dish: {
              id: 2,
              name: "viande",
              price: "800 DA",
              description: "taktaktaktataktataktaktaktaktaktak"
            },
            quantity: 1
          }
        ]
      },
      {
        id: 2,
        state: "valide",
        table: "2: 2iem etag premier a droite",
        total: 1550,
        orders: [
          {
            dish: {
              id: 1,
              name: "frite",
              price: "750 DA",
              description: "kjfcsdvjqqdslkvjkljvlkdsvv"
            },
            quantity: 2
          },
          {
            dish: {
              id: 2,
              name: "viande",
              price: "800 DA",
              description: "taktaktaktataktataktaktaktaktaktak"
            },
            quantity: 1
          }
        ]
      }
    ],
    onPreparationOrders: [
      {
        id: 1,
        state: "traitement",
        table: "3: 4iem etag deuaxiem a droite",
        total: 1550,
        orders: [
          {
            dish: {
              id: 1,
              name: "frite",
              price: "750 DA",
              description: "kjfcsdvjqqdslkvjkljvlkdsvv"
            },
            quantity: 2
          },
          {
            dish: {
              id: 2,
              name: "viande",
              price: "800 DA",
              description: "taktaktaktataktataktaktaktaktaktak"
            },
            quantity: 1
          }
        ]
      },
      {
        id: 2,
        state: "traitement",
        table: "2: 2iem etag premier a droite",
        total: 1550,
        orders: [
          {
            dish: {
              id: 1,
              name: "frite",
              price: "750 DA",
              description: "kjfcsdvjqqdslkvjkljvlkdsvv"
            },
            quantity: 2
          },
          {
            dish: {
              id: 2,
              name: "viande",
              price: "800 DA",
              description: "taktaktaktataktataktaktaktaktaktak"
            },
            quantity: 1
          }
        ]
      }
    ]
  }
};

export default function(state = intialState, action) {
  switch (action.type) {
    case GET_SERVED_ORDERS:
      return state;
    case GET_ORDERS_TO_BE_SERVED:
      return state;
    case GET_ON_PREPARATION_ORDERS:
      return state;
    case GET_ORDERS_TO_BE_PREPARED:
      return state;
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
