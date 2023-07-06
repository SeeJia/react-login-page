import React, { useState } from 'react'

const Login = () => {
    const [username, setUsername] = useState('zhangsoon');
    const [password, setPassword] = useState(11223344);
    
    const sendLoginForMock = async () => {
    const response = await axios.post('https://testing123.free.mockoapp.net',{
        username,
        password,
    });

    console.log(response.data);
   
   };

   return (
    <div>
        <h1>Login Page</h1>
        <form onSubmit={sendLoginForMock}>
            <div>
            <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={() => setUsername(e.target.value)}
                />
            </div>

            <div>
            <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={() => setPassword(e.target.value)}
                />
        </div>

        <button type="submit">Login</button>
        
        </form>
    </div>
  )
}

export default Login