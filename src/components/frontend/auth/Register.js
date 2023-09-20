import React, { useState } from 'react'; 
import Navbar from '../../../layouts/frontend/Navbar';
import axios from 'axios';

function Register(){


    const[regiterInput,setRegister] = useState({

        name:'',
        email:'',
        password:'',

    });

    const handleInput = (e) => {
        // e.presist();
        setRegister({...regiterInput, [e.target.name]: e.targe.value})
    }


    
    // const onChangeName = (e)=> {
    //      setRegister({  name: e.target.value })
    // }
    // const onChangeEmail = (e) => {
    //      setRegister({ email: e.target.value })
    // }
    // const onChangePassword = (e) => {
    //      setRegister({ password: e.target.value })
    // }
    

    const registerSubmit = (e) =>{ 
        e.preventDefault();

        const data = {
            name:regiterInput.name,
            email:regiterInput.email,
            password:regiterInput.password,
        }

        axios.post(`/api/register`,data).then(res => {

        })

    }

    return(
        <div>
            
            <Navbar />
            <div className='container py-5'>
                <div className='row justify-content-center'>
                    <div className='col-md-6'>
                        <div className='card'>
                            <div className='card-header'>
                                <h4>Register</h4> 
                            </div>
                            <div className='card-body'>
                                <form onSubmit={registerSubmit}>
                                    <div className='form-group md-3'>
                                        <label>Full Name</label>
                                        <input type='' name='name' onChange={handleInput} value={regiterInput.name} className='form-control'  ></input>
                                    </div>
                                    <div className='form-group md-3'> 
                                        <label>Email ID</label>
                                        <input type='' name='email' onChange={handleInput} value={regiterInput.email}  className='form-control'  ></input>
                                    </div>
                                    <div className='form-group md-3'>
                                        <label>Password</label>
                                        <input type='' name='password' onChange={handleInput} value={regiterInput.password}  className='form-control'  ></input>
                                    </div>
                                    {/* <div className='form-group md-3'>
                                        <label>Confirm Password</label>
                                        <input type='' name='confirm_password' className='form-control'  ></input>
                                    </div> */}
                                    <div className='form-group md-3'>
                                        <div>
                                            <button type='submit' className='btn btn-primary'>Register</button>
                                        </div>
                                        
                                    </div>
                                </form>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
           
        </div>
    );

}

export default Register;