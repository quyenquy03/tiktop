import { SET_TODO_INPUT, DELETE_TODO_INPUT, ADD_TODO_INPUT,EDIT_TODO_INPUT } from "./constant";

export const setTodoInput = (payload) => {
    return {
        type : SET_TODO_INPUT,
        payload
    }
}

export const addTodoInput = (payload) => {
    return {
        type : ADD_TODO_INPUT,
        payload
    }
}
export const deleteTodoInput = (payload) => {
    return {
        type : DELETE_TODO_INPUT,
        payload
    }
}
export const editTodoInput = (payload) => {
    return {
        type : EDIT_TODO_INPUT,
        payload
    }
}