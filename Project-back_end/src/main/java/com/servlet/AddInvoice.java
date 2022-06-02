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
 * Servlet implementation class AddInvoice
 */
@WebServlet("/AddInvoice")
public class AddInvoice extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AddInvoice() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		Connection connection;
		response.addHeader("Access-Control-Allow-Origin","*");
		try {
			
			connection = ConnectionUtils.getConnection();
			winter_internship insert = new winter_internship();
			insert.setBusiness_code(request.getParameter("business_code"));
			insert.setCust_number(Integer.parseInt(request.getParameter("cust_number")));
			insert.setClear_date(request.getParameter("clear_date"));
			insert.setBuisness_year(Integer.parseInt(request.getParameter("buisness_year")));
			insert.setDoc_id(request.getParameter("doc_id"));
			insert.setPosting_date(request.getParameter("posting_date"));
			insert.setDocument_create_date(request.getParameter("document_create_date"));
			insert.setDue_in_date(request.getParameter("due_in_date"));
			insert.setInvoice_currency(request.getParameter("invoice_currency"));
			insert.setDocument_type(request.getParameter("document_type"));
			insert.setPosting_id(Integer.parseInt(request.getParameter("posting_id")));
			insert.setTotal_open_amount(Double.parseDouble(request.getParameter("total_open_amount")));
			insert.setBaseline_create_date(request.getParameter("baseline_create_date"));
			insert.setCust_payment_terms(request.getParameter("cust_payment_terms"));;
			insert.setInvoice_id(Integer.parseInt(request.getParameter("invoice_id")));
			
			 List<winter_internship> winter_internships =  DBUtils.InsertInvoice(connection, insert);
			 Gson gson = new Gson();
			 String internshipsList = gson.toJson(winter_internships);
			 	PrintWriter out = response.getWriter();
		        response.setContentType("application/json");
		        response.setCharacterEncoding("UTF-8");
		        out.print(internshipsList);
		         

			 
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
