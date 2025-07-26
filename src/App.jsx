import { nanoid } from 'nanoid';
import React, { useState } from 'react';

const App = () => {
  const [todos, settodos] = useState([
    { id: 1, title:"to be done", isCompleted: true },
  ])
  const [title, settitle] = useState("")

  const SubmitHandler = (e) => {
    e.preventDefault()

    const newtodo = {
      id: nanoid(),
      title: title,
      isCompleted: false
    }

    // let copytodos = [...todos]
    // copytodos.push(newtodo)
    // settodos(copytodos)
    settodos([...todos, newtodo])
    settitle("")//clears input 
  }
  const rendertodos = todos.map(todo => {
    return <li key={todo.id}> {todo.title}</li>
  })
  return (
    <div><h1>Create Todos</h1>
      <form action="" onSubmit={SubmitHandler}>

        <input
          onChange={(e) => settitle(e.target.value)}
          value={title}
          type="text" placeholder="Title" /><br /><br />
        <button>Create Todo</button>
      </form>
      <hr />
      <h1>Pending todos </h1>
      <ol>{rendertodos}</ol>
    </div>
  )
}

export default App