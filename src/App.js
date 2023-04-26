import React from 'react'
import { withAuthenticator, View } from '@aws-amplify/ui-react';
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
    <View style={styles.container}>
      <AddTodo />
      <ListTodo />
    </View>
  </>
  );
}

export default withAuthenticator(App);
