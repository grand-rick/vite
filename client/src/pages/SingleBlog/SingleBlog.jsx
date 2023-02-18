import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios'
import './SingleBlog.css'

const SingleBlog = () => {

    const {id} = useParams();

    const [blog, setBlog] = useState({});
    const [deleteMessage, setDeleteMessage] = useState(false);

    const navigate = useNavigate();

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

    const handleEdit = async () => {
        navigate(`/edit/${blog._id}`)
    }

    const handleDelete = async () => {
        const res = await axios.delete(`http://localhost:5000/blogs/${id}`);

        if (res.data.status == 200) {
            navigate('/blogs');
        } else if (res.data.status == 404) {
            navigate('/error')
            alert('There was an error deleting your blog. Please try later');
        } 
    }

    useEffect(() => {
        fetchBlog();
    }, []);
      
return (
    <>
        <Navbar title="PEGASUS" op1="Compose" op2="About Us" op3="Contact Us" />

        <div className="blog" key={blog._id}>

            <h1>{blog.blogTitle}</h1>
            <br />

            <main>
                <p>{blog.content}</p>
            </main>

            <div className="author">
                <h4>- {blog.author}</h4>
            </div>

            <div className="options">
            <button className='edit-btn' onClick={handleEdit}><EditIcon /></button>
            <button className='edit-btn' onClick={() => setDeleteMessage(true)}><DeleteIcon /></button>

            <br />
            <br />

        { deleteMessage ? 
            <div className="delete-message">
                <h4>Are you sure you want to delete this blog?</h4>
                <button className='delete-btn' onClick={handleDelete}>Yes</button>
                <button className='delete-btn' onClick={() => setDeleteMessage(false)}>No</button>
            </div> : null
        }
            </div>
        </div>
    </>
  )

}

export default SingleBlog