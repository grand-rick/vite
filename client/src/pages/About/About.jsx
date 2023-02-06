import React from 'react'
import './About.css'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const About = () => {
  return (
    <>

        <Navbar title="PEGASUS" op1="Compose" op2="About Us" op3="Contact Us" />

        <div className='about'>
            <p className='about-para'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum et aspernatur ut reiciendis impedit est iusto, enim voluptates dignissimos facere aliquid consequuntur commodi harum, provident maiores. Dolor est aperiam, atque laboriosam, sint tenetur adipisci nisi odio hic voluptates ipsum quia quasi sequi voluptatum incidunt quas cupiditate eos nostrum ullam! Tempora recusandae odit delectus eaque veritatis sunt quam fugiat laudantium, at magnam quis unde consequuntur alias provident, possimus reiciendis facilis pariatur quia, quos impedit atque dolorem totam animi! Dolorem odit quae iste omnis quis corrupti aliquam voluptatem voluptates numquam, soluta laboriosam. Aut at illo laboriosam qui asperiores quisquam. Deleniti, maxime. Dolores?
            </p>
        </div>

        <Footer className="about-footer"/>
    </>
    )
}

export default About;