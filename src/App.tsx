import React , {useState}from 'react'
import './App.css'
import InputField from './components/InputField'
import { FormEvent, Todos } from './components/model';
import TodoList from './components/TodoList';

const App: React.FC= () => {
  const [todo,setTodo]=useState<string>('');
  const[todos,setTodos]=useState<Todos[]>([])

  const handleAdd=(e: FormEvent)=>{
    e.preventDefault();
    if(todo){
      setTodos([...todos,{id:Date.now(),todo:todo,isDone:false}])
      setTodo('')
    }
  }
  console.log(todos)

  return (
    <div className='todo__container'>
      <h2 className='heading__container'>Task Easy</h2>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />

     <TodoList todos={todos} setTodos={setTodos} />
      </div>
  )
}

export default App
