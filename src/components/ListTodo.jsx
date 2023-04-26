import React, { useEffect, useState } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { listTodos } from '../graphql/queries'
import { View, Heading, Text } from '@aws-amplify/ui-react'

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

    return (<View style={styles.listTodoContainer}>
        <Heading level={4}>Todos</Heading>
        {
            todos.map((todo, index) => (
                <View key={todo.id ? todo.id : index} style={styles.todo}>
                    <Text style={styles.todoName}>{todo.name}</Text>
                    <Text style={styles.todoDescription}>{todo.description}</Text>
                </View>
            ))
        }
    </View>)
}

