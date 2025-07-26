import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import Create from './Components/Create';
import Read from './Components/Read';

const App = () => {
  const [todos, settodos] = useState([
    { id: 1, title: "to be done", isCompleted: true },
  ])

  return (
    <>
      <Create todos={todos} settodos={settodos} />
      <Read todos={todos} settodos={settodos} />
    </>
  )
}

export default App