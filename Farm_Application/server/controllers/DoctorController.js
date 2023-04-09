import Doctor from '../models/DoctorModel.js';

// get doctors details
export const getDoctor= async(req,res) => {
    try {
        const doctor = await Doctor.find();
        res.json(doctor);
    } catch (error) {
        res.status(500).json({message: error.message});

    }

}
// getdoctor by id
export const getDoctorById = async(req,res) => {
    try {
        const doctor= await Doctor.findById(req.params.id);
    res.json(doctor);
}
     catch (error) {
        res.status(404).json({message: error.message});
    }
}

// save doctor

export const saveDoctor = async(req,res) => {
    const doctor= new Doctor(req.body);
    try {
        const insertedDoctor = await doctor.save();
        res.status(201).json(insertedDoctor);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

// update doctor

export const updateDoctor = async(req,res) => {
    try {
        const updatedDoctor= await Doctor.updateOne({_id:req.params.id}, {$set: req.body});
    res.status(200).json(updatedDoctor);
}
     catch (error) {
        res.status(400).json({message: error.message});
    }
}
// delete doctor

export const deleteDoctor = async(req,res) => {
    try {
        const deletedDoctor= await Doctor.deleteOne({_id:req.params.id}, {$set: req.body});
    res.status(200).json(deletedDoctor);
}
     catch (error) {
        res.status(400).json({message: error.message});
    }
}
     