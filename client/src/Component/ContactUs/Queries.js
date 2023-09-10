import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../Resources/StyleSheets/Query.css'

function Queries() {
  const [queries , setQueries] = useState([]);
  useEffect(()=>{
    axios.get('https://panchami-associates-backend.onrender.com/api/v1/queries').then(res=>{
      setQueries(res.data.data);
    }).catch(err=>{
      console.log("cannot be fetched");
    })

  })

  const handleDelete = (id)=>{
    axios.delete(`https://panchami-associates-backend.onrender.com/api/v1/queries/${id}`)
    alert("deleted successfully");
  }
  return (
    <div className='query-page'>
{queries.map(query=>{
  return <div className='query'>
      <h4>{query.name}</h4>
      <p>{query.phoneNumber}</p>
      <p>{query.email}</p>
      <p>{query.message}</p>
      <button className='btn btn-danger query-delete' onClick={()=>handleDelete(query._id)}>delete</button>
  </div>
})}

    </div>
  )
}

export default Queries