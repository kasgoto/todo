import tick from "../assets/tick.png"
import untick from "../assets/not_tick.png"
import delete_icon from "../assets/delete.png"

const TodoItems = ({
  text,
  isComplete,
  id,
  deleteTodo,
  toggleCompleted,
}: {
  text: string
  isComplete: boolean
  id: number
  deleteTodo: any
  toggleCompleted: any
}) => {
  return (
    <div className='flex items-center my-3 gap-2'>
      <div
        onClick={() => toggleCompleted(id)}
        className='flex flex-1 items-center cursor-pointer'
      >
        {isComplete ? (
          <img src={tick} alt='tick' className='w-7' />
        ) : (
          <img src={untick} alt='untick' className='w-7' />
        )}
        <p
          className={` ml-4 text-[17px] ${
            isComplete ? "text-gray-400 line-through" : "text-slate-700"
          }`}
        >
          {text}
        </p>
      </div>
      <img
        className='w-3.5 cursor-pointer'
        src={delete_icon}
        alt='delete'
        onClick={() => deleteTodo(id)}
      />
    </div>
  )
}

export default TodoItems
