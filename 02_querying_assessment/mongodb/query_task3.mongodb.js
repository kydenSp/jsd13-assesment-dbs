// Task 3: Stock Replenishment Check
// Before placing the weekly supply order, the manager wants to avoid over-ordering ingredients
// that are already well-stocked. They need a list of every ingredient with a stock level
// of 100 or more so those can be deprioritised in this week's order.
//
// Hint: Write a query to find all ingredients in the ingredients collection that have a stock_level of 100.00 or more.

// Bonus: The dataset is identical in the PostgreSQL database, meaning the same business insight can be retrieved.
// Write the equivalent query for PostgreSQL. See query_task3_bonus.sql

// ---------------------------------------------------------------
// Your thinking process (required)

// Target : list all the ingredient and stock level 100 or more
// Source :  collection 'ingredients'
// Criteria : only ingrendients's stock 100 or above.
// mongoDB Concept :
// 1.use getCollection to connect with ingredients.
// 2.find ({}) to filter all the items, looking for stock equal or above 100
// 3.the amount is decimal and amount must above or queal 100,
// so I use decimal128 to clearify the amount same as the data and $gte for greater than or equal 100
// ---------------------------------------------------------------
// Before writing your query, explain in your own words how you
// interpreted the task, what data you need, which collection(s)
// are involved, and what MongoDB concepts you plan to use.
// Write in English or Thai. Do not skip this step.
//
// Your thinking:
//
use("chrome-burger-db"); 

db.getCollection('ingredients').find({stock_level:{$gte:Decimal128('100.00')}})