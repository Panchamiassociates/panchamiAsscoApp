import React from 'react'
import '../Resources/StyleSheets/UserLogin.css'

function UserLogin() {
  return (
    <div>
        <form>
        <div className='input'>
            <label>Email</label>
            <input placeholder='Email'></input>
        </div>
        <div className='input'>
            <label>Password</label>
            <input placeholder='password'></input>
        </div>
        <button type='submit' className='btn btn-success my-2' data-bs-dismiss="modal">Login</button>
        </form>
    </div>
  )
}

export default UserLogin