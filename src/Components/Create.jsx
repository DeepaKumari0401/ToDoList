import React from 'react'
import { nanoid } from 'nanoid';
import { useState } from 'react'

const Create = (props) => {
    const todos = props.todos
    const settodos = props.settodos
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
    return (
        <>
            <h1>Create Todos</h1>
            <form action="" onSubmit={SubmitHandler}>

                <input
                    onChange={(e) => settitle(e.target.value)}
                    value={title}
                    type="text" placeholder="Title" /><br /><br />
                <button>Create Todo</button>
            </form>
        </>
    )
}

export default Create