import React, { Fragment } from 'react'
import "./Read.css"

const Read = (props) => {
    const todos = props.todos
    const settodos = props.settodos

    const DeleteHandler = (id) => {
        console.log(id)
        const filteredtodo = todos.filter((todo) => todo.id != id)
        settodos(filteredtodo)
    }

    const rendertodos = todos.map(todo => {
        return <li key={todo.id}> {todo.title} | <span onClick={() => DeleteHandler(todo.id)}>Done</span></li>
    })
    return (
        <Fragment>
            <h1 className='read_list_heading'>Pending todos </h1>
            <ol>{rendertodos}</ol>
        </Fragment>
    )
}

export default Read