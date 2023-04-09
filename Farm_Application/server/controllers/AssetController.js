import Asset from "../models/AssetModel.js";
// get assets
export const getAsset = async(req,res) => {
    try {
        const asset = await Asset.find();
        res.json(asset);
    } catch (error) {
        res.status(500).json({message: error.message});

    }
}
// get asset by id
export const getAssetById = async(req,res) => {
    try {
        const asset= await Asset.findById(req.params.id);
    res.json(asset);
}
     catch (error) {
        res.status(404).json({message: error.message});
    }
}
// save assets

export const saveAsset = async(req,res) => {
    const asset= new Asset(req.body);
    try {
        const insertedAsset = await asset.save();
        res.status(201).json(insertedAsset);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
// update assets

export const updateAsset = async(req,res) => {
    try {
        const updatedAsset= await Asset.updateOne({_id:req.params.id}, {$set: req.body});
    res.status(200).json(updatedAsset);
}
     catch (error) {
        res.status(400).json({message: error.message});
    }
}
// delete assets

export const deleteAsset = async(req,res) => {
    try {
        const deletedAsset= await Asset.deleteOne({_id:req.params.id}, {$set: req.body});
    res.status(200).json(deletedAsset);
}
     catch (error) {
        res.status(400).json({message: error.message});
    }
}
     