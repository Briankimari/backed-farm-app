import express from "express";
import { getPosts,createPost, updatePost, deletePost,} from "../controllers/posts.js";
// set router
const router= express.Router();

// all route
router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
  


export default router;