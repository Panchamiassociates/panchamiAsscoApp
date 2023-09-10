import React from 'react';
import Users from './Users';
import PendingUser from './PendingUser';
import ProjectUpload from '../Project/ProjectUpload';
import '../Resources/StyleSheets/AdminPanel.css';

function AdminPanel({auth}) {
  console.log("role: " +   auth);
  return (
    <>{ auth  === "ADMIN"?
    <div className="Dashboard row justify-content-between">
      <div className="UserList col-lg-6">
        <Users />
      </div>
      <div className="pending col-lg-6">
        <div className="PendingUser">
          <PendingUser />
        </div>
        <div className="ProjectUpload">
          <ProjectUpload />
        </div>
      </div>
    </div> : <h3>You need admin privilages to access this page</h3>}
    </>
    
  );
}

export default AdminPanel;
