import { TodoItemType } from "../utils/types";
import { TodoItem } from "./TodoItem";
import './TodoList.css'

export function TodoList({toDos, isDarkMode, setTodos}: {toDos:TodoItemType[], isDarkMode: boolean, setTodos: Function}) {
    const handleClick = (event:any) => {
        setTodos((prev:TodoItemType[]) => prev.map(e => {
            if(e.id == event.target.id){
                e.isDone = !e.isDone
            } 
            return e
        }))
    }
    return (
            <div className={`list ${isDarkMode ? "" : 'light'}`}>
                {                    
                    toDos.map((todo:TodoItemType) =>  (
                        <TodoItem todo={todo} handleClick={handleClick}></TodoItem>
                    ))
                }
            </div>
    )
}

