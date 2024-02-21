import { createContext, useState } from "react";

export const MyContext = createContext("");


function ContextProvider({children}) {
    const [dark,setDark] = useState(false);
    const [text,setText] = useState([]);
    const [todos, setTodos] = useState([]);
    const [completed,setCompleted] = useState([]);
    const [isEditMode,setIsEditMode] = useState(false);
    const [currentSelectedIndex,setCurrentSelectedIndex] = useState(null);


  return (
    <div>
        <MyContext.Provider value={{darker:dark, setDark, text, setText,  todos, setTodos, completed, setCompleted, isEditMode, setIsEditMode,currentSelectedIndex, setCurrentSelectedIndex}}>
        {children}
        </MyContext.Provider>
      
    </div>
  )
}

export default ContextProvider

