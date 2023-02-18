import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import './Blogs.css'

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);
    const navigate = useNavigate();

    const fetchBlogs = async () => {

        try {
            const response = await axios.get('http://localhost:5000/blogs')
            setBlogs(response.data);
        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        fetchBlogs()
    }, []);

  return (
    <>
        <Navbar title="PEGASUS" op1="Compose" op2="About Us" op3="Contact Us" />

        {blogs.map(blog => (
            
        <div className="blog" key={blog._id}>

            <h1>{blog.blogTitle}</h1>
            <br />

            <main>
                <p>{blog.content.substring(0, 100)}...</p>
                <h3 onClick={() => navigate(`/blogs/${blog._id}`)} className='read-more'>Read More</h3>
            </main>

            <div className="author">
                <h4>- {blog.author}</h4>
            </div>
        </div>
        ))}
    </>
    )
}

export default Blogs;