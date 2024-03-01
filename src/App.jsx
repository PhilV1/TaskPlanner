import axios from 'axios';
import Panel from './components/Panel';
import ClipLoader from 'react-spinners/ClipLoader';
import { useState, useEffect } from 'react';
import { FaTrash } from 'react-icons/fa';
import { ImCheckmark } from 'react-icons/im';
import Button from './components/Button';
import TaskGenerator from './components/TaskGenerator';

const url = 'https://www.boredapi.com/api/activity';

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [term, setTerm] = useState('');
  const [todos, setTodos] = useState([]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(url);
      const data = response.data;
      if (data) {
        setData(data.activity);
      } else {
        setData('No activity found');
      }
      setLoading(false);
    } catch (error) {
      console.log('Error', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const storedTask = localStorage.getItem('Task');
    if (storedTask) {
      setTodos(JSON.parse(storedTask));
    }
  }, []);

  const handleClickTask = () => {
    fetchData();
  };

  const handleClickSave = () => {
    const newTodo = { id: todos.length + 1, text: data, completed: false };
    setTodos([...todos, newTodo]);
    localStorage.setItem('Task', JSON.stringify([...todos, newTodo]));
  };

  function handleSubmit(e) {
    e.preventDefault();
    const newTodo = { id: todos.length + 1, text: term, completed: false };
    setTodos([...todos, newTodo]);
    localStorage.setItem('Task', JSON.stringify([...todos, newTodo]));
    setTerm('');
  }

  function handleChange(e) {
    setTerm(e.target.value);
  }

  function handleDelete(id) {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    localStorage.setItem('Task', JSON.stringify(newTodos));
  }

  function handleComplete(id) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        const updatedTodo = {
          ...todo,
          completed: !todo.completed,
        };
        !updatedTodo.completed;
        return updatedTodo;
      }
      return todo;
    });
    setTodos(updatedTodos);
    localStorage.setItem('Task', JSON.stringify(updatedTodos));
  }

  return (
    <>
      <TaskGenerator />
      <div className="flex justify-center items-center h-screen bg-slate-500 flex-col ">
        <h1 className="font-bold text-white  text-3xl">Task generator.</h1>
        {loading ? (
          <ClipLoader
            color={'#22c55e'}
            loading={loading}
            size={50}
            className="my-8"
          />
        ) : (
          <div className="flex">
            {/* Panel start */}
            <Panel>{data}</Panel>
            {/* Panel end */}
            <button className="bg-red-500 h-fit my-8" onClick={handleClickSave}>
              Save
            </button>
          </div>
        )}
        <button
          className="bg-white rounded-md text-xl font-medium p-2 hover:bg-green-500 duration-200 ease-in-out"
          onClick={handleClickTask}
        >
          Another Task
        </button>

        <div>
          <h2 className="text-white font-bold text-center py-4 text-3xl">
            ToDo List
          </h2>

          {/* Searchbar start */}

          <div className="flex flex-col items-center gap-2">
            <form onSubmit={handleSubmit}>
              <div className="flex justify-between">
                <input
                  type="text"
                  onChange={handleChange}
                  value={term}
                  className="rounded-md px-2 w-full mr-2"
                  placeholder="Create a new task..."
                />
                <button
                  type="submit"
                  className="bg-gray-600 text-white px-2 rounded-md hover:bg-green-600 easw-in-out duration-300"
                >
                  Create
                </button>
              </div>
            </form>
            <ul className="taskList ">
              {todos.map((todo) => (
                <li
                  key={todo.id}
                  className={`bg-white listItem border rounded-md w-[20rem] px-2 mb-2 flex justify-between`}
                >
                  <p
                    className={`${
                      todo.completed
                        ? 'text-red-600 font-medium line-through '
                        : ''
                    }   break-words`}
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
          </div>
          {/* Searchbar end */}
        </div>
      </div>
    </>
  );
}

export default App;
