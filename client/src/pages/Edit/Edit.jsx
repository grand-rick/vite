import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import './Edit.css'

const Edit = () => {

    const navigate = useNavigate();
    const {id} = useParams();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState("");

    const [blog, setBlog] = useState({});
    
    var error;
    
    const postBlog = async e => {
        e.preventDefault();
        
        try {

         axios.put(`http://localhost:5000/blogs/${id}`, {
            title,
            content,
            author,
        })

        .then(res => {
            if (res.data.status == 200) navigate('/blogs');
            else if (res.data.status == 404) navigate('/error');
            else error = true;
        })

        } catch (err) {
            error = true;
        }
    }
    
    const fetchBlog = async () => {
        
        try {
            const response = await axios.get(`http://localhost:5000/blogs/${id}`);
            
            if (response.data == false) {
                navigate('/error');
            } else {
                setBlog(response.data);
            }
        } catch (err) {
            console.log(err);
        }
    }
    
    useEffect(() => {
        fetchBlog();
        setTitle(blog.blogTitle);
        setContent(blog.content);
        setAuthor(blog.author);
    }, []);

  return (
    <>
    <Navbar title="PEGASUS" op1="Compose" op2="About Us" op3="Contact Us" />

    <form>
        <label>Title:</label><br />
        <input  onChange={e => setTitle(e.target.value)} defaultValue={blog.blogTitle} name='title' type="text" size={50} />

        <br />
        <br />

        <label>Your Blog Here:</label><br />
        <textarea  onChange={e => setContent(e.target.value)} defaultValue={blog.content} name="content" id="" cols="50" rows="10"></textarea>

        <br />
        <br />

        <label>Author:</label><br />
        <input  onChange={e => setAuthor(e.target.value)} defaultValue={blog.author} name='author' type="text" />

        <br />
        <br />

        <button className='post-button' onClick={postBlog}>Confirm Edit</button>
        
        <div className="error-message">{
            error ? <p>There was an error updating. Please try later</p> : null
        }</div>
    </form>

    <Footer />
    </>
    )
}

export default Edit