import Button from './Button'
import { FaTrash } from 'react-icons/fa'
import { ImCheckmark } from 'react-icons/im'

function TaskList({ todos, handleComplete, handleDelete, editTask }) {
  return (
    <ul className=" sm:w-96 w-64">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={`bg-white listItem  rounded-md sm:w-96 min-w-60 px-2  flex justify-between  py-1 w-full my-2 `}
        >
          <p
            className={`${
              todo.completed ? 'text-red-600  line-through ' : ''
            }   break-all font-medium`}
          >
            {todo.text}
          </p>

          <div className="button-wrapper flex">
            <Button primary onClick={() => handleComplete(todo.id)}>
              <ImCheckmark />
            </Button>
            <Button danger onClick={() => handleDelete(todo.id)}>
              <FaTrash />
            </Button>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default TaskList
