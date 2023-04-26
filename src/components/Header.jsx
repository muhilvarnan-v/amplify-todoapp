import React from "react"

const styles = {
    header: {
        width: "100%",
        background: "#000",
        color: "#FFF",
        margin: 0,
        padding: 10,
        display: "flex"
    },
    title: {
        width: "80%"
    }
}
export default function Header({ signOut, user }) {
    return (
        <div style={styles.header}>
            <h3 style={styles.title}>Todo App</h3>
            <div style={styles.user}>
                <p>Hi, {user.username}  <button onClick={signOut}>logout</button></p>
            </div>
        </div>
    )
}