import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Blogs.css'

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

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
                <p>{blog.content}</p>
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