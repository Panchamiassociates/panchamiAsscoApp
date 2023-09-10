import axios from 'axios';
import React, { useEffect, useState } from 'react'
function PendingUser() {
  const [Users , setUsers] = useState([]);

    useEffect(()=>{
        axios.get('https://panchami-associates-backend.onrender.com/api/v1/user').then(res=>{
            setUsers(res.data.Users)
            console.log(res.data.Users)
        }).catch(err=>{
            console.log(err)
        })
    },[Users])

    const handleApprove = async (userId) => {
      try {
        const response = await axios.patch(`https://panchami-associates-backend.onrender.com/api/v1/user/${userId}`);
        if (response.status === 200) {
          // Successfully updated the status, you can update the UI accordingly
          // You can also remove the user from the list or update their status in the state
        } else {
          // Handle other status codes if needed
        }
      } catch (error) {
        console.error('Error approving user:', error);
      }
    };
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
    const filter = Users.filter(user => user.isActive === false)
  return (
    <div className='Pending-user'>
        {filter.length > 0 ?
            filter.map(user=>{
                return <div className='Users' key={user.id}>
                <p>{user.username}</p>
                <p>{user.email}</p>
                <p>{user.phoneNumber}</p>
                <p>{user.Role}</p>
                <button className='btn btn-success' onClick={() => handleApprove(user._id)}>Approve</button>

                <button className='btn btn-danger' onClick={() => handleDelete(user._id)}>Delete</button>
              </div>
            })
            : <h1 className='empty'>No new request</h1>
        }
    </div>
  )
}

export default PendingUser