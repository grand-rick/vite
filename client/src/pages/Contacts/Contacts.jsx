import { Instagram, Phone, LinkedIn } from '@mui/icons-material';
import React from 'react'
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import './Contacts.css'

const Contacts = () => {
  return (
    <>
        <Navbar title="PEGASUS" op1="Compose" op2="About Us" op3="Contact Us" />

        <div className="contact">

            <h3>This website is developed and maintained by Tejas Nanoti</h3>
            <p>Email: tejasnanoti2@gmail.com</p>

            <div className="social">
              <h3 className='social-title'>Social Handles</h3>

              <div className="id">
                <Instagram /><br />
                <h3>tejasssssssss__</h3>
              </div>

              <div className="id">
                <LinkedIn /><br />
                <h3>Tejas Nanoti</h3>
              </div>

              <div className="id">
                <Phone /><br />
                <h3>+91 8668324297</h3>
              </div>
            </div>
        </div>

        <Footer />
    </>
  )
}

export default Contacts;