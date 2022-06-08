const express = require('express')
const router = express.Router()
const hrcData = require('../models/hrc')

// display complete data function
router.get('/', async(req,res)=>{
    const { page = 1, limit = 10 } = req.query;
    try{
        const data = await hrcData.find()
        .limit(limit * 1)
        .skip((page - 1) * limit)
        .exec();
        res.json(data)
    }catch(err){
        res.send('Error'+err)
    }
})

// add data function
router.post('/', async(req,res)=>{
    const newData = new hrcData({
        business_code : req.body.business_code,
        cust_number : req.body.cust_number,
        clear_date : req.body.clear_date,
        buisness_year : req.body.buisness_year,
        doc_id : req.body.doc_id,
        posting_date : req.body.posting_date,
        document_create_date : req.body.document_create_date,
        due_in_date : req.body.due_in_date,
        invoice_currency : req.body.invoice_currency,
        document_type : req.body.document_type,
        posting_id : req.body.posting_id,
        total_open_amount : req.body.total_open_amount,
        baseline_create_date : req.body.baseline_create_date,
        cust_payment_terms : req.body.cust_payment_terms,
        invoice_id : req.body.invoice_id
    })
    try{
        const data = await newData.save()
        res.json(data)
    }catch(err){
        res.send('Error'+err)
    }
})
//advance search function
router.post('/:id',async(req,res)=>{
    try {
        const data = document.querySelectorAll("#req.body.cust_number, #req.body.doc_id, #req.body.invoice_id, #req.body.buiness_year")
        res.json(data)
    } catch (error) {
        res.send('Error'+error)
    }
})
// search function
router.get('/:id',async(req,res)=>{
    try {
        const data = await hrcData.findById(req.params.id)
        res.json(data)
    } catch (error) {
        res.send('Error'+error)
    }
})
// update fuction
router.patch('/:id',async(req,res)=>{
    let inv_curr = req.body.invoice_currency
    let cust_terms = req.body.cust_payment_terms
    let user_details = {
        "invoice_currency":inv_curr,
        "cust_payment_terms":cust_terms
    }
    try {
        const data = await hrcData.updateOne({
            _id: req.params.id
        },{$set:user_details})
        res.json({ message: 'Data successfully Updated' })

    } catch (error) {
        res.send('Error'+error)
    }
})

// delete function
router.delete('/:id',async(req,res)=>{

    try{
        const data = await hrcData.remove({
            _id: req.params.id
          })
        res.json({ message: 'Data successfully deleted' })
    }catch(err){
        res.send('Error'+err)
    }
})

module.exports = router