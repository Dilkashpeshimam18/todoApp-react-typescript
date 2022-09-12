import React,{useState,useRef,useEffect} from 'react'
import { Todos } from './model';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import './Todo.css'


interface Props{
    todo:Todos,
    todos:Todos[],
    setTodos:React.Dispatch<React.SetStateAction<Todos[]>>,

}
const Todo = ({todo,todos,setTodos}:Props) => {
    const [edit,setEdit]=useState<boolean>(false)
    const [editTodo,setEditTodo]=useState<string>(todo.todo)
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
      }, [edit]);
    const handleDone=(id:number)=>{
     setTodos(todos.map((todo)=>
        todo.id==id ?{...todo, isDone: !todo.isDone}:todo
     ))
    }

    const handleDelete=(id:number)=>{
   setTodos(todos.filter((todo)=>todo.id !=id))
    }

    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        setTodos(
          todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
        );
        setEdit(false);
      };
  return (
<form className='singleTodo__container' onSubmit={(e) => handleEdit(e, todo.id)}>
    {edit? (
          <input
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className='edit__input'
          ref={inputRef}
        />
    ):
    todo.isDone?(
        <s className='todo__name'>{todo.todo}</s>
    
        ):(
            <span className='todo__name'>{todo.todo}</span>
    
        )}
  
    <div>
        <span className='icon' onClick={()=>{
            if(!edit && !todo.isDone){
                setEdit(!edit)
            }
        }}><EditIcon /></span>
        <span className='icon' onClick={()=>handleDelete(todo.id)}><DeleteIcon /></span>
        <span className='icon' onClick={()=>handleDone(todo.id)}><DoneIcon /></span>

    </div>

</form>
    )
}

export default Todo