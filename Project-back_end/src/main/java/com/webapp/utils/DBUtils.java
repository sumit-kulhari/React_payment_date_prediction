package com.webapp.utils;

import java.sql.*;
import java.util.*;

//import com.servlet.business;
//import com.servlet.customer;
import com.servlet.winter_internship;

public class DBUtils {
	
	public static List<winter_internship> listInvoice(Connection conn)throws SQLException{
		
		String sql= "select * from winter_internship ";
		
		PreparedStatement pstm = conn.prepareStatement(sql);
		ResultSet rs = pstm.executeQuery();
		List<winter_internship> winterInternsips = new ArrayList<winter_internship>();
		
	while(rs.next()) {
		winter_internship w = new winter_internship();
		w.setBusiness_code(rs.getString("business_code"));
		w.setSl_no(rs.getInt("sl_no"));
		w.setCust_number(rs.getInt("cust_number"));
		w.setClear_date(rs.getString("clear_date"));
		w.setBuisness_year(rs.getInt("buisness_year"));
		w.setDoc_id(rs.getString("doc_id"));
		w.setPosting_date(rs.getString("posting_date"));
		w.setDocument_create_date(rs.getString("document_create_date"));
//		w.setDocument_create_date1(rs.getString("document_create_date1"));
		w.setDue_in_date(rs.getString("due_in_date"));
		w.setInvoice_currency(rs.getString("invoice_currency"));
		w.setDocument_type(rs.getString("document_type"));
		w.setPosting_id(rs.getInt("posting_id"));
//		w.setArea_business(rs.getString("area_business"));
		w.setTotal_open_amount(rs.getDouble("total_open_amount"));
		w.setBaseline_create_date(rs.getString("baseline_create_date"));
		w.setCust_payment_terms(rs.getString("cust_payment_terms"));
		w.setInvoice_id(rs.getInt("invoice_id"));
//		w.setIsOpen(rs.getByte("isOpen"));
		w.setAging_bucket(rs.getString("aging_bucket"));
//		w.setIs_deleted(rs.getByte("is_deleted"));

		winterInternsips.add(w);
	}
	
	return winterInternsips;
	
}
	public static List<winter_internship> findInvoice(Connection conn, int Cust_id) throws SQLException{
		
		String sql = "select * from winter_internship where cust_number  =(?) or buisness_year like (?) or invoice_id like (?) or doc_id like (?)";
		
		PreparedStatement pstm = conn.prepareStatement(sql);
		pstm.setInt(1, Cust_id);
		pstm.setInt(2, Cust_id);
		pstm.setInt(3, Cust_id);
		pstm.setInt(4, Cust_id);
		ResultSet rs = pstm.executeQuery();
		List<winter_internship> winterInternsip = new ArrayList<winter_internship>();
		
		while(rs.next()) {
			winter_internship w = new winter_internship();
			w.setSl_no(rs.getInt("sl_no"));
			w.setBusiness_code(rs.getString("business_code"));
			w.setCust_number(rs.getInt("cust_number"));
			w.setClear_date(rs.getString("clear_date"));
			w.setBuisness_year(rs.getInt("buisness_year"));
			w.setDoc_id(rs.getString("doc_id"));
			w.setPosting_date(rs.getString("posting_date"));
			w.setDocument_create_date(rs.getString("document_create_date"));
//			w.setDocument_create_date1(rs.getString("document_create_date1"));
			w.setDue_in_date(rs.getString("due_in_date"));
			w.setInvoice_currency(rs.getString("invoice_currency"));
			w.setDocument_type(rs.getString("document_type"));
			w.setPosting_id(rs.getInt("posting_id"));
//			w.setArea_business(rs.getString("area_business"));
			w.setTotal_open_amount(rs.getDouble("total_open_amount"));
			w.setBaseline_create_date(rs.getString("baseline_create_date"));
			w.setCust_payment_terms(rs.getString("cust_payment_terms"));
			w.setInvoice_id(rs.getInt("invoice_id"));
//			w.setIsOpen(rs.getByte("isOpen"));
			w.setAging_bucket(rs.getString("aging_bucket"));
//			w.setIs_deleted(rs.getByte("is_deleted"));
			
			winterInternsip.add(w);
		}
		return winterInternsip;
	}
	public static List<winter_internship> deleteInvoice(Connection conn,int sl_no) throws SQLException{
	
		String sql = "delete from winter_internship where sl_no in (?)";
		
		PreparedStatement pstm = conn.prepareStatement(sql);
		pstm.setInt(1, sl_no);
		pstm.executeUpdate();
		
		return null;
	
	}
	
	public static List<winter_internship> AdvanceSearch(Connection conn,int Doc_id,int inv_id,int Cust_no,int bus_yr)throws SQLException{
		
		String sql = "select * from winter_internship where doc_id=(?) and invoice_id=(?) and cust_number=(?) and buisness_year=(?) ";
		
		PreparedStatement pstm = conn.prepareStatement(sql);
		pstm.setInt(1, Doc_id);
		pstm.setInt(2, inv_id);
		pstm.setInt(3, Cust_no);
		pstm.setInt(4, bus_yr);
		ResultSet rs = pstm.executeQuery();
		List<winter_internship> winterInternsips = new ArrayList<winter_internship>();
		
		while(rs.next()) {
			winter_internship w = new winter_internship();
			w.setSl_no(rs.getInt("sl_no"));
			w.setBusiness_code(rs.getString("business_code"));
			w.setCust_number(rs.getInt("cust_number"));
			w.setClear_date(rs.getString("clear_date"));
			w.setBuisness_year(rs.getInt("buisness_year"));
			w.setDoc_id(rs.getString("doc_id"));
			w.setPosting_date(rs.getString("posting_date"));
			w.setDocument_create_date(rs.getString("document_create_date"));
//			w.setDocument_create_date1(rs.getString("document_create_date1"));
			w.setDue_in_date(rs.getString("due_in_date"));
			w.setInvoice_currency(rs.getString("invoice_currency"));
			w.setDocument_type(rs.getString("document_type"));
			w.setPosting_id(rs.getInt("posting_id"));
//			w.setArea_business(rs.getString("area_business"));
			w.setTotal_open_amount(rs.getDouble("total_open_amount"));
			w.setBaseline_create_date(rs.getString("baseline_create_date"));
			w.setCust_payment_terms(rs.getString("cust_payment_terms"));
			w.setInvoice_id(rs.getInt("invoice_id"));
//			w.setIsOpen(rs.getByte("isOpen"));
			w.setAging_bucket(rs.getString("aging_bucket"));
//			w.setIs_deleted(rs.getByte("is_deleted"));
			
			winterInternsips.add(w);
		}
		return winterInternsips;
	}
	
	public static List<winter_internship> InsertInvoice(Connection conn,winter_internship invoice)throws SQLException{
		
		String sql = "Insert into winter_internship(business_code,cust_number,clear_date,buisness_year,doc_id,posting_date,document_create_date,due_in_date,invoice_currency,document_type,posting_id,total_open_amount,baseline_create_date,cust_payment_terms,invoice_id) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
		
		PreparedStatement pstm = conn.prepareStatement(sql);
		pstm.setString(1,invoice.getBusiness_code());
		pstm.setInt(2,invoice.getCust_number());
		pstm.setString(3,invoice.getClear_date());
		pstm.setInt(4,invoice.getBuisness_year());
		pstm.setString(5,invoice.getDoc_id());
		pstm.setString(6,invoice.getPosting_date());
		pstm.setString(7,invoice.getDocument_create_date());
		pstm.setString(8,invoice.getDue_in_date());
		pstm.setString(9,invoice.getInvoice_currency());
		pstm.setString(10,invoice.getDocument_type());
		pstm.setInt(11,invoice.getPosting_id());
		pstm.setDouble(12,invoice.getTotal_open_amount());
		pstm.setString(13,invoice.getBaseline_create_date());
		pstm.setString(14,invoice.getCust_payment_terms());
		pstm.setInt(15,invoice.getInvoice_id());
		
		pstm.executeUpdate();
		return null;
		
	}
	
	public static List<winter_internship> UpdateInvoice(Connection conn ,winter_internship update)throws SQLException{
		String sql = "update winter_internship set invoice_currency = (?) , cust_payment_terms=(?) where sl_no = (?)";
		PreparedStatement pstm = conn.prepareStatement(sql);
		pstm.setString(1, update.getInvoice_currency());
		pstm.setString(2, update.getCust_payment_terms());
		pstm.setInt(3, update.getSl_no());
		
		pstm.executeUpdate();
		return null;
	}
	
	public static List<winter_internship> Update(Connection conn ,winter_internship update)throws SQLException{
		String sql = "update winter_internship set aging_bucket = (?) where doc_id like (?)";
		PreparedStatement pstm = conn.prepareStatement(sql);
		pstm.setString(1, update.getAging_bucket());
		pstm.setString(2, update.getDoc_id());
		
		pstm.executeUpdate();
		return null;
	}
	
	public static List<winter_internship> Analytics(Connection conn, winter_internship analytics)throws SQLException{
		String sql = "select * from winter_internship where (clear_date between (?) and (?) or due_in_date between (?) and (?) or baseline_create_date between (?) and (?)) and (invoice_currency = (?));";
		PreparedStatement pstm = conn.prepareStatement(sql);
		pstm.setString(1, analytics.getClear_date());
		pstm.setString(2, analytics.getClear_date());
		pstm.setString(3, analytics.getDue_in_date());
		pstm.setString(4, analytics.getDue_in_date());
		pstm.setString(5, analytics.getBaseline_create_date());
		pstm.setString(6, analytics.getBaseline_create_date());
		pstm.setString(7, analytics.getInvoice_currency());
		
		ResultSet rs = pstm.executeQuery();
		List<winter_internship> winterInternsips = new ArrayList<winter_internship>();
		
		while(rs.next()) {
			winter_internship w = new winter_internship();
//			w.setSl_no(rs.getInt("sl_no"));
//			w.setBusiness_code(rs.getString("business_code"));
			w.setCust_number(rs.getInt("cust_number"));
//			w.setClear_date(rs.getString("clear_date"));
//			w.setBuisness_year(rs.getInt("buisness_year"));
//			w.setDoc_id(rs.getString("doc_id"));
//			w.setPosting_date(rs.getString("posting_date"));
//			w.setDocument_create_date(rs.getString("document_create_date"));
//			w.setDue_in_date(rs.getString("due_in_date"));
			w.setInvoice_currency(rs.getString("invoice_currency"));
//			w.setDocument_type(rs.getString("document_type"));
//			w.setPosting_id(rs.getInt("posting_id"));
			w.setTotal_open_amount(rs.getDouble("total_open_amount"));
//			w.setBaseline_create_date(rs.getString("baseline_create_date"));
//			w.setCust_payment_terms(rs.getString("cust_payment_terms"));
//			w.setInvoice_id(rs.getInt("invoice_id"));
//			w.setAging_bucket(rs.getString("aging_bucket"));
			
			winterInternsips.add(w);
		}
		return winterInternsips;
		
	}
	
}	
