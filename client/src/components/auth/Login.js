import React, { useState, useContext, useEffect } from 'react';

import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';

const Login = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    // to redirect to the home page
    if(isAuthenticated) {
      props.history.push('/');
    }

    if (error === 'Invalid credentials') {
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const {email, password } = user;

  // onChange
  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value })

  //OnSubmit
  const onSubmit = e => {
    e.preventDefault();
    if(email === '' || password === '') {
      setAlert('Please fill in all fields', 'danger');
    } else {
      login({
        email,
        password
      });
    }
  }

  return(
    <div className='form-container'>
      <h1>
        Account <span className='text-primary'>Login</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
        <label htmlFor='email'>Email</label>
          <input 
            type='text' 
            name='email' 
            value={email} 
            onChange={onChange}
            required
          />
        </div>
        <div className='form-group'>
        <label htmlFor='name'>Password</label>
          <input 
            type='password' 
            name='password' 
            value={password}
            onChange={onChange} 
            required
          />
        </div>
        <div>
          <input type='submit' value='Login' className='btn btn-primary btn-block' />
        </div>
      </form>
    </div>
  );
}

export default Login;