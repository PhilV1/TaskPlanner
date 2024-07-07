import axios from 'axios'
import { useState, useEffect } from 'react'
import TaskGenerator from './components/TaskGenerator'
import Searchbar from './components/Searchbar'
import TaskList from './components/TaskList'
import TaskContainer from './components/TaskContainer'
import { GiUltrasound } from 'react-icons/gi'

const url =
  'https://thingproxy.freeboard.io/fetch/https://bored-api.appbrewery.com/random'

function App() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [term, setTerm] = useState('')
  const [todos, setTodos] = useState([])
  console.log(data)
  const fetchData = async () => {
    try {
      setLoading(true)
      const response = await axios.get(url)
      const data = response.data
      if (data) {
        setData(data.activity)
      } else {
        setData('No activity found')
      }
      setLoading(false)
    } catch (error) {
      console.log('Error', error)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    const storedTask = localStorage.getItem('Task')
    if (storedTask) {
      setTodos(JSON.parse(storedTask))
    }
  }, [])

  const handleClickTask = () => {
    fetchData()
  }

  const handleClickSave = () => {
    const uniqueID = Math.floor(Math.random() * 100 * (Math.random() * 100))
    const newTodo = { id: uniqueID + 1, text: data, completed: false }
    setTodos([...todos, newTodo])
    localStorage.setItem('Task', JSON.stringify([...todos, newTodo]))
    fetchData()
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (term !== '') {
      const newTodo = { id: todos.length + 1, text: term, completed: false }
      setTodos([...todos, newTodo])
      localStorage.setItem('Task', JSON.stringify([...todos, newTodo]))
      setTerm('')
    } else {
      alert('Please enter a task')
    }
  }
  function handleChange(e) {
    setTerm(e.target.value)
  }

  function handleDelete(id) {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
    localStorage.setItem('Task', JSON.stringify(newTodos))
  }

  function handleComplete(id) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        const updatedTodo = {
          ...todo,
          completed: !todo.completed,
        }
        !updatedTodo.completed
        return updatedTodo
      }
      return todo
    })
    setTodos(updatedTodos)
    localStorage.setItem('Task', JSON.stringify(updatedTodos))
  }

  return (
    <>
      <TaskGenerator
        data={data}
        handleClickTask={handleClickTask}
        handleClickSave={handleClickSave}
        loading={loading}
      />
      <TaskContainer>
        <Searchbar
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          term={term}
        />
        <TaskList
          todos={todos}
          handleComplete={handleComplete}
          handleDelete={handleDelete}
        />
      </TaskContainer>
    </>
  )
}

export default App
