const ExpenseSchema = require("../models/expenseModel")


exports.addExpense = async (req, res) => {
  const {title, amount, category, description, date} = req.body

  const expense = new ExpenseSchema({
    title,
    amount,
    category,
    description,
    date
  })

  try {
      //validations
      if(!title || !category || !description || !date){
        return res.status(400).json({error: 'All fields are requiered'})
      }
      if(amount <= 0 || !amount === 'number'){
        return res.status(400).json({error: 'Amount must be a number and greater than 0'})
      }
      await expense.save()
      res.status(200).json({message: 'Expense added successfully'})
  } catch (error) {
    res.status(500).json({message: 'Server error', error: error.message})
  }

  console.log(expense)
}

exports.getExpenses = async (req, res) => {
  try {
    const expenses  = await ExpenseSchema.find().sort({createdAt: -1})
    res.status(200).json(expenses)
  } catch (error) {
    res.status(500).json({message: 'Server Error'})
  }
}

exports.deleteExpense = async (req, res) => {
  const {id} = req.params
  
  ExpenseSchema.findByIdAndDelete(id)
    .then((expense) => {
      res.status(200).json({message: 'Expense deleted successfully'})
      
    })
    .catch((err) => {
      
      res.status(500).json({message: 'Server Error'})

    })

}