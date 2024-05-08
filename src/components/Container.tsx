import { TodoInput } from "./TodoInput"
import { TodoList } from "./TodoList"
import { useState, useEffect } from "react"
import { TodoItemType } from "../utils/types"
import './Container.css'

type ViewStateType = "all" | "active" | "completed"

export function Container() {
    const [todos, setTodos] = useState<TodoItemType[]>([])
    const [isDarkMode, setIsDarkMode] = useState<boolean>(true)
    const [viewState, setViewState] = useState<ViewStateType>("all")
    useEffect(() => {
        console.log(JSON.stringify(todos, null, 2))
    }, [todos])

    const filterBy = (viewState: ViewStateType) => {
        if (viewState == "active") {
            return todos.filter(e => !e.isDone)
        }
        if (viewState == "completed") {
            return todos.filter(e => e.isDone)
        }
        return todos
    }

    const handleClearCompleted = () => {
         setTodos(prev => prev.filter(t => !t.isDone))
    }

// let tab = [{xy}, {xx}, {xy}] 
// tab.filter(e => e.has(y)).length

    return (
        <main className={`container ${isDarkMode ? "" : 'bright'}`}>
            <section className="header">
                <button className="button-mode" onClick={e => setIsDarkMode(!isDarkMode)}>
                    {!isDarkMode ? <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path fill="#FFF" fill-rule="evenodd" d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path fill="#FFF" fill-rule="evenodd" d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z" /></svg>}
                </button>
                <TodoInput setTodos={setTodos} isDarkMode={isDarkMode}></TodoInput>
            </section>
            <TodoList toDos={filterBy(viewState)} setTodos={setTodos} isDarkMode={isDarkMode}></TodoList>
            <section className={`option-list ${isDarkMode ? "" : 'option-light'}`}>
                <div className="item-left">{todos.filter(todo=>!todo.isDone).length} items left</div>
                <button className="buttons" onClick={() => setViewState("all")}>All</button>
                <button className="buttons" onClick={() => setViewState("active")}>Active</button>
                <button className="buttons" onClick={() => setViewState("completed")}>Completed</button>
                <button className="buttons" onClick={() => handleClearCompleted()}>Clear Completed</button>
            </section>

        </main>
    )
}