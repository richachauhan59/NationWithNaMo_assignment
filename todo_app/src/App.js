import React, {useState} from 'react'
import './App.css';
import Form from './components/Form'
import TodoList from './components/TodoList'

function App() {
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])
  const [status , setStatus] = useState("all")
  const [filteredTodos, setFilteredTodos] = useState([])

  const handleFilter = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed == true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed == false))
        break;
      default:
        setFilteredTodos(todos)
        break;
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Add ToDo List</h1>
      </header>
      <Form 
        inputText={inputText} 
        todos={todos} 
        setTodos={setTodos} 
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
