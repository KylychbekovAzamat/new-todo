import './App.css';
import Header from './components/header/Header';
import CreateTodo from './components/create-todo/CreateTodo';
import TodoItem from './components/todo-items/Todoitem';
import { useState } from 'react';

function App() {

  const [arr, setArr] = useState([
    { id: 1, text: 'Купить хлеб', boolean: true },
    { id: 2, text: 'Купить хлеб', boolean: true },
    { id: 3, text: 'Купить соду', boolean: false },
    { id: 4, text: 'Купить соду', boolean: false },
    { id: 5, text: 'Сделать проект на react.js ', boolean: true }
  ])


  const result = arr.reduce((acc, item) => {
    return acc + Number(item.boolean);
  }, 0)

  const handleAddTodo = (newText) => {
    setArr([...arr, { text: newText, boolean: false, id: Date.now() }])
  }

  const handleDeleteTodo = (id) => {
    // alert('Delete?'+ id)
    const newArr = arr.filter((item) => {
      return item.id !== id
    })
    setArr(newArr)
  }

  const handleStatus = (id) => {
    const status = arr.map((item) => {
      debugger
      if (item.id === id) {
        return { ...item, boolean: !item.boolean }
      }
      return item
    })
    setArr(status)
  }

  const newArr = arr.map((item) => {
    return <TodoItem
      handleDelete={handleDeleteTodo}
      handleStatus={handleStatus}
      id={item.id}
      text={item.text}
      boolean={item.boolean} />
  })

  return (
    <div className="App">
      <Header length={arr.length} result={result} />
      <div className='content'>
        <CreateTodo addNewTodo={handleAddTodo} />
        <div className='todos-wrapper'>
          {newArr}
        </div>
      </div>
    </div>
  )
}

export default App;