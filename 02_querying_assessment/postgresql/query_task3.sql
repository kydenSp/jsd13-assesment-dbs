-- Task 3: Staff Performance Review
-- At the end of the month, the owner wants to reward the hardest-working cashiers.
-- To decide fairly, they want to see how many orders each staff member has processed,
-- with the busiest staff member appearing at the top of the list.
--
-- Hint: Write a query to find the total number of orders processed by each staff member.
-- The result should show the staff member's full name (concatenated) and their total order count,
-- ordered by the count in descending order.

-- Bonus: The dataset is identical in the MongoDB database, meaning the same business insight can be retrieved.
-- Write the equivalent query for MongoDB. See query_task3_bonus.mongodb.js

-- ---------------------------------------------------------------
-- Your thinking process (required)
-- Target : list the staff name and total order count.
-- Source : Table 'orders'&'staff'
-- Criteria : only cashier staff and list from the most to the least.
-- SQL Concept : 
--  1.Select column of first_name , last_name and role.
--  2.COUNT all the order tht staff handle.
--  3.FROM table staff to check the name and id.
--  4.JOIN join staff id on staff and order table.
--  5.WHERE only cashier role is need.
--  6.GROUP BY group the name and ordercount together.
--  7.ORDER BY from most to least.
-- ---------------------------------------------------------------
-- Before writing your query, explain in your own words how you
-- interpreted the task, what data you need, which table(s) are
-- involved, and what SQL concepts you plan to use.
-- Write in English or Thai. Do not skip this step.
--
-- Your thinking:
--

SELECT staff.first_name,staff.last_name,
COUNT(orders.staff_id) AS orderCount
FROM staff
JOIN orders on staff.staff_id = orders.staff_id
WHERE role = 'Cashier'
GROUP BY staff.first_name,staff.last_name
ORDER BY orderCount DESC

