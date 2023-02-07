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
        res.send(newBlog);
    } catch(err) {
        console.log(err);
        const error = true;
        res.send(error);
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