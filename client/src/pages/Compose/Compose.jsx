import React from 'react'
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import './Compose.css'

const Compose = () => {
  return (
    <>
        <Navbar title="PEGASUS" op1="Compose" op2="About Us" op3="Contact Us" />

        <form>
            <label>Title:</label><br />
            <input type="text" size={50} />

            <br />
            <br />

            <label>Your Blog Here:</label><br />
            <textarea name="" id="" cols="50" rows="10"></textarea>
            <br />
            <br />

            <label>Author:</label><br />
            <input type="text" />

            <br />
            <br />

            <button className='post-button'>Post</button>
        </form>

        <Footer />
    </>
  )
}

export default Compose;