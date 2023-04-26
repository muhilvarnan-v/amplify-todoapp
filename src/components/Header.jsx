import React from "react"

const styles = {
    header: {
        width: "100%",
        background: "#000",
        color: "#FFF",
        margin: 0,
        padding: 10
    }
}
export default function Header() {
    return (
        <div style={styles.header}>
            <h3>Todo App</h3>
        </div>
    )
}