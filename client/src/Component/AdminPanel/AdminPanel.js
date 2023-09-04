import React from 'react';
import '../Resources/StyleSheets/AdminPanel.css';
import UserTable from './UserTable';
import UserList from './UserList';

function AdminPanel({ adminAuth }) {
  return (
    <div className='AdminPanel'>
      {adminAuth ? (
        <div className=' p-5 row'>
          <div className='col-lg-6 col-md-12 '>
            <UserList />
          </div>
          <div className='col-lg-6 col-md-12 p-3 text-center'>
            <UserTable />
          </div>
        </div>
      ) : (
        <h4 className='error'>You must login as admin to view this page</h4>
      )}
    </div>
  );
}

export default AdminPanel;
