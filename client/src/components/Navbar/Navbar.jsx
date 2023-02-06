import React from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'

const Navbar = (props) => {

  const navigate = useNavigate();

  return (
    <div className='navbar'>

        <div className="title">
          <h1 onClick={() => navigate('/')}>{props.title}</h1>
        </div>

        <div className='list'>
          <ul>
            <li onClick={() => navigate('/compose')} className='list-item'>{props.op1}</li>
            <li onClick={() => navigate('/about')} className='list-item'>{props.op2}</li>
            <li onClick={() => navigate('/contact')} className='list-item'>{props.op3}</li>
          </ul>
        </div>

    </div>
  )
}

export default Navbar;