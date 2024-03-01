import axios from 'axios';
import { useState, useEffect } from 'react';
import { FaTrash } from 'react-icons/fa';
import { ImCheckmark } from 'react-icons/im';
import Button from './components/Button';
import TaskGenerator from './components/TaskGenerator';
import Searchbar from './components/Searchbar';

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
    <div className="flex h-screen bg-slate-500 flex-col ">
      <TaskGenerator
        data={data}
        handleClickTask={handleClickTask}
        handleClickSave={handleClickSave}
        loading={loading}
      />

      <div>
        <div className="flex flex-col items-center gap-2 mt-4">
          <Searchbar handleSubmit={handleSubmit} handleChange={handleChange} />

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
      </div>
    </div>
  );
}

export default App;
