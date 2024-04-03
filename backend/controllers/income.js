const IncomeSchema= require("../models/IncomeModel")


exports.addIncome = async (req, res) => {
    const {title, amount, category, description, date,userid}  = req.body

    const income = IncomeSchema({
        title,
        amount,
        category,
        description,
        date,
        userid
    })

    try {
        //validations
        if(!title || !category || !description || !date){
            return res.status(400).json({message: 'All fields are required!'})
        }
        if(amount <= 0 || !amount === 'number'){
            return res.status(400).json({message: 'Amount must be a positive number!'})
        }
        await income.save()
        res.status(200).json({message: 'Income Added'})
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }

    console.log(income)
}

exports.getIncomes = async (req, res) =>{
    const {userid} = req.params
    try {
        const incomes = await IncomeSchema.find({userid:userid}).sort({createdAt: -1})
        res.status(200).json(incomes)
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }
}

exports.deleteIncome = async (req, res) =>{
    const {id} = req.params;
    IncomeSchema.findByIdAndDelete(id)
        .then((income) =>{
            res.status(200).json({message: 'Income Deleted'})
        })
        .catch((err) =>{
            res.status(500).json({message: 'Server Error'})
        })
}

exports.updateIncome = async(req,res) =>{
    const {id}=req.params
    IncomeSchema.findByIdAndUpdate({_id:id},{income:req.body}).then((income)=>{
        res.status(200).json({message:'Income updated'})
    })
    .catch((err)=>{
        res.status(500).json({message:'server error while updating'})
    })
}
exports.getIncomeBetween=async(req,res) =>{
    const {startDate,endDate,userid}=req.params
    try {
        const resp = IncomeSchema.find({userid:userid},{date:{$gte:ISODate(startDate),$lte:ISODate(endDate)}})
        res.status(200).json(resp) 
    } catch (error) {
        res.status(500).json({message:'No data found between these dates'})
    }
    
}