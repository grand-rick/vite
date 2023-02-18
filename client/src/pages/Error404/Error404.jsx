import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Error404.css'

const Error404 = () => {
  return (
    <>
      <Navbar title="PEGASUS" op1="Compose" op2="About Us" op3="Contact Us" />

        <div className="error">
            <h1>Oops! Looks Like the page you were looking for does not exist.</h1>
            <h3>Error 404</h3>
        </div>
    </>
  )
}

export default Error404