import Sibling from '../models/SiblingModel.js'

// get sibling details
export const getSibling= async(req,res) => {
    try {
        const sibling = await Sibling.find();
        res.json(sibling);
    } catch (error) {
        res.status(500).json({message: error.message});

    }

}
// getsibling by id
export const getSiblingById = async(req,res) => {
    try {
        const sibling= await Sibling.findById(req.params.id);
    res.json(sibling);
}
     catch (error) {
        res.status(404).json({message: error.message});
    }
}

// save sibling

export const saveSibling = async(req,res) => {
    const sibling= new Sibling(req.body);
    try {
        const insertedSibling = await sibling.save();
        res.status(201).json(insertedSibling);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

// update sibling

export const updateSibling = async(req,res) => {
    try {
        const updatedSibling= await Sibling.updateOne({_id:req.params.id}, {$set: req.body});
    res.status(200).json(updatedSibling);
}
     catch (error) {
        res.status(400).json({message: error.message});
    }
}
// delete sibling

export const deleteSibling = async(req,res) => {
    try {
        const deletedSibling= await Sibling.deleteOne({_id:req.params.id}, {$set: req.body});
    res.status(200).json(deletedSibling);
}
     catch (error) {
        res.status(400).json({message: error.message});
    }
}
     