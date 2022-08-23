import { DELETE_TODO_INPUT, ADD_TODO_INPUT,SET_TODO_INPUT ,EDIT_TODO_INPUT} from "./constant"

const storageTodo = JSON.parse(localStorage.getItem('todos'))
export const initState = {
    todos : storageTodo ?? [], 
    todoInput : ''
}


const Reducer = (state,actions) => {
    switch(actions.type) {
        case SET_TODO_INPUT :
            return {
                ...state,
                todoInput : actions.payload
            }
        case ADD_TODO_INPUT:
            const addNewTodo = [...state.todos, state.todoInput]
            const jsonTodoAdd = JSON.stringify(addNewTodo)
            localStorage.setItem('todos',jsonTodoAdd)
            return {
                ...state,
                todos : addNewTodo
            }
        case DELETE_TODO_INPUT :
            const deleteNewTodo = [...state.todos]
            deleteNewTodo.splice(actions.payload,1)
            const jsonTodoDelete = JSON.stringify(deleteNewTodo)
            localStorage.setItem('todos',jsonTodoDelete)
            return {    
                ...state,
                todos : deleteNewTodo
            }
        case EDIT_TODO_INPUT:
            const editNewTodo = [...state.todos]
            editNewTodo.splice(actions.payload,1,state.todoInput)
            const jsonTodoEdit = JSON.stringify(editNewTodo)
            localStorage.setItem('todos',jsonTodoEdit)
            return {    
                ...state,
                todos : editNewTodo
            }
        default :
            throw new Error('Invalid actions')
    }
}
export default Reducer