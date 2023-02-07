import express from "express";
import { postBlog, getBlog } from "../controllers/blogController.js";

const router = express.Router();

router.post('/', postBlog);
router.get('/', getBlog);

export default router;