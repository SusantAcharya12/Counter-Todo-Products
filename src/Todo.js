
import {React, useState} from 'react'

function Todo() {
    const [text, setText] = useState('');
    const [todo,setTodo] = useState([]);
    const [completed,setCompleted] = useState([]);
    
    console.log(todo,completed)


    function handleText(e){
        setText(e.target.value)
        console.log(text)

    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(todo);
        setTodo([...todo,text]);
        setCompleted([...completed,false])
        setText("");
       
    }

    function deleteTodo(index){

      const newTodo =   todo.filter((Element,i,arr)=> index !== i )

      const newCompleted = completed.filter((_,i)=> i !==index)
      setCompleted(newCompleted)
      
      setTodo(newTodo)

    }

    function toggleCompleted(index){
        const newCompleted = completed.map((value,i) => i===index ? !value : value)
        setCompleted(newCompleted)
    }

 

  return (
    <div className='topTodo'>
      <h1>Todo Application</h1>
        <form onSubmit={(e)=>handleSubmit(e)}>
        <input className='todo-input' type='text' placeholder='Enter your Todo' value={text} onChange={(e)=>handleText(e)}/>
        <input type='submit'/> 
        </form>

           <div className='main-todo'>
           {todo.map((e,i)=>{
                return(
                <div key={i} className='todo--item' style={{textDecoration: completed[i] ? 'line-through': 'none' }}>
                    <li key={i}>{e}</li>
                    <div className='buttonGroupTodo'>
                    <button className='btn-delete' onClick={()=>deleteTodo(i)}>Delete</button>
                    <button className='btn-completed' onClick={()=>toggleCompleted(i)}>Completed</button>
                    </div>
                </div>
            )})}

           </div>

    </div>
  )
}

export default Todo
