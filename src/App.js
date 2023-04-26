import React from 'react'

import AddTodo from './components/AddTodo';
import ListTodo from './components/ListTodo';
import Header from './components/Header';

const styles = {
  container: { margin: '0 auto', display: 'flex', flexDirection: 'row', padding: 20 },
}

function App() {
  return (<>
    <Header />
    <div style={styles.container}>
      <AddTodo />
      <ListTodo />
    </div>
  </>
  );
}

export default App;
