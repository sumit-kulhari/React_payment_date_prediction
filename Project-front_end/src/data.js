import axios from "axios"

export const getData = async () =>{
    let response = await axios.get("http://localhost:8080/HRC_Project/DisplayInvoice");
    let data = response.data;
    return data;

}

export const updateData = async({Invoice_currency,Cust_payment_terms,sl_no}) =>{
    let str = "Invoice_currency=" + Invoice_currency + "&Cust_payment_terms=" + Cust_payment_terms + "&sl_no=" + sl_no;
    
    let response = await axios.get("http://localhost:8080/HRC_Project/UpdateInvoice?"+str);
    return response.data;

}

export const addData = async(str) =>{
    // let str = ;
    let response = await axios.get("http://localhost:8080/HRC_Project/AddInvoice"+ str);
    return response.data;

}

export const delData = async(sl_no) =>{
    let resp = false;
    let response = await axios.get("http://localhost:8080/HRC_Project/DeleteInvoice?sl_no=" + sl_no)
    if (response.data){
        resp = true;
    }
    return resp;

}

export const serData = async(Cust_id) =>{
    
    let str = Cust_id;
    let response = await axios.get("http://localhost:8080/HRC_Project/SearchInvoice?Cust_id=" + str);
    
    return response.data;

}

export const advserData = async({Doc_id, inv_id, Cust_no, bus_yr}) =>{
    let str = "Doc_id=" + Doc_id + "&inv_id=" + inv_id +"&Cust_no=" + Cust_no+ "&bus_yr=" + bus_yr ; 
    let response = await axios.get("http://localhost:8080/HRC_Project/AdvanceSInvoice?" + str);
    return response.data;
}

