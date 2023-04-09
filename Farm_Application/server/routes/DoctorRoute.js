import express from "express";
import {getDoctor,getDoctorById,saveDoctor,updateDoctor,deleteDoctor} from "../controllers/DoctorController.js";
// set router
const router= express.Router();

// assets routes
router.get('/doctors', getDoctor);
router.get('/doctors/:id', getDoctorById);
router.post('/doctors', saveDoctor);
router.patch('/doctors/:id', updateDoctor);
router.delete('/doctors/:id', deleteDoctor);





export default router;