import {
  GET_TABLE_LIST,
  GET_NON_OCCUPIED_TABLE_LIST,
  GET_OCCUPIED_TABLE_LIST,
  ADD_TABLE,
  EDIT_TABLE,
  DELETE_TABLE
} from "../actions/types";

const initialState = {
  tables: [
    {
      id: 1,
      position: "qskdjqlksdqdlmqsl",
      occupied: false
    },
    {
      id: 2,
      position: "ppppppqskdjqlksdqdlmqsl",
      occupied: false
    },
    {
      id: 3,
      position: "zzzzzqskdjqlksdqdlmqsl",
      occupied: true
    }
  ],
  nonOccupied: [],
  occupied: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TABLE_LIST:
      return state;
    case GET_NON_OCCUPIED_TABLE_LIST:
      return {
        ...state,
        nonOccupied: state.tables.filter(table => !table.occupied)
      };
    case GET_OCCUPIED_TABLE_LIST:
      return {
        ...state,
        occupied: state.tables.filter(table => table.occupied)
      };
    case ADD_TABLE:
      return {
        ...state,
        tables: state.tables.concat(action.payload)
      };
    case DELETE_TABLE:
      return {
        ...state,
        tables: state.tables.filter(table => table.id !== action.payload)
      };
    case EDIT_TABLE:
      return {
        ...state,
        tables: state.tables.map(table => {
          if (table.id === action.payload.id) {
            return Object.assign({}, table, action.payload);
          } else {
            return table;
          }
        })
      };
    default:
      return state;
  }
}
