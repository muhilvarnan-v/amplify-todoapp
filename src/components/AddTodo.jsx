/* src/App.js */
import React, { useState } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { createTodo } from '../graphql/mutations'

const styles = {
    addTodoContainer: { margin: 20 },
    input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18, display: "block" },
    button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 15, padding: '10px', display: "block" }
}

const initialState = { name: '', description: '' }

export default function AddTodo() {

    const [formState, setFormState] = useState(initialState)

    function setInput(key, value) {
        setFormState({ ...formState, [key]: value })
    }

    async function addTodo() {
        try {
            if (!formState.name || !formState.description) return
            const todo = { ...formState }
            setFormState(initialState)
            await API.graphql(graphqlOperation(createTodo, { input: todo }))
        } catch (err) {
            console.log('error creating todo:', err)
        }
    }

    return (
        <div style={styles.addTodoContainer}>
            <input
                onChange={event => setInput('name', event.target.value)}
                style={styles.input}
                value={formState.name}
                placeholder="Name"
            />
            <textarea
                onChange={event => setInput('description', event.target.value)}
                style={styles.input}
                value={formState.description}
                placeholder="Description"
                rows={10}
                cols={50}
            />
            <button style={styles.button} onClick={addTodo}>Create Todo</button>
        </div>
    )
}