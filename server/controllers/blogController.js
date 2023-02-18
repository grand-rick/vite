import { isValidObjectId } from 'mongoose';
import blog from '../models/blogSchema.js';

export const postBlog = async (req, res) => {

    try {
        const {title, content, author} = req.body;
        const newBlog = new blog ({
            blogTitle: title,
            content: content,
            author: author
        })

        await newBlog.save()
        res.send(true);

    } catch(err) {
        console.log(err);
    }
}

export const getBlog = async (req, res) => {
    try {
        const blogs = await blog.find({}).exec();
        res.send(blogs);
    } catch (error) {
        console.log(error);
    }
}

export const getSingleBlog = async (req, res) => {

    const id = req.params.id.trim();

    if (isValidObjectId(id)) {
        const singleblog = await blog.findOne({ _id: id})
        if(!singleblog) {
           res.send(false)
        } else {
            res.send(singleblog);
        }
    } else {
        res.send(false)
    }
}

export const updateBlog = async (req, res) => {

    try {
        const {id} = req.params;

        if(isValidObjectId(id)) {
        const {title, content, author} = req.body;

        await blog.findByIdAndUpdate(id, {
            blogTitle: title,
            content: content,
            author: author
        })

        res.status(200).json({ status: 200 })
    } else {
        res.status(404).json({ status: 404 });
    }

    } catch(err) {
        console.log(err);
        res.status(500).json({ status: 500 });
    }
}

export const deleteBlog = async (req, res) => {
    const {id} = req.params;

    try {
        await blog.findByIdAndDelete(id)
        res.status(200).json({ status: 200 })
    } catch(error) {
        console.log(error);
        res.status(500).json({ status: 500 })
    }
}