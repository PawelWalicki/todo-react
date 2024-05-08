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

/* 
    <img src="/icon-moon.svg"></img>
    snake_case


[
  {
    "name": "pies",
    "isDone": false,
    "id": "25611a5a-5667-4c11-9d5f-7c674b6e0648"
  },
  {
    "name": "kot",
    "isDone": true,
    "id": "d0622fd0-e51e-48aa-841d-480fd9744ff2"
  },
  {
    "name": "ryby",
    "isDone": false,
    "id": "f06302de-84af-4fee-9e08-7bc44a5395f9"
  },
  {
    "name": "aaa",
    "isDone": false,
    "id": "e87c41d6-046a-455f-9ba1-273b3bea8c4d"
  }
]

*/
