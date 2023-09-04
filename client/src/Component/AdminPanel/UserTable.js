import axios from 'axios'
import React, { useEffect, useState } from 'react'
import UserInfo from './UserInfo'
import '../Resources/StyleSheets/AdminPanel.css'

function UserTable() {
    const [newUsers , setNewUsers] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:3001/api/v1/get-Users').then(res=>{
            setNewUsers(res.data.data);
        })
    })
    const filteredUsers = newUsers.filter(user => !user.isActive);
  return (
    <div className='userTable'>
        <h4>ADD NEW CUSTOMERS</h4>
        <div className='userList'>
            { filteredUsers.length > 0 ?filteredUsers.map(user=>{
                return <UserInfo user = {user}/>
            }) : <h4>No new users found</h4>}
        </div>
    </div>
  )
}

export default UserTable