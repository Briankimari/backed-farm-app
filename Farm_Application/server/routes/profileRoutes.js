import express from "express";
import { deleteProfile, getProfile, getProfileById, saveProfile, updateProfile } from "../controllers/profile.js";

// set router
const router= express.Router();

// assets routes
router.get('/profile', getProfile);
router.get('/profile/:id', getProfileById);
router.post('/profile', saveProfile);
router.patch('/profile/:id', updateProfile);
router.delete('/profile/:id', deleteProfile);





export default router;