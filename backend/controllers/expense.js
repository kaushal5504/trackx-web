const ExpenseSchema = require("../models/ExpenseModel")


exports.addExpense = async (req, res) => {
    const {title, amount, category, description, date,userid}  = req.body
    
    const income = ExpenseSchema({
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
        res.status(200).json({message: 'Expense Added'})
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }

    console.log(income)
}

exports.getExpense = async (req, res) =>{
    const {userid}=req.params
    try {
        const incomes = await ExpenseSchema.find({userid:userid}).sort({createdAt: -1})
        res.status(200).json(incomes)
    } catch (error) {
        res.status(500).json({message: 'Get Server Error'})
    }
}

exports.deleteExpense = async (req, res) =>{
    const {id} = req.params;
    ExpenseSchema.findByIdAndDelete(id)
        .then((income) =>{
            res.status(200).json({message: 'Expense Deleted'})
        })
        .catch((err) =>{
            res.status(500).json({message: 'Server Error'})
        })
}

exports.getExpenseBetween=async(req,res) =>{
    const {startDate,endDate,userid}=req.params
    try {
        const resp = ExpenseSchema.find({userid:userid},{date:{$gte:ISODate(startDate),$lte:ISODate(endDate)}})
        res.status(200).json(resp) 
    } catch (error) {
        res.status(500).json({message:'No data found between these dates'})
    }
    
}