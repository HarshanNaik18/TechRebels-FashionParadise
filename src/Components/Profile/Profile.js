import React from 'react'
import './Profile.css'


function Profile() {
  return (
    <div className='profile-container' >
      <div className='profile-info-container'>
        <div className='profile-user-info'>
            <h3 style={{textAlign:'start',paddingLeft:'10px'}}> <i class="fa fa-user-circle" aria-hidden="true"></i> &nbsp; User Name</h3>
            <h4 style={{textAlign:'start',paddingLeft:'10px'}}> <i class="fa fa-envelope" aria-hidden="true"></i> &nbsp; useremail@gmail.com</h4>
        </div>
        <ul >
            <li>Book Marked</li>
            <li>Book Marked</li>
            <li>Book Marked</li>
            <li>Book Marked</li>
        </ul>
      </div>
      <div className='profile-side-display'>
      </div>
    </div>
  )
}

export default Profile
