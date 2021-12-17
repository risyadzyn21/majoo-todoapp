import * as actions from '../actions/actionsType'

const initialState = {
  todos: []
};

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_TODOS:
      return {
        ...state,
        isLoading: true
      };
    case actions.GET_TODOS_SUCCESS:
      return {
        ...state,
        todos: action.payload,
        isLoading: false

      };
    case actions.GET_TODOS_FAILURE:
      return {
        ...state,
        isLoading: false,
        hasErrors: action.error
      };

    case actions.ADD_TODO:
      const { id, title, description, status, createdAt } = action.payload;
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id,
            title,
            status: status,
            description: description,
            createdAt
          }
        ]
      }

    case actions.EDIT_TODO:
      return {
        ...state,
        todos: [...state.todos.map((item) =>
          item.id === action.payload.id ? action.payload : item
        )]
      }

    case actions.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(item => item.id !== action.payload)
      };

    case actions.TOGGLE_TODO: {
      const { id } = action.payload;
      const todos = state.todos.map((obj) => {
        if (obj.id === id) {
          return { ...obj, status: !obj.status }
        } else {
          return obj
        }
      });
      return { todos }
    }

    default:
      return state;
  }
}
export default todoReducer
