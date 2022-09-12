import React from 'react'
import { Todos } from './model'
import Todo from './Todo'
import './TodoList.css'


interface Props{
    todos:Todos[],
    setTodos:React.Dispatch<React.SetStateAction<Todos[]>>
}
const TodoList:React.FC<Props> = ({todos,setTodos}) => {
  return (
    <div className='todos__container'>
        {todos.map((todo)=>(
            <Todo todo={todo} key={todo.id} todos={todos} setTodos={setTodos}/>
        ))}
    </div>
  )
}

export default TodoList