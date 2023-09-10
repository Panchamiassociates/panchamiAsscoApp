import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../Resources/StyleSheets/AdminPanel.css'

function Users() {
    const [Users , setUsers] = useState([]);

    useEffect(()=>{
        axios.get('https://panchami-associates-backend.onrender.com/api/v1/user').then(res=>{
            setUsers(res.data.Users)
            console.log(res.data.Users)
        }).catch(err=>{
            console.log(err)
        })
    },[Users])
    const handleDelete = async (userId) => {
        try {
          const response = await axios.delete(`https://panchami-associates-backend.onrender.com/api/v1/user/${userId}`);
          if (response.status === 200) {
          } else {
            alert("user not found")
          }
        } catch (error) {
          console.error('Error approving user:', error);
        }
      };
    const filter = Users.filter(user => user.isActive === true)
  return (
     <div >
      {filter.length > 0 ?filter.map((user) => {
        return (
          <div className='Users' key={user.id}>
            <h2>{user.username}</h2>
            <p>{user.email}</p>
            <p>{user.phoneNumber}</p>
            <p>{user.Role}</p>
            <p className={`status ${user.isActive ? 'active' : 'inactive'}`}>
              {user.isActive ? 'Active' : 'InActive'}
            </p>
            <button className='btn btn-danger' onClick={() => handleDelete(user._id)}>Delete</button>
          </div>
        );
      }) : <h1 className='empty my-5'>No customers in database</h1>}
    </div>
  )
}

export default Users