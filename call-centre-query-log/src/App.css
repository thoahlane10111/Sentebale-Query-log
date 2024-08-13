import React, { useState } from 'react';

function QueryForm({ addQuery }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query) {
      addQuery(query);
      setQuery('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter query"
      />
      <button type="submit">Add Query</button>
    </form>
  );
}

export default QueryForm;

