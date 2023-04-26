import React from "react"
import { View, Heading, Text, Button } from '@aws-amplify/ui-react';

const styles = {
    header: {
        width: "100%",
        color: "#FFF",
        margin: 0,
        padding: 10,
        display: "flex"
    },
    title: {
        width: "80%",

    }
}
export default function Header({ signOut, user }) {
    return (
        <View style={styles.header}>
            <Heading style={styles.title} level={2}>Todo App</Heading>
            <View style={styles.user}>
                <Text>Hi, {user.username}  <Button onClick={signOut}>logout</Button></Text>
            </View>
        </View>
    )
}