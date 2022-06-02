import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Button, TextField } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import axios from "axios";
import HeaderComponent from "../components/Header/HeaderComponent";
import PieComponent from "../components/PieComponent"


// Calling the global style element useStyles
const useStyles = makeStyles((theme) => ({
  btns:{
    
      marginTop: "3px",

  },
  DataGrid:{
    root:{
      color:'white',
      border:'0'
    }
  }
}));

  // Defining columns for the datagrid
const columns = [
    { field: "sl_no", 
    headerName: "Sl no", 
    width: 110,
    align: "center"
   },
    {
      field: "business_code",
      headerName: "Business Code",
      width: 150,
      align: "center"
      
    },
    {
      field: "cust_number",
      headerName: "Customer Number",
      width: 150,
      align: "center"
    },
    {
      field: "clear_date",
      headerName: "Clear date",
      type: "date",
      width: 150,
      align: "center"
    },
    {
      field: "buisness_year",
      headerName: "Business year",
      type: "number",
      width: 150,
      align: "center"
      
    },
    {
      field: "doc_id",
      headerName: "Document Id",
      type: "number",
      width: 150,
      align: "center"
    },
    {
      field: "posting_date",
      headerName: "Posting date",
      type: "date",
      width: 150,
      align: "center"
    },
    {
      field: "document_create_date",
      headerName: "Document Create Date",
      type: "date",
      width: 150,
      align: "center"
    },
    {
      field: "due_in_date",
      headerName: "Due date",
      type: "date",
      width: 150,
      align: "center"
    },
    {
      field: "invoice_currency",
      headerName: "Invoice Currency",
      type: "name",
      width: 150,
      align: "center"
    },
    {
      field: "document_type",
      headerName: "Document Type",
      type: "number",
      width: 150,
      align: "center"
    },
    {
      field: "posting_id",
      headerName: "Posting id",
      type: "number",
      width: 150,
      align: "center"
    },
    {
      field: "total_open_amount",
      headerName: "Total Open amount",
      type: "number",
      width: 150,
      align: "center"
    },
    {
      field: "baseline_create_date",
      headerName: "Baseline Create Date",
      type: "date",
      width: 150,
      align: "center"
    },{
      field: "cust_payment_terms",
      headerName: "Customer Payment terms",
      type: "name",
      width: 150,
      align: "center"
    },
    {
      field: "invoice_id",
      headerName: "Invoice Id",
      type: "date",
      width: 150,
      align: "center"
    },
    {
      field: "aging_bucket",
      headerName: "Aging Bucket",
      type: "date",
      width: 150,
      align: "center"
    },
    
  ];

const Body = () => {

     // States for Managing Add Dialog
  const [openAdd, setOpenAdd] = React.useState(false);
  const addClick = () => setOpenAdd(true);
  const handleCloseAdd = () => setOpenAdd(false);

  // States for Managing Delete Dialog
  const [openDelete, setOpenDelete] = React.useState(false);
  const deleteClick = () => setOpenDelete(true);
  const handleCloseDelete = () => setOpenDelete(false);

  // States for Managing Edit Dialog
  const [openEdit, setOpenEdit] = React.useState(false);
  const editClick = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);

  // States for Managing Analytics Veiw Dialog
  const [openAnalytics, setOpenAnalytics] = React.useState(false);
  const anltClick = () => setOpenAnalytics(true);
  const handleCloseAnalytics = () => setOpenAnalytics(false);

  // States for Managing Advanced search Dialog
  const [openAdvsearch, setOpenAdvsearch] = React.useState(false);
  const advsClick = () => setOpenAdvsearch(true);
  const handleCloseAdvsearch = () => setOpenAdvsearch(false);

  // creating useState hooks for all the variables 
  const classes = useStyles();
  const [cust_number,setCustno] = useState("");
  const [invoice_currency,setinvCurrency] = useState("");
  const [cust_payment_terms,setPayterms] = useState("");
  const [business_code, setBcode] = useState("");
  const [clear_date,setCleardate] = useState("");
  const [clear_date1,setCleardate1] = useState("");
  const [buisness_year,setByear] = useState("");
  const [doc_id,setDocid] = useState("");
  const [posting_date,setPostingdate] = useState("");
  const [document_create_date,setDoccreteDate] = useState("");
  const [due_in_date,setDuedate] = useState("");
  const [due_in_date1,setDuedate1] = useState("");
  const [document_type,setDoctype] = useState("");
  const [total_open_amount,setAmount] = useState("");
  const [baseline_create_date,setBasedate] = useState("");
  const [baseline_create_date1,setBasedate1] = useState("");
  const [posting_id,setPostingid] = useState("");
  const [inv_id,setInvid] = useState("");
  const [sl_no,setSlno] = useState("");
  const [disable,setDisable] = useState(true);
  const [editdisable,setEditDisable] = useState(true);
  let invoicecurr = []
  const[ser,setserRows] = useState([])
  const [pie,setPie] = useState(false)

  const [pageSize, setPageSize] = React.useState(10);

  // making call to display all the rows in the datagrid
  const getData = async () =>{
    let response = await axios.get("http://localhost:8080/HRC_Project/DisplayInvoice");
    let data = response.data;
    return data;

}

// function to make call to the addData servlet from backend
const addData = async(Business_code,Cust_no,Clear_date,Bus_yr,Doc_id,Posting_date , Document_create_date, Due_date, Invoice_currency
  ,Docuement_type, Posting_id, Total_open_amount, Baseline_create_date, Cust_payment_terms,inv_id) =>{
  let str = "business_code=" + Business_code + "&cust_number=" + Cust_no +"&clear_date=" + Clear_date 
  + "&buisness_year=" + Bus_yr +"&doc_id=" + Doc_id + "&posting_date=" + Posting_date + "&document_create_date=" + Document_create_date
  + "&due_in_date" + Due_date + "&invoice_currency=" + Invoice_currency + "&document_type" + Docuement_type + "&posting_id=" + Posting_id
  + "&total_open_amount=" + Total_open_amount + "&baseline_create_date=" + Baseline_create_date + "&cust_payment_terms=" + Cust_payment_terms
  + "&invoice_id=" + inv_id; 
  let response = await axios.get("http://localhost:8080/HRC_Project/AddInvoice?"+ str);
  return response.data;

}

// function to call the update servlet from backend
const updateData = async(Invoice_currency,Cust_payment_terms,Sl_no) =>{
  let str = "invoice_currency=" + Invoice_currency + "&cust_payment_terms=" + Cust_payment_terms + "&sl_no=" + Sl_no;
  
  let response = await axios.get("http://localhost:8080/HRC_Project/UpdateInvoice?"+str);
  return response.data;

}

// function to call the update aging bucket servlet from backend
const updateBucket = async(Agingbucket,docid) =>{
  let str = "aging_bucket=" + Agingbucket + "&doc_id=" + docid ;
  
  let response = await axios.get("http://localhost:8080/HRC_Project/UpdateBucket?"+str);
  return response.data;

}

// function to call the search data API
const serData = async(cust_number) =>{
    
  let str = cust_number;
  let response = await axios.get("http://localhost:8080/HRC_Project/SearchInvoice?cust_number=" + str);
  
  let data = response.data;
    return data;

}

// function for delete data API 
const delData = async(sl_no) =>{
  let resp = false;
  let response = await axios.get("http://localhost:8080/HRC_Project/DeleteInvoice?sl_no=" + sl_no)
  if (response.data){
      resp = true;
  }
  return resp;

}

// function to call the  Advance search API 
const advserData = async(Doc_id, inv_id, Cust_no, bus_yr) =>{
  let str = "doc_id=" + Doc_id + "&invoice_id=" + inv_id +"&cust_number=" + Cust_no+ "&buisness_year=" + bus_yr ; 

  let response = await axios.get("http://localhost:8080/HRC_Project/AdvanceSInvoice?" + str);
  
  return response.data;
}

// function to call the ML model API
const predictData = async(data) =>{
  let response = await axios.post("http://127.0.0.1:5000/get_prediction",data)
  return response.data
}

// function to call the analytics API 
const analyticsData = async(cleardate,cleardate1,duedate,duedate1,baselinedate,baselinedate1,invoicecurrency)=>{
  let str = "clear_date=" + cleardate + "&clear_date=" + cleardate1 + "&due_date=" + duedate + "&due_date=" + duedate1 + "&baseline_create_date=" +
  baselinedate + "&baseline_create_date=" + baselinedate1 + "&invoice_currency=" + invoicecurrency;
  let response = await axios.get("http://localhost:8080/HRC_Project/Analytics?"+ str);
  return response.data;
  
}

  // setting the rows to the datagrid
  const[rows,setRows] = useState([])
  useEffect( async()=>{
      
    setRows(await getData());
      
             // [] is the dependency array to make the react interactive  , 
            //  })         // if its not there the code inside the block will get called infinite number of times
  },[])

  // function to handle the onclick operation in Add dialog box
 let handleAdd = async() =>{
  await addData(business_code,cust_number,clear_date,buisness_year,doc_id,posting_date,document_create_date,due_in_date,invoice_currency,
    document_type,posting_id,total_open_amount,baseline_create_date,cust_payment_terms,inv_id)
  handleCloseAdd(false);
  setRows(await getData());
    setBcode("")
    setCustno("")
    setCleardate("")
    setByear("")
    setDocid("")
    setPostingdate("")
    setDoccreteDate("")
    setDuedate("")
    setinvCurrency("")
    setDoctype("")
    setPostingid("")
    setAmount("")
    setBasedate("")
    setPayterms("")
    setInvid("")
  }

//  function to handle delete operation 
  let handleDelete = async()=>{
    for(let i = sl_no.length-1; i>=0;i--)
    {
      await delData(sl_no[i]);
    }
     handleCloseDelete(false)
    setRows(await getData());
    // console.log(sl_no)
  }

// function to handle Edit operation 
  let handleEdit = async()=>{
    await updateData(invoice_currency,cust_payment_terms,sl_no)
    handleCloseEdit(false);
    setRows(await getData());
    setinvCurrency("")
    setPayterms("")
  }
  
  // function to handle predict operation
  let handlePredict=async()=>{

    var data = []
    sl_no.forEach((sl_no)=>{
      rows.forEach((item)=>{
          if(item.sl_no===sl_no)
              data.push(parseInt(item['doc_id']))
      })
  })
  const obj={
    data
  }
  let res = await predictData(obj)
  var res1 = []
  var res2 = []
  for(const key in res){
    res1.push(res[key].aging_bucket)
    res2.push(parseInt(res[key].doc_id))
  }
  
  for(let i=res2.length-1;i>=0;i--)
  {
    await updateBucket(res1[i],res2[i])
  }
    setRows(await getData());
  }
  
  rows.forEach((item)=>{
    invoicecurr.push(item.invoice_currency)
})

// creating 2 arrays to store the values for creating charts
  let total = []
  let custm = []

  // function to handle onclick operation in Analytics dialog box
  let handleAnalytics = async() =>{
  
    let res = await analyticsData(clear_date,clear_date1,due_in_date,due_in_date1,baseline_create_date,baseline_create_date1,invoice_currency) 
    res.forEach((item)=>{
      custm.push(item.cust_number)
      total.push(item.total_open_amount)
    })
    let usdcnt = 0
    let cadcnt = 0
    for(let i=0;i<invoicecurr.length;i++)
    {
      if(invoicecurr[i]=='USD')
      usdcnt = usdcnt+1
      else
      cadcnt = cadcnt+1
    }
  console.log(total);
  console.log(custm);
    console.log(invoicecurr);
    console.log(usdcnt,cadcnt)
    invoicecurr = []
    invoicecurr.push(usdcnt,cadcnt)
    console.log(invoicecurr)
    setPie(true)
    handleCloseAnalytics(false)
    setCleardate("");
    setCleardate1("");
    setDuedate("");
    setDuedate1("");
    setBasedate("")
    setBasedate1("")
    setinvCurrency("")
  }

  // defining data for Pie chart
  const piedata = {
    labels: ['USD', 'CAD'],
    datasets: [
      {
        label: 'Pie chart of different currencirs',
        data: invoicecurr,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ],
        borderWidth: 1,
      },
    ],
  };

// defining data for bar chart
  const bardata = {
    labels: ['No of Customers', 'Total Open Amount'],
    datasets: [
      {
        label: 'No of Customers',
        data: custm,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      },
      {
        label: 'Total Open Amount',
        data: total,
        backgroundColor: [
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
// function to handle onclick operation in advance search dialog box
  let handleAdvsearch = async() =>{
    // console.log(await advserData(doc_id,inv_id,cust_number,buisness_year));
    setRows(await advserData(doc_id,inv_id,cust_number,buisness_year))
    handleCloseAdvsearch(false)
    setDocid("")
    setInvid("")
    setCustno("")
    setByear("")
  }

  return (
    <>
    <HeaderComponent/>

    {/* defining all the buttons */}
    <div className={classes.root} style={{ display: "flex", width: "100vw"}}>
      
      <Button
        
        onClick={handlePredict}
        variant="outlined"
        style={{ border: "2px solid #3f51b5", color: "white" ,width:"14vw"}}
        disabled={disable}
      >
        PREDICT
      </Button>
      <Button
        onClick={anltClick}
        variant="outlined"
        style={{ border: "2px solid #3f51b5", color: "white",width:"14vw" }}
      >
        ANALYTICS VIEW
      </Button>
      <Button
        onClick={advsClick}
        variant="outlined"
        style={{ border: "2px solid #3f51b5", color: "white",width:"14vw" }}
      >
        ADVANCED SEARCH
      </Button>
      
      <div style={{ alignContent:"center",}}>
        <TextField
          style={{ border: "2px solid white", color:"white" ,background:"white"}}
          label="Search Customer Id"
          variant="outlined"
          value={cust_number}
          onChange={(e) => {
            setCustno(e.target.value);
          }}
          onKeyDown={async( e)=>{
            if(e.key==="Enter"){
              if(cust_number==="")
              {
                
                  setRows(await getData());
              }
              else{
              setserRows(await serData(cust_number));
              setRows(ser);
            }}}}
        />
      </div>
      
      <Button
        onClick={addClick}
        variant="outlined"
        style={{ border: "2px solid #3f51b5", color: "white",width:"14vw" }}
      >
        Add
      </Button>
      <Button
        onClick={editClick}
        variant="outlined"
        style={{ border: "2px solid #3f51b5", color: "white",width:"14vw" }}
        disabled={editdisable}
      >
        Edit
      </Button>
      <Button
        onClick={deleteClick}
        variant="outlined"
        style={{ border: "2px solid #3f51b5", color: "white",width:"14vw" }}
        disabled={disable}
      >
        Delete
      </Button>
    </div>

   {/* defining the datagrid */}
    <div style={{ height: "64vh", width: "100vw",background: "#273D49CC"}}>
    <DataGrid
      getRowId={row => row.sl_no}
      rowHeight={35.5}
      rows={rows}
      columns={columns}
      checkboxSelection
      pageSize={pageSize}
      onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
      rowsPerPageOptions= {[10,20,30,40,50]}
      disableSelectionOnClick
      onSelectionModelChange={(newSelection)=>{
        // console.log(newSelection)
        setSlno(newSelection);
        if(newSelection.length === 1)
        {
          setDisable(false);
          setEditDisable(false);
        }
        else if(newSelection.length >1)
        {
          setDisable(false);
          setEditDisable(true);
        }
        else
        {
          setDisable(true);
          setEditDisable(true);
        }
      }}
      style={{ color: "white", border:"none" }}
    />

  </div>

  {/* Dialog Box for Add Button */}
  <Dialog open={openAdd} onClose={handleCloseAdd} >
        <DialogTitle style={{background: "#0C2D48",color:"white" }}>Add</DialogTitle>
        <DialogContent >
          <TextField margin="dense" value={business_code} label="Business Code" onChange={(e) => {
            setBcode(e.target.value);
          }} />
          <TextField margin="dense" value={cust_number} label="Customer Number" onChange={(e) => {
            setCustno(e.target.value);
          }}/>
          <TextField margin="dense" value={clear_date} type={"date"} label="Clear Date" onChange={(e) => {
            setCleardate(e.target.value);
          }}/>
          <TextField margin="dense" value={buisness_year} label="Business Year" onChange={(e) => {
            setByear(e.target.value);
          }}/>
          <TextField margin="dense" value={doc_id} label="Document Id" onChange={(e) => {
            setDocid(e.target.value);
          }}/>
          <TextField margin="dense" value={posting_date} type={"date"} label="Posting Date" onChange={(e) => {
            setPostingdate(e.target.value);
          }}/>
          <TextField margin="dense" value={document_create_date} type={"date"} label="Document Create Date" onChange={(e) => {
            setDoccreteDate(e.target.value);
          }}/>
          <TextField margin="dense" value={due_in_date} type={"date"} label="Due Date" onChange={(e) => {
            setDuedate(e.target.value);
          }}/>
          <TextField margin="dense" value={invoice_currency} label="Invoice Currency" onChange={(e) => {
            setinvCurrency(e.target.value);
          }}/>
          <TextField margin="dense" value={document_type} label="Document type" onChange={(e) => {
            setDoctype(e.target.value);
          }}/>
          <TextField margin="dense" value={posting_id} label="Posting Id" onChange={(e) => {
            setPostingid(e.target.value);
          }}/>
          <TextField margin="dense" value={total_open_amount} label="Total open amount" onChange={(e) => {
            setAmount(e.target.value);
          }}/>
          <TextField margin="dense" value={baseline_create_date} type={"date"} label="Baseline create date" onChange={(e) => {
            setBasedate(e.target.value);
          }}/>
          <TextField margin="dense" value={cust_payment_terms} label="Customer payment terms" onChange={(e) => {
            setPayterms(e.target.value);
          }}/>
          <TextField margin="dense" value={inv_id} label="Invoice Id" onChange={(e) => {
            setInvid(e.target.value);
          }}/>
        </DialogContent>
        <DialogActions style={{background: "#0C2D48", }}>
          <Button onClick={handleCloseAdd} style={{color:"white" }}>
            Cancel
          </Button>
          <Button onClick={handleAdd} style={{color:"white" }}>
            Add
          </Button>
        </DialogActions>
      </Dialog>

      {/* Dialog Box for Delete Button */}
      <Dialog open={openDelete} onClose={handleCloseDelete}>
        <DialogTitle style={{background: "#0C2D48",color:"white" }}>Delete</DialogTitle>
        <DialogContent style={{background: "#0C2D48" }}>
          <DialogContentText style={{color:"white" }}>
            Are you sure you want to delete this entry?
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{background: "#0C2D48"}}>
          <Button onClick={handleDelete} style={{color:"white" }}>
            Yes
          </Button>
          <Button onClick={handleCloseDelete} style={{color:"white" }}>
            No
          </Button>
        </DialogActions>
      </Dialog>

      {/* Dialog Box for Edit Button */}
      <Dialog open={openEdit} onClose={handleCloseEdit}>
        <DialogTitle style={{background: "#0C2D48",color:"white" }}>Edit</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To Update a Entry please enter details Here.
          </DialogContentText>
          <TextField margin="dense" value={invoice_currency} label="Invoice currency" onChange={(e) => {
            setinvCurrency(e.target.value);
          }}/>
          <TextField margin="dense" value={cust_payment_terms} label="Customer Payment Terms" onChange={(e) => {
            setPayterms(e.target.value);
          }}/>
        </DialogContent>
        <DialogActions style={{background: "#0C2D48" }}>
          <Button onClick={handleCloseEdit} style={{color:"white" }}>
            Cancel
          </Button>
          <Button onClick={handleEdit} style={{color:"white" }}>
            Edit
          </Button>
        </DialogActions>
      </Dialog>
      
      {/* Dialog Box for analytics Button */}
      <Dialog open={openAnalytics} onClose={handleCloseAnalytics} >
        <DialogTitle style={{background: "#0C2D48",color:"white" ,}}>Analytics View</DialogTitle>
        <DialogContent>
          <DialogContentText>
          </DialogContentText>
          Clear Date
          <TextField margin="dense" value={clear_date} type={"date"} label="Clear Date" onChange={(e) => {
            setCleardate(e.target.value);
          }} style={{ paddingRight:"50px"}}/>
          <TextField margin="dense" value={clear_date1} type={"date"} label="Clear Date" onChange={(e) => {
            setCleardate1(e.target.value);
          }} style={{ paddingRight:"150px"}}/>
          Due Date
          <TextField margin="dense" value={due_in_date} type={"date"} label="Due Date" onChange={(e) => {
            setDuedate(e.target.value);
          }} style={{ paddingRight:"30px"}}/>
          <TextField margin="dense" value={due_in_date1} type={"date"} label="Due Date" onChange={(e) => {
            setDuedate1(e.target.value);
          }} style={{ paddingRight:"150px"}}/>
          Baseline Create Date
          <TextField margin="dense" value={baseline_create_date} type={"date"} label="Baseline create date" onChange={(e) => {
            setBasedate(e.target.value);
          }} style={{ paddingRight:"50px"}}/>
          <TextField margin="dense" value={baseline_create_date1} type={"date"} label="Baseline create date" onChange={(e) => {
            setBasedate1(e.target.value);
          }} style={{ paddingRight:"50px"}}/>
          Invoice Currency
          <TextField margin="dense" value={invoice_currency} label="Invoice currency" onChange={(e) => {
            setinvCurrency(e.target.value);
          }}/>
         
        </DialogContent>
        <DialogActions style={{background: "#0C2D48" }}>
          <Button onClick={handleCloseAnalytics} style={{color:"white" }}>
            Cancel
          </Button>
          <Button onClick={handleAnalytics} style={{color:"white" }}>
            Graphs
          </Button>
        </DialogActions>
      </Dialog>
 {/* <PieComponent arr={invoicecurr} visible={pie} /> */}
      {/* Dialog Box for Advanced search Button */}
      <Dialog open={openAdvsearch} onClose={handleCloseAdvsearch}>
        <DialogTitle style={{background: "#0C2D48",color:"white" }}>Advance Search</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To Update a Entry please enter details Here.
          </DialogContentText>
          <TextField margin="dense"  value={doc_id} label="Document ID" onChange={(e) => {
            setDocid(e.target.value);
          }}/>
          <TextField margin="dense"  value={inv_id} label="Invoice ID" onChange={(e) => {
            setInvid(e.target.value);
          }}/>
          <TextField margin="dense"  value={cust_number} label="Customer Number" onChange={(e) => {
            setCustno(e.target.value);
          }}/>
          <TextField margin="dense"  value={buisness_year} label="Business Year" onChange={(e) => {
            setByear(e.target.value);
          }}/>
        </DialogContent>
        <DialogActions style={{background: "#0C2D48" }}>
          <Button onClick={handleCloseAdvsearch} style={{color:"white" }}>
            Cancel
          </Button>
          <Button onClick={handleAdvsearch} style={{color:"white" }}>
            Search
          </Button>
        </DialogActions>
      </Dialog>
      {/* Definition of footer */}
      <footer >
        <div  style={{
          background: "#324752",
          width: "95vw",
          padding: '2vw',      
          height:'4vh'
        }}>
          <div style={{
            justifyContent: "center",
            alignItems: "center",
            color:"white",
            textAlign:"center"
          }}><a href="https://www.highradius.com/" style={{color:"cyan"}}>Privacy Policy</a>| © 2022 Highradius Corporation. All rights reserved.
          </div>
        </div>
      </footer>
      
    </>
  );
};

export default Body;
