import API from "../../services/api";
import {
  GET_TODOS,
  GET_TODOS_SUCCESS,
  GET_TODOS_FAILURE,
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  TOGGLE_TODO
} from './actionsType';

export const getTodos = () => ({
  type: GET_TODOS
});

export const getTodosSuccess = (todos) => {
  return {
    type: GET_TODOS_SUCCESS,
    payload: todos
  };
};

export const getTodosFailure = (error) => {
  return {
    type: GET_TODOS_FAILURE,
    error
  };
};

export const getTodosAsync = () => {
  return async (dispatch) => {
    dispatch(getTodos());

    try {
      const res = await API.get();

      dispatch(getTodosSuccess(res.data));
    } catch (error) {
      dispatch(getTodosFailure(error));
    }
  };
};

export const addTodo = (todos) => {
  return {
    type: ADD_TODO,
    payload: todos
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id
  };
};

export const editTodo = (todos) => {
  return {
    type: EDIT_TODO,
    payload: todos
  };
};

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: { id }
});

