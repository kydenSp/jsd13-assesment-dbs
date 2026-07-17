// Task 1: Budget Meal Deal
// The owner wants to introduce a budget-friendly meal deal promotion and needs to identify
// which menu items could be included. To qualify, an item must be priced under $10.00,
// so they can offer good value without cutting too deep into margins.
//
// Hint: Write a query to find all menu items in the menu_items collection that have a price less than 10.00.

// Bonus: The dataset is identical in the PostgreSQL database, meaning the same business insight can be retrieved.
// Write the equivalent query for PostgreSQL. See query_task1_bonus.sql

// ---------------------------------------------------------------
// Your thinking process (required)

// Target : find menu data that match the condition.
// Source : Collection 'menu_items'.
// Criteria : menus's price less than $10.00.
// mongoDB Concept : 
// 1.use getCollection to connect with menu_items.
// 2.find ({}) to filter all the items, looking for price under $10.00.
// 3.the price is decimal and price must under $10.00,so I use decimal128 to clearify the price and $lt for less than 10.00.
// ---------------------------------------------------------------
// Before writing your query, explain in your own words how you
// interpreted the task, what data you need, which collection(s)
// are involved, and what MongoDB concepts you plan to use.
// Write in English or Thai. Do not skip this step.
//
// Your thinking: 
//
use("chrome-burger-db");

db.getCollection('menu_items').find({price:{$lt:Decimal128('10.00')}})

