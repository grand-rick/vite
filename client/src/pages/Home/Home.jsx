import React from 'react'
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import './Home.css'

const Home = () => {

  const navigate = useNavigate();

  return (
    <>
    <Navbar title="PEGASUS" op1="Compose" op2="About Us" op3="Contact Us" />

    <header>
      <h1 className='master-title'>Your Stop for personal blog writing.</h1>
    </header>

    <a className='compose-navigator' onClick={() => navigate('/compose')}>Start Writing</a>
    <a className='blog-navigator' onClick={() => navigate('/blogs')}>Blogs</a>

    <p className='desc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis quos minima iure suscipit dolorem tenetur inventore aliquam minus repellendus nihil modi provident mollitia, natus itaque sequi incidunt illo asperiores ipsum perferendis! Adipisci dolore fugit odit.</p>

    <Footer />
    </>
  )
}

export default Home;