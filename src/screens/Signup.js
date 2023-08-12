import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Signup = () => {
    const[credentials,setcredentials]=useState({name:"",email:"",password:"",currentAdress:""})//geolocation is given as current Address
    const handleSubmit=async(e)=>{
            e.preventDefault();
            const response=await fetch("http://localhost:5000/api/createuser",{
               method:'POST',
               headers:{
                'Content-Type':'application/json'
               } ,
               body:JSON.stringify({
                name:credentials.name,
                email:credentials.email,
                password:credentials.password,
                location:credentials.currentAdress
               })
            });
            const json=await response.json()
            console.log(json);
            if(!json.success){
                alert("Enter Valid Credentitals")
            }
    }
    const onChange=(event)=>{
        setcredentials({...credentials,[event.target.name]:event.target.value})
    }
    return (
        <>
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" placeholder="Enter Your Name"  name='name' value={credentials.name} onChange={onChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"  name='email' value={credentials.email} onChange={onChange}/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name='password' value={credentials.password} onChange={onChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Location</label>
                        <input type="text" className="form-control" placeholder="Enter Your Address"  name='currentAdress' value={credentials.currentAdress} onChange={onChange}/>
                    </div>
                    <button type="submit" className="m-3 btn btn-light ">Welcome to FoodX🍽️</button>
                    <Link to='/login' className='m-3 btn btn-danger'>Already a FoodX User🫰</Link>
                </form>
            </div>
        </>
    )
}

export default Signup;