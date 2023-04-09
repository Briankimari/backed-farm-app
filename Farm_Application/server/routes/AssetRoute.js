import express from "express";
import {getAsset,getAssetById,saveAsset,updateAsset,deleteAsset} from "../controllers/AssetController.js"
// set router
const router= express.Router();

// assets routes
router.get('/assets', getAsset);
router.get('/assets/:id', getAssetById);
router.post('/assets', saveAsset);
router.patch('/assets/:id', updateAsset);
router.delete('/assets/:id', deleteAsset);





export default router;