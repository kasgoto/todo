import { useEffect, useRef, useState } from "react"
import todo_icon from "../assets/todo_icon.png"
import TodoItems from "./TodoItems"

const Todo = () => {
  const [todoList, setTodoList] = useState<any | null>(
    localStorage.getItem("todoList")
      ? JSON.parse(localStorage.getItem("todoList")!)
      : []
  )

  const inputRef = useRef<HTMLInputElement>(null)
  const addTask = () => {
    const inputText = inputRef.current!.value.trim()
    if (inputText === "") {
      return
    }

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    }

    setTodoList((prev: any) => [...prev, newTodo])
    inputRef.current!.value = ""
  }

  const deleteTodo = (id: number) => {
    setTodoList((prevTodo: any) => {
      return prevTodo.filter((todo: any) => todo.id !== id)
    })
  }

  const toggleCompleted = (id: number) => {
    setTodoList((prevTodo: any) => {
      return prevTodo.map((todo: any) => {
        if (todo.id === id) {
          return { ...todo, isComplete: !todo.isComplete }
        }
        return todo
      })
    })
  }

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList))
  }, [todoList])

  return (
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>
      {/* TITLE */}
      <div className='flex items-center mt-7 gap-2'>
        <img className='w-10' src={todo_icon} alt='logo' />
        <h1 className='text-3xl font-bold'>To-Do App</h1>
      </div>

      {/* INPUT BOX */}
      <div className='flex items-center mt-7 mb-4 bg-blue-100 rounded-xl'>
        <input
          ref={inputRef}
          className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600'
          type='text'
          placeholder='Add your task'
        />
        <button
          onClick={addTask}
          className='border-none rounded-xl bg-orange-600 w-24 h-14 text-white text-lg font-medium cursor-pointer'
        >
          ADD +
        </button>
      </div>

      {/* TODO-LIST */}
      <div>
        {todoList.map((todo: any, index: number) => {
          return (
            <TodoItems
              key={index}
              text={todo.text}
              id={todo.id}
              isComplete={todo.isComplete}
              deleteTodo={deleteTodo}
              toggleCompleted={toggleCompleted}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Todo
