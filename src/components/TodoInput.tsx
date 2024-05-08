import { useState } from "react";
import { TodoItemType } from "../utils/types";
import './TodoInput.css'

export function TodoInput({ setTodos, isDarkMode }: { setTodos: any, isDarkMode: boolean }) {
    
    const [inputValue, setInputValue] = useState<string>("")
    const handleInputChange = (e: any) => {
        setInputValue(e.target.value.trimStart())
    }
    
    const handleAddClick = (e: any) => {        
        let myUUID = crypto.randomUUID();        
        if(!inputValue ) {
            alert("Must not be empty")
            return
        }
      
                
        setTodos((prev: TodoItemType[]) => {
            return [...prev, { name: inputValue, isDone: false, id: myUUID }]
        })
        setInputValue("")
    }
    return (
        <div className="boxTodo">
            <div className="header">T O  D O</div>
            <div className="boxInput">
                <input className={`input ${isDarkMode ? "" : 'light'}`} value={inputValue} onChange={(event) => handleInputChange(event)} placeholder="Create to new todo..."></input>
                <button className={`button ${isDarkMode ? "" : 'light'}`} onClick={(e) => handleAddClick(e)} >Add</button>
            </div>
        </div>
    )
}

