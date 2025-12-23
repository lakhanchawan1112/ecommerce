import React, { useState } from 'react'

const SellerLogin = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "", 
    phone: "", 
    company: "", 
    password: "", 
    confirmPassword:""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name] : e.target.value
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      console.log(data);
      alert(data.message);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
        <form action="">
            <h1>Let us create your free Business account</h1>

            <div className='seller-form'>
                <div>
                <label htmlFor="">Full Name</label>
                <input name="name" placeholder='name'/>
                </div>
                <div>
                <label htmlFor="">Email</label>
                <input name="email" placeholder='email'/>
                </div>
                <div>
                <label htmlFor="">Mobile No.</label>
                <input name="phone" placeholder='mobile no.'/>
                </div>
                <div>
                <label htmlFor="">Company Name</label>
                <input name="company" placeholder='company name'/>
                </div>
                <div>
                <label htmlFor="">Password</label>
                <input type="password" name='password' placeholder='password'/>
                </div>
                <div>
                <label htmlFor="">Confirm Password</label>
                <input type="password" name="confirmPassword" placeholder='confirm password'/>
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