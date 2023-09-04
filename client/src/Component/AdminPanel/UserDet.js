import React from 'react';

function UserDet({ user }) {
  return (
    <div className="user-card row">
      <div className="name col-lg-3 col-md-3 col-sm-6 col-12">
        <h5 className="user-card-title">{user.username}</h5>
      </div>
      <div className="phone col-lg-4 col-md-4 col-sm-6 col-12">
        <p className="user-card-email">{user.email}</p>
      </div>
      <div title = "Active users can add testimonials and are verified" className={`status col-lg-3 col-md-3 col-sm-6 col-12 user-card-status ${user.isActive ? 'text-success' : 'text-danger'}`}>
        {user.isActive ? 'Active' : 'Inactive'}
        
      </div>
      <div className="phone col-lg-2 col-md-2 col-sm-6 col-12">
        <p className="user-card-phone">{user.PhoneNumber}</p>
      </div>
    </div>
  );
}

export default UserDet;
