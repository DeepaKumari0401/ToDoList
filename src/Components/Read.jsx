import React, { Fragment } from 'react'

const Read = (props) => {
    const todos = props.todos
    const settodos = props.settodos
    const rendertodos = todos.map(todo => {
        return <li key={todo.id}> {todo.title}</li>
    })
    return (
        <Fragment>
            <h1>Pending todos </h1>
            <ol>{rendertodos}</ol>
        </Fragment>
    )
}

export default Read