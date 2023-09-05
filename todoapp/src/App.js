import React, { useState } from 'react';
import './index.css';
import './App.css';

function App() 
{
  const [todoInput, setTodoInput] = useState('')
  const [todoList, setTodoList] = useState([
                                                {
                                                  id: 1,
                                                  task: 'mobile',
                                                },
                                                {
                                                  id: 2,
                                                  task: 'food and beverages',
                                                },
                                          ])

  function inputChange(e)
  {
    let task = e.target.value
    setTodoInput(task)
  }

  function addNewToDo()
  {
    if (todoInput === '') 
    {
      alert('Enter the text to add to the todo list');
    } 
    else 
    {
      const newTodo = [
                        ...todoList,
                        {
                        id: Date.now(), // for updating the 1, 2, 3, 4, .... numbers
                        task: todoInput,
                        }
                      ]

      setTodoList(newTodo)
      setTodoInput('')
    }
  }

  function deleteToDo(id) 
  {
    let updatedData = todoList.filter((todo) => todo.id !== id)
    setTodoList(updatedData)
  }

  return (
    <div className="container mt-5 w-50">
      <h3 className="text-center">Todo App using React</h3>

      <div className="input-group">
        <input type="text" onChange={inputChange} value={todoInput} className="form-control" placeholder="Enter the text here"/>
        <button type="submit" onClick={addNewToDo} className="btn btn-primary">Add</button>
      </div>

      <ol className="list-group">
        {
          todoList.map((todo) => {
            return (
            <li className="list-group-item" key={todo.id}>
              <p>{todo.task}</p>
              <button type="button" className="btn" onClick={function () {deleteToDo(todo.id)}}>❌</button>
            </li>
          )
          })
        }
      </ol>
    </div>
  )
}

export default App;
