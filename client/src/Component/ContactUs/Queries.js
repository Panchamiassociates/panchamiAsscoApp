import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Query from './Query';
import '../Resources/StyleSheets/error.css';

function Queries({ setNumber, adminAuth }) {
  const [queries, setQueries] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/v1/getQuery').then((res) => {
      setQueries(res.data.data);
      setNumber(res.data.data.length);
    });
  }, []); // Use an empty dependency array to fetch queries only once

  return (
    <>
      {adminAuth ? (
        queries.length > 0 ? (
          queries.map((query) => (
            <Query key={query._id} query={query} />
          ))
        ) : (
          <h4 className='error'>No queries to view</h4>
        )
      ) : (
        <h4 className='error'>You must log in as an admin to view this page</h4>
      )}
    </>
  );
}

export default Queries;
