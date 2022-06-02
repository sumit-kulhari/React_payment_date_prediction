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
 * Servlet implementation class UpdateInvoice
 */
@WebServlet("/UpdateInvoice")
public class UpdateInvoice extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public UpdateInvoice() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		Connection connection;
		response.addHeader("Access-Control-Allow-Origin","http://localhost:3000");
		try {
			winter_internship update = new winter_internship();
			update.setInvoice_currency(request.getParameter("invoice_currency"));
			update.setCust_payment_terms(request.getParameter("cust_payment_terms"));
			update.setSl_no(Integer.parseInt(request.getParameter("sl_no")));
			connection = ConnectionUtils.getConnection();
			 List<winter_internship> winter_internships =  DBUtils.UpdateInvoice(connection,update);
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
