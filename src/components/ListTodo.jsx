import React, { useEffect, useState } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { listTodos } from '../graphql/queries'

const styles = {
    listTodoContainer: { margin: 20 },
    todo: { marginBottom: 15 },
    todoName: { fontSize: 20, fontWeight: 'bold' },
    todoDescription: { marginBottom: 0 },
}

export default function ListTodo() {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        fetchTodos()
    }, [])

    async function fetchTodos() {
        try {
            const todoData = await API.graphql(graphqlOperation(listTodos))
            const todos = todoData.data.listTodos.items
            setTodos(todos)
        } catch (err) { console.log('error fetching todos') }
    }

    return (<div style={styles.listTodoContainer}>
        <h4>Todos</h4>
        {
            todos.map((todo, index) => (
                <div key={todo.id ? todo.id : index} style={styles.todo}>
                    <p style={styles.todoName}>{todo.name}</p>
                    <p style={styles.todoDescription}>{todo.description}</p>
                </div>
            ))
        }
    </div>)
}

