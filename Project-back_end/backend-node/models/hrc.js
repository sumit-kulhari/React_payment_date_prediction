const mongoose = require('mongoose')

const hrcSchema = new mongoose.Schema({

    business_code:{
        type:String,
        required:true
    },
    cust_number:{
        type:Number,
        required: true
    },
    clear_date:{
        type:String,
        required:true,
        
    },
    buisness_year:{
        type:Number,
        required:true
    },
    doc_id:{
        type:String,
        required:true
    },
    posting_date:{
        type:String,
        required:true
    },
    document_create_date:{
        type:String,
        required:true
    },
    due_in_date:{
        type:String,
        required:true
    },
    invoice_currency:{
        type:String,
        required:true
    },
    document_type:{
        type:String,
        required:true
    },
    posting_id:{
        type:Number,
        required:true
    },
    total_open_amount:{
        type:Number,
        required:true
    },
    baseline_create_date:{
        type:String,
        required:true
    },
    cust_payment_terms:{
        type:String,
        required:true
    },
    invoice_id:{
        type:Number,
        required:true
    },
    aging_bucket:{
        type:String,
        required:true,
        default:"NA"
    }
})

module.exports = mongoose.model('hrc_db',hrcSchema)