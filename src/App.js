import React from 'react'
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import AddTodo from './components/AddTodo';
import ListTodo from './components/ListTodo';
import Header from './components/Header';

const styles = {
  container: { margin: '0 auto', display: 'flex', flexDirection: 'row', padding: 20 },
}

function App({ signOut, user }) {
  return (<>
    <Header signOut={signOut} user={user} />
    <div style={styles.container}>
      <AddTodo />
      <ListTodo />
    </div>
  </>
  );
}

export default withAuthenticator(App);
