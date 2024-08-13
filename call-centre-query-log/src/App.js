import React, { useState } from 'react';
import QueryForm from './components/QueryForm';
import QueryList from './components/QueryList';

function App() {
  const [queries, setQueries] = useState([]);

  const addQuery = (query) => {
    setQueries([...queries, query]);
  };

  return (
    <div className="App">
      <h1>Call Centre Query Log System</h1>
      <QueryForm addQuery={addQuery} />
      <QueryList queries={queries} />
    </div>
  );
}

export default App;

