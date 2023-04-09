import express from "express";
import {getSibling,getSiblingById,saveSibling,updateSibling,deleteSibling} from "../controllers/SiblingController.js"
// set router
const router= express.Router();

// assets routes
router.get('/siblings', getSibling);
router.get('/siblings/:id', getSiblingById);
router.post('/siblings', saveSibling);
router.patch('/siblings/:id', updateSibling);
router.delete('/siblings/:id', deleteSibling);





export default router;