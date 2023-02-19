import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import './Compose.css'
import axios from 'axios';

const Compose = () => {

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const postBlog = async e => {
    e.preventDefault();
    await axios.post('http://localhost:5000/blogs', {
      title,
      content,
      author
    })

    .then(res => {
      if (res === true) navigate('/blogs');
      else navigate('/blogs');
    })
  }

  return (
    <>
        <Navbar title="PEGASUS" op1="Compose" op2="About Us" op3="Contact Us" />

        <form>
            <label>Title:</label><br />
            <input onChange={e => setTitle(e.target.value)} name='title' type="text" size={50} />

            <br />
            <br />

            <label>Your Blog Here:</label><br />
            <textarea onChange={e => setContent(e.target.value)} name="content" id="" cols="50" rows="10"></textarea>
            <br />
            <br />

            <label>Author:</label><br />
            <input onChange={e => setAuthor(e.target.value)} name='author' type="text" autoComplete='off' />

            <br />
            <br />

            <button className='post-button' onClick={postBlog}>Post</button>
        </form>

        <Footer />
    </>
  )
}

export default Compose;