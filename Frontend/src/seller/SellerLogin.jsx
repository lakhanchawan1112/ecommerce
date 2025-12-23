import React from 'react'

const SellerLogin = () => {
  return (
    <div>
        <form action="">
            <h1>Let us create your free Business account</h1>

            <div className='seller-form'>
                <div>
                <label htmlFor="">Full Name</label>
                <input type="text" placeholder='name'/>
                </div>
                <div>
                <label htmlFor="">Email</label>
                <input type="text" placeholder='email'/>
                </div>
                <div>
                <label htmlFor="">Mobile No.</label>
                <input type="text" placeholder='mobile no.'/>
                </div>
                <div>
                <label htmlFor="">Company Name</label>
                <input type="text" placeholder='company name'/>
                </div>
                <div>
                <label htmlFor="">Password</label>
                <input type="text" placeholder='password'/>
                </div>
                <div>
                <label htmlFor="">Confirm Password</label>
                <input type="text" placeholder='confirm password'/>
                </div>
                <div>
                <button >Sign Up</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default SellerLogin