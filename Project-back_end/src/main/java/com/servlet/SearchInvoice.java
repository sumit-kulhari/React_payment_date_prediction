package com.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.List;

import com.google.gson.Gson;
import com.webapp.conn.ConnectionUtils;
import com.webapp.utils.DBUtils;
/**
 * Servlet implementation class SearchInvoice
 */
@WebServlet("/SearchInvoice")
public class SearchInvoice extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public SearchInvoice() {
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
			
			String cust_number = request.getParameter("cust_number");
			int cust_num = Integer.parseInt(cust_number);
			
			 List<winter_internship> winter_internships =  DBUtils.findInvoice(connection, cust_num);
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
			ex.printStackTrace();
		    
		}
		//response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
