import React from 'react'
import './home.css';

const Home = ({loginData}) => {
  return (
    <div> 
        
        <div>
            <p className='token'>{JSON.stringify(loginData)}</p>
        </div>
    
    </div>
  )
}

export default Home