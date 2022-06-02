package com.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.webapp.conn.ConnectionUtils;
import com.webapp.utils.DBUtils;

/**
 * Servlet implementation class AdvanceSInvoice
 */
@WebServlet("/AdvanceSInvoice")
public class AdvanceSInvoice extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AdvanceSInvoice() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @param Doc_id 
	 * @param inv_id 
	 * @param Cust_no 
	 * @param Bus_yr 
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		Connection connection;
		response.addHeader("Access-Control-Allow-Origin","http://localhost:3000");
		try {
//			int Doc_id,inv_id,Cust_no,Bus_yr;
//			Doc_id = 1930438491;
//			inv_id= 1930438491;
//			Cust_no = 200769623;
//			Bus_yr = 2020;
			String cust_number = request.getParameter("cust_number");
			String Doc_id = request.getParameter("doc_id");
			String inv_id = request.getParameter("invoice_id");
			String Bus_yr = request.getParameter("buisness_year");
			int doc_id = Integer.parseInt(Doc_id);
			int invoice_id = Integer.parseInt(inv_id);
			int bus_yr = Integer.parseInt(Bus_yr);
			
			int cust_num = Integer.parseInt(cust_number);
			connection = ConnectionUtils.getConnection();
			 List<winter_internship> winter_internships =  DBUtils.AdvanceSearch(connection,doc_id,invoice_id, cust_num, bus_yr);
			 Gson gson = new Gson();
			 String internshipsList = gson.toJson(winter_internships);
			 	PrintWriter out = response.getWriter();
		        response.setContentType("application/json");
		        response.setCharacterEncoding("UTF-8");
		        out.print(internshipsList);
		        out.flush();   

			 
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}catch(NumberFormatException ex)
		{
			System.out.println("not a number");
		    
		}
		//response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
		response.addHeader("Access-Control-Allow-Origin","http://localhost:3000");

	}

}
