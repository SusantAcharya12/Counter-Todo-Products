import React, { useContext, useState } from "react";
import { MyContext } from "./MyContext";



function Todo() {

const {text,setText} = useContext(MyContext);
const {todos,setTodos} = useContext(MyContext);
const {completed,setCompleted} = useContext(MyContext);
const {isEditMode,setIsEditMode} = useContext(MyContext);
const {currentSelectedIndex,setCurrentSelectedIndex} = useContext(MyContext);


	function handleText(e) {
		setText(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
    if(!isEditMode){
      setTodos([ text,...todos ]);
      setCompleted([false, ...completed ]);
      setText('');
      return
    }

    const newTodos = todos.map((todo,index) => {
      if(index === currentSelectedIndex){
        todo = text 
      }
      return todo 
    })

    setTodos(newTodos)
    setIsEditMode(false)
    setText('')

    
	}

	function deleteTodo(index) {
		const newTodos = todos.filter((Element, i, arr) => index !== i);

		const newCompleted = completed.filter((_, i) => i !== index);
		setCompleted(newCompleted);

		setTodos(newTodos);
	}

	function toggleCompleted(index) {
		const newCompleted = completed.map((value, i) => (i === index ? !value : value));
		setCompleted(newCompleted);
	}


  const toggleEditMode = (todo,i) => {
    setIsEditMode(true)
    setText(todo)
    setCurrentSelectedIndex(i)
  }


	return (
		<div className="topTodo">
			<h1>Todo Application</h1>
			<form onSubmit={(e) => handleSubmit(e)}>
				<input
					className="todo-input"
					type="text"
					placeholder="Enter your Todo"
					value={text}
					onChange={(e) => handleText(e)}
				/>
				<input type="submit" value={isEditMode ? 'Save' : 'Submit'}/>
			</form>

    {
      !isEditMode && 
			<div className="main-todo">
				{todos.map((todo, i) => {
					return (
						<div
							key={i}
							className="todo--item"
							style={{ textDecoration: completed[i] ? 'line-through' : 'none' }}
              >
              <li key={i}>{todo}</li>
							

							<div className="buttonGroupTodo">
								<button className="btn-delete" onClick={() => deleteTodo(i)}>
									Delete
								</button>
								<button className="btn-completed" onClick={() => toggleCompleted(i)}>
									Completed
								</button>
                <button className='btn-edit' onClick={() => toggleEditMode(todo,i)}>Edit</button>
							</div>
						</div>
					);
				})}
			</div>
    }
		</div>
	);
}

export default Todo;