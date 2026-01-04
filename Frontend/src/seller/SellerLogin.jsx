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
      const res = await fetch("http://localhost:3000/api/seller/register", {
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
        <form onSubmit={handleSubmit}>
            <h1>Let us create your free Business account</h1>

            <div className='seller-form'>
                <div>
                <label htmlFor="">Full Name</label>
                <input name="name" placeholder='name' value={formData.name}  onChange={handleChange}/>
                </div>
                <div>
                <label htmlFor="">Email</label>
                <input name="email" placeholder='email' value={formData.email} onChange={handleChange}/>
                </div>
                <div>
                <label htmlFor="">Mobile No.</label>
                <input name="phone" placeholder='mobile no.' value={formData.phone} onChange={handleChange}/>
                </div>
                <div>
                <label htmlFor="">Company Name</label>
                <input name="company" placeholder='company name' value={formData.company} onChange={handleChange}/>
                </div>
                <div>
                <label htmlFor="">Password</label>
                <input type="password" name='password' placeholder='password' value={formData.password} onChange={handleChange}/>
                </div>
                <div>
                <label htmlFor="">Confirm Password</label>
                <input type="password" name="confirmPassword" placeholder='confirm password' value={formData.confirmPassword} onChange={handleChange}/>
                </div>
                <div>
                <button type='submit'>Sign Up</button> 
                </div>
            </div>
        </form>
    </div>
  )
}

export default SellerLogin