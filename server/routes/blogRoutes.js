import express from "express";
import { postBlog, getBlog, getSingleBlog, updateBlog, deleteBlog } from "../controllers/blogController.js";

const router = express.Router();

router.get('/', getBlog);
router.get('/:id', getSingleBlog);
router.post('/', postBlog);
router.put('/:id', updateBlog);
router.delete('/:id', deleteBlog);

export default router;