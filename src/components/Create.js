import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Create() {
    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [age , setAge] = useState('');
    
    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault(); // jab form submit hoga wo reload na ho uske liye use this
        axios.post('https://64e6f165b0fd9648b78f141d.mockapi.io/crud' ,{
            e_name:name,
            e_email:email,
            e_age:age
            
        }).then((response)=>{
            navigate('/')
        });
    }
  return (
    <>
    
        <div className='row'>
            <div className='mb-3 mt-3'>

                <Link to ='/'>
                <button className='btn btn-primary'>Read Data</button>
                </Link>

        </div>
            <div className="col-md-4">
                    <div className='bg-primary p-1 text-center' >
                        <h1> Create Data</h1>
                    </div>
                    <br/>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Enter Name: </label>
                                <input type='text' placeholder='Name' className='form-control' onChange={(e)=>{setName(e.target.value)}}/>
                            </div>
                            <div className="form-group">
                                <label>Enter Age: </label>
                                <input type='number' placeholder='Age' className='form-control' onChange={(e)=>{setAge(e.target.value)}}/>
                            </div>
                            <div className="form-group">
                                <label>Enter Email: </label>
                                <input type='email' placeholder='Email' className='form-control' onChange={(e)=>{setEmail(e.target.value)}}/>
                            </div>
                            <br/>
                            <div className="d-grid">
                            <input type='submit' value='Submit' className='btn btn-primary'/>
                            </div>
                    
                    </form>
               
            </div>
        
        </div>
    </>
    
  )
}

export default Create
