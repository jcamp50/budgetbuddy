const IncomeSchema = require("../models/IncomeModel")


exports.addIncome = async (req, res) => {
  const {title, amount, category, description, date} = req.body

  const income = new IncomeSchema({
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
      await income.save()
      res.status(200).json({message: 'Income added successfully'})
  } catch (error) {
    res.status(500).json({message: 'Server error', error: error.message})
  }

  console.log(income)
}