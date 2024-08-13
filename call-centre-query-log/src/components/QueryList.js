import React from 'react';

function QueryList({ queries }) {
  return (
    <ul>
      {queries.map((query, index) => (
        <li key={index}>{query}</li>
      ))}
    </ul>
  );
}

export default QueryList;

