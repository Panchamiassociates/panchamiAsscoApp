import axios from 'axios';
import React from 'react';
import '../Resources/StyleSheets/AdminPanel.css'

function UserInfo({ user }) {
  const deleteUser = (id) => {
    axios.delete(`http://localhost:3001/api/v1/delete/${id}`)
      .then((res) => {
        alert(res.data.message);
      })
      .catch((error) => {
        console.error('Error deleting user:', error);
      });
  };

  const addUser = (id) => {
    // Make a PATCH request to update the isActive property
    axios.patch(`http://localhost:3001/api/v1/add-User/${id}`)
      .then((response) => {
        // Handle the response, if needed
        alert("user added successfully")
        console.log('User isActive set to true:', response.data);
      })
      .catch((error) => {
        alert("user not found")
        // Handle errors, e.g., display an error message
        console.error('Error setting user isActive to true:', error);
      });
  };

  return (
    <div className='userDet row'>
      <p className=' col-lg-3 col-sm-4 col-md-4'> {user.username}</p>
      <p className=' col-lg-5 col-sm-4 col-md-4'>{user.email}</p>
      <div className='buttonBox col-lg-4 col-sm-4 col-md-4'>
        <button className='btn btn-success mr-3' onClick={() => addUser(user._id)}>
          Add
        </button>
        <button className='btn btn-success mx-3' onClick={() => deleteUser(user._id)}>
          Reject
        </button>
      </div>
    </div>
  );
}

export default UserInfo;
