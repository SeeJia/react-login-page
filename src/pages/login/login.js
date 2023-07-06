import React, { useState } from 'react'

const Login = () => {
    const [username, setUsername] = useState('zhangsoon');
    const [password, setPassword] = useState(11223344);
    
    const sendLoginForMock = async () => {
    const response = await axios.post('',{
        username,
        password,
    });

    console.log(response.data);
   
   };

   return (
    <div></div>
  )
}

export default Login