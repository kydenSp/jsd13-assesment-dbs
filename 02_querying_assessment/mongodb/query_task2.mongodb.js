// Task 2: Shift Activity Report
// Jane Doe has an upcoming performance review and the manager wants to look at her order history
// ahead of the meeting. They only need to see when each order was placed and what it was worth —
// no other details are required for this particular review.
//
// Hint: Write a query to find all orders handled by the staff member "Jane Doe".
// Your query should only return the order_date and total_price fields for these orders.

// Bonus: The dataset is identical in the PostgreSQL database, meaning the same business insight can be retrieved.
// Write the equivalent query for PostgreSQL. See query_task2_bonus.sql

// ---------------------------------------------------------------
// Your thinking process (required)

// Target : find the Jane Doe order history.
// Source : Collection 'Order'
// Criteria : Only time that the order was placed and what it was worth.
// mongoDB Concept : 
//  1. getCollection to connect with 'orders' 
//  2. find ({query},{projection}) first{} filter staff, second{} Selected field return.
//  3. {} = query: embedded fields "staff.first_name" , "staff.last_name" match with Jand Doe.
//  4. {} = projection : task want only time and amount, so I explicit 
// set _id: 0 to exclude it, and set order_date: 1, total_price: 1 to include only required fields.
// ---------------------------------------------------------------
// Before writing your query, explain in your own words how you
// interpreted the task, what data you need, which collection(s)
// are involved, and what MongoDB concepts you plan to use.
// Write in English or Thai. Do not skip this step.
//
// Your thinking:
//
use("chrome-burger-db");

db.getCollection('orders').find({"staff.first_name":'Jane',"staff.last_name":'Doe'},{order_date:1,total_price:1,_id:0})