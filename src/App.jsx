import React, { useState } from 'react';

const App = () => {
  const [todos, settodos] = useState([
    { id: 1, text: 'Todo 1', isCompleted: true },
  ])
  const [title, settitle] = useState("")
  const [completed, setcompleted] = useState(true)
  const [gender, setgender] = useState("Male")
  const [city, setcity] = useState("Mumbai")
  return (
    <div><h1>Create Todos</h1>
      <form action="">

        <input
          onChange={(e) => settitle(e.target.value)}
          value={title}
          type="text" placeholder='title' /><br />

        <input type="checkbox"
          checked={completed}
          onChange={(e) => setcompleted(e.target.checked)} />Completed <br />

        <input type="radio"
          value="Male"
          onChange={(e) => setgender(e.target.value)}
          checked={gender == "Male" && true}
        />Male

        <input type="radio"
          value="Female"
          onChange={(e) => setgender(e.target.value)}
          checked={gender == "Female" && true}
        />Female <br />

        <select onChange={(e) => setcity(e.target.value)}
          value={city}>
          <option value="Delhi">Delhi</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Kolkata">Kolkata</option>
        </select>

        <button>Create Todo</button>
      </form>
    </div>
  )
}

export default App