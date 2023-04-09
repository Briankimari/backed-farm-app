 import LiabilitySchema from "../models/liabilityModel.js"


export const addLiability= async (req,res) => {
 const {title,amount,category,description,date}= req.body

 const income=LiabilitySchema({
    title,
    amount,
    category,
    description,
    date
 })

 try {
// validations
if(!title || !category || !amount || !date ){
    return res.status(400).json({message: 'all fields are required!'});
} 
if(amount <= 0 || !amount === 'number'){
    return res.status(400).json({message: 'please fill a valid number!'});
} 
await income.save()
res.status(200).json({message:'Liability Added'})
 } catch (error) {
    res.status(500).json({message:'Server Error!!'})

 }
 console.log(income);
}

export const getLiability= async (req,res)=>{
try {
     const incomes= await LiabilitySchema.find().sort({createdAt: -1})
    res.status(200).json(incomes)
} catch (error) {
       res.status(500).json({message: 'Server Error'})

}
}


export const deleteLiability= async (req,res)=>{
    const {id} = req.params;
        LiabilitySchema.findByIdAndDelete(id)
    .then((income)=>{
     res.status(200).json({message: 'Liability Deleted'})
    })
    .catch((err)=> {
    res.status(500).json({message: 'Server Error'})

    })
}