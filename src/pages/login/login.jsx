import React, { useState } from 'react';
import axios from 'axios';
import './login.css';

const Login = ( {setLogin} ) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState();
   // const [mockData, setMockData] = useState(null);
    const [error, setError] = useState('');
    
    const sendLoginForMock = async (e) => {
        e.preventDefault();
        
    try {

    if(username === "zhangsoon" && password === "11223344" ){
        
    const response = await axios.post('https://optimumtesting.free.mockoapp.net/auth/login',{
        username,
        password,
    });

    console.log(response.data);
    // setMockData(response.data);

    const loginData = response.data;
    setLogin(loginData);
    
    setUsername('');
    setPassword('');
    setError('');
    }

    else {
        //setMockData(null);
        setError('Your username or password is incorrect');
    }

    } catch (error) {
        //setMockData(null); 
        setError('Your username or password is incorrect');
    }
   
   };

   return (
    <div className='login-container'>
        <label>Logo</label>
        <h1 className='login-title'>Login Page</h1>
        <form onSubmit={sendLoginForMock}>
            <div>
            <p className='text-name'>Username:</p>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>

            <div>
            <p className='text-password'>Password:</p>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
        </div>

        <button className='login-btn' onClick={sendLoginForMock}>Login</button>

        {error && <p className='error'>{error}</p>}
     
        </form>
        
        {/* {mockData && error === '' && (
            <div>
                <p className='token'>{JSON.stringify(mockData)}</p>
            </div>
        )} */}

    </div>
  )
}

export default Login