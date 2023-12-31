import React from 'react';
import Navbar from '../../../layouts/frontend/Navbar';


function Login(){

    return(
        <div>
            <Navbar />
           
            <div className='container py-5'>
                <div className='row justify-content-center'>
                    <div className='col-md-6'>
                        <div className='card'>
                            <div className='card-header'>
                                <h4>Login</h4> 
                            </div>
                            
                            <div className='card-body'>
                                <form> 
                                    <div className='form-group md-3'>
                                        <label>Email ID</label>
                                        <input type='' name='email' className='form-control'  ></input>
                                    </div>
                                    <div className='form-group md-3'>
                                        <label>Password</label>
                                        <input type='' name='password' className='form-control'  ></input>
                                    </div> 
                                    <div className='form-group md-3'>
                                        <div>
                                            <button type='submit' className='btn btn-primary'>Login</button>
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

export default Login;