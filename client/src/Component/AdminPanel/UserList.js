import axios from 'axios';
import React, { useState, useEffect } from 'react';
import UserDet from './UserDet';
import '../Resources/StyleSheets/UserList.css'; // Import the CSS file

function UserList() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/v1/get-Users').then((res) => {
      setUserList(res.data.data);
    });
  }, [userList]); // Empty dependency array to run the effect only once

  return (
    <div className="user-list-container">
      <h1 className="user-list-title">Customer Details</h1>
      <div className="user-list">
        {userList.map((user) => (
          <UserDet key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default UserList;
