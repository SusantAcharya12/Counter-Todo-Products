
import {React, useState} from 'react'

function Todo() {
    const [text, setText] = useState('');
    const [todo,setTodo] = useState([]);
    const [completed,setCompleted] = useState([]);
    const [editMode, setEditMode] = useState(null);
    const [editText, setEditText] = useState('');
    


    function handleText(e){
        setText(e.target.value)

    }

    function handleSubmit(e){
        e.preventDefault();

        if (editMode !== null) {
          const newTodo = [...todo];
          newTodo[editMode] = editText;
          setTodo(newTodo);
          setEditMode(null);
          console.log(editMode)
      } 

      else{
        setTodo([...todo,text]);
        setCompleted([...completed,false])
        setText("");
      }
       
       
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

    function toggleEditMode(index) {
      setEditMode(editMode === index ? null : index);
      setEditText(todo[index]);
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

                    {editMode===i ? (
                       <input
                       type='text'
                       value={editText}
                       onChange={(e) => setEditText(e.target.value)}
                       onBlur={() => toggleEditMode(i)}
                       autoFocus
                   />
                    ):( <li key={i}>{e}</li>
                    )}

                  
                   
          
                    <div className='buttonGroupTodo'>
                    <button className='btn-delete' onClick={()=>deleteTodo(i)}>Delete</button>
                    <button className='btn-completed' onClick={()=>toggleCompleted(i)}>Completed</button>
                    <button className='btn-edit' onClick={() => toggleEditMode(i)}>
                                    {editMode === i ? 'Save' : 'Edit'}
                                </button>
                    </div>
                </div>
            )})}

           </div>

    </div>
  )
}


export default Todo
