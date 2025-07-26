# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

<!-- 
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

export default App -->

1. To append a new data to useState we need to 
a. Copy the original data
b. pushing the data in the copied data
c. And setting the data
<!-- 
let copytodos=[...todos] ->copy
     copytodos.push(newtodo) ->push
     settodos(copytodos) -> set new data-->

# filter
filter is used to filter the data from the array-implicit return

# Types Of css
1. Inline CSS
2. Internal CSS
3. External CSS
4. Module css-do not use tag selector here. use class selector or id selector

5.class is a reserved keyword in react thus className is used