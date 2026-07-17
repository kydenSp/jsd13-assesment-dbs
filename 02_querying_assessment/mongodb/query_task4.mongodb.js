// Task 4: Total Revenue Summary
// At the end of the trading period, the owner wants a single figure that shows how much revenue
// the truck has generated across all recorded orders. This number will be used in their
// financial summary report, so the result should be returned as a single value named total_revenue.
//
// Hint: Write an aggregation query on the orders collection to calculate the total revenue from all orders combined.
// The result should be a single document with a field named total_revenue.

// Bonus: The dataset is identical in the PostgreSQL database, meaning the same business insight can be retrieved.
// Write the equivalent query for PostgreSQL. See query_task4_bonus.sql

// ---------------------------------------------------------------
// Your thinking process (required)

// Target : find total_revenue
// Source : collection (orders)
// Criteria : calculate total from all order and result in the field : total_revenue
// mongoDB Concept :
// 1. use aggregate to process data through pipeline stages.
// 2. Use $group with _id: null to combine all documents into a single group.
// 3. $sum total or all the order.   
// ---------------------------------------------------------------
// Before writing your query, explain in your own words how you
// interpreted the task, what data you need, which collection(s)
// are involved, and what MongoDB concepts you plan to use.
// Write in English or Thai. Do not skip this step.
//
// Your thinking:
//
use("chrome-burger-db");

db.orders.aggregate([{$group:{_id:null,total_revenue:{$sum:'$total_price'}} }])