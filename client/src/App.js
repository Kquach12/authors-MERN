import React from 'react';
import { Router } from '@reach/router';   /* this is new */
import Main from './views/Main';
import Update from './views/Update';
import AddAuthor from './views/AddAuthor';
import Error from './views/Error';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/"/>
        <Update path="/:id/edit" />
        <AddAuthor path="/create" />
        <Error path="/error" />
      </Router>
    </div>
  );
}

export default App;
