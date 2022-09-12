import React,{useRef} from 'react'
import './InputField.css'
import { FormEvent } from './model';

type TodoProps={
todo:string,
setTodo:React.Dispatch<React.SetStateAction<string>>,
handleAdd:(e:FormEvent)=>void

}
const InputField= ({todo,setTodo,handleAdd}:TodoProps) => {
  const inputRef= useRef<HTMLInputElement>(null)
  return (

    <div className='input__div'>
      <form onSubmit={(e)=>{
        handleAdd(e);
      inputRef.current?.blur()}}>
        <input ref={inputRef} className='input__container' type='input' placeholder='Enter your task...' value={todo} onChange={(e)=>setTodo(e.target.value)} />
        <button className='input__button' type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default InputField