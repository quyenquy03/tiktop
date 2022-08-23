import {useStore, actions} from './store'
import {useRef} from 'react'
function App() {
    const inputRef = useRef()
    const todoRef = useRef()
    const [state, dispatch] = useStore()
    const {todos, todoInput} =state

    const handleSubmit =() => {
      dispatch(actions.addTodoInput(todoInput))
      dispatch(actions.setTodoInput(''))
      inputRef.current.focus()
    }

    const handleEnter = (e) => {
      if(e.keyCode === 13) {
        handleSubmit()
      }
    }

    const handleEdit = (e,index) => {
      inputRef.current.focus()
      console.log(index);
      dispatch(actions.setTodoInput(todos[index]))
      dispatch(actions.editTodoInput(index))
    }
    return (

      <div style={{padding : 20}}>
          <input 
            ref={inputRef}
            value={todoInput}
            placeholder='enter your job'
            onKeyUp={e => handleEnter(e)}
            onChange={(e) => dispatch(actions.setTodoInput(e.target.value))}
          />
          <button onClick={handleSubmit}>ADD</button>
          <ul>
            {todos.map(function(item,index) {
              return <li key={index}>
                  <span style={{width : 150, display: "inline-block"}} ref={todoRef} >{item}</span>
                  <button onClick={() => dispatch(actions.deleteTodoInput(index))}>Xoa</button>
                  <button onClick={e => handleEdit(e,index)}>chinh sua</button>
                  </li>
            })}
          </ul>
      </div>
    )
}

export default App;
