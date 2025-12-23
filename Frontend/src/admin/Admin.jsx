import React from 'react'

const Admin = () => {
  return (
    <div>
        <h1>Admin Login</h1>
        <p>Please Login as Admin</p>
        <div className='ctn-admin-login'>
            <input type="text" placeholder='email'/>
            <input type="text" placeholder='password'/>
            <button>Login</button>
        </div>
    </div>
  )
}

export default Admin