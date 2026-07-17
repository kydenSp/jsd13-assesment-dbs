-- Task 2 Bonus: Shift Activity Report
-- Jane Doe has an upcoming performance review and the manager wants to look at her order history
-- ahead of the meeting. They only need to see when each order was placed and what it was worth —
-- no other details are required for this particular review.
--
-- The dataset is identical in PostgreSQL — the same business insight can be retrieved.
--
-- Hint: Write a query to find the order_date and total_price from the Orders table
-- for all orders handled by Jane Doe. You will need to join with the Staff table
-- to filter by the staff member's name.

-- ---------------------------------------------------------------
-- Your thinking process (required)
-- Target : list of order_date and total_price.
-- Source : Table orders and Table staff
-- Criteria : only orders handled by staff first_name = 'Jane' and last_name = 'Doe'.
-- SQL Concept :
--SELECT column orders.order_date and orders.total_price
--FROM table orders
--JOIN table staff on staff_id
--WHERE filter by staff.first_name = 'Jane' AND staff.last_name = 'Doe'
-- ---------------------------------------------------------------
-- Before writing your query, explain in your own words how you
-- interpreted the task, what data you need, which table(s) are
-- involved, and what SQL concepts you plan to use.
-- Write in English or Thai. Do not skip this step.
--
-- Your thinking:
--
SELECT orders.order_date,orders.total_price
FROM orders
JOIN staff on staff.staff_id = orders.staff_id
WHERE staff.first_name = 'Jane' AND staff.last_name = 'Doe'