import React from 'react';
import '../Resources/StyleSheets/Query.css';

function Query({ query }) {
  const formattedDate = new Date(query.date).toLocaleString();

  return (
    <div className="query-container">
      <div className="date-time top-right">{formattedDate}</div>
      <h2 className="query-title">Name: {query.name}</h2>
      <p className="query-text">Email: {query.email}</p>
      <p className="query-text">Phone Number: {query.phoneNumber}</p>
      <p className="query-text">Message: {query.message}</p>
    </div>
  );
}

export default Query;
