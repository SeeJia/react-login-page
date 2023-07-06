import React, { useState } from 'react';
import axios from 'axios';
import './login.css';

const Login = () => {
    const [username, setUsername] = useState('zhangsoon');
    const [password, setPassword] = useState(11223344);
    const [mockData, setMockData] = useState(null);
    const [error, setError] = useState('');
    
    const sendLoginForMock = async (e) => {
        e.preventDefault();
        
    try {

    if(username === "zhangsoon" && password === "11223344" ){
        
    const response = await axios.post('https://testing123.free.mockoapp.net',{
        username,
        password,
    });

    //console.log(response.data);
    setMockData(response.data);

    setError('');
    }

    else {
        setMockData(null);
        setError('Your username or password is incorrect');
    }

    } catch (error) {
        setMockData(null); 
        setError('Your username or password is incorrect');
    }
   
   };

   return (
    <div>
        <h1>Login Page</h1>
        <form onSubmit={sendLoginForMock}>
            <div>
            <label>Username:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>

            <div>
            <label>Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
        </div>

        <button onClick={sendLoginForMock}>Login</button>

        {error && <p>{error}</p>}
     
        </form>
        
        {mockData && error === '' && (
            <div>
                <p>{JSON.stringify(mockData)}</p>
            </div>
        )}

    </div>
  )
}

export default Login