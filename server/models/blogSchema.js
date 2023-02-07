import mongoose from "mongoose";

const Schema = mongoose.Schema;

const blogSchema = new Schema ({
    blogTitle: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
});

const blog = mongoose.model('Blog', blogSchema);

export default blog;