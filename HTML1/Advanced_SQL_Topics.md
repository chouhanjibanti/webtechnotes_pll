# Advanced SQL Topics

A complete teaching guide covering **Set Operations**, **Conditional Membership Operators**, **Views**, **Stored Programs**, and **Triggers** — with theory, syntax, and hands-on practical examples using a sample database.

---

## 📦 Sample Database Setup

All examples in this guide use two simple tables. Run this first so every example below works out of the box.

```sql
CREATE TABLE Employees (
    emp_id      INT PRIMARY KEY,
    emp_name    VARCHAR(50),
    dept_id     INT,
    salary      DECIMAL(10,2),
    city        VARCHAR(50)
);

INSERT INTO Employees VALUES
(1, 'Amit',   101, 55000, 'Bhopal'),
(2, 'Riya',   102, 62000, 'Indore'),
(3, 'Sahil',  101, 48000, 'Bhopal'),
(4, 'Neha',   103, 75000, 'Delhi'),
(5, 'Karan',  102, 51000, 'Indore'),
(6, 'Priya',  NULL, 40000, 'Bhopal');

CREATE TABLE Managers (
    mgr_id      INT PRIMARY KEY,
    mgr_name    VARCHAR(50),
    dept_id     INT,
    salary      DECIMAL(10,2),
    city        VARCHAR(50)
);

INSERT INTO Managers VALUES
(1, 'Amit',    101, 55000, 'Bhopal'),
(2, 'Vikram',  103, 90000, 'Delhi'),
(3, 'Sonal',   104, 85000, 'Mumbai');

CREATE TABLE Departments (
    dept_id     INT PRIMARY KEY,
    dept_name   VARCHAR(50),
    budget      DECIMAL(12,2)
);

INSERT INTO Departments VALUES
(101, 'HR', 500000),
(102, 'Sales', 900000),
(103, 'IT', 1200000);
```

> 💡 Note "Amit" intentionally appears in both `Employees` and `Managers` — this is used to demonstrate `INTERSECT` and set duplicates later.

---

## 1️⃣ Set Operations

Set operations combine the **results of two or more SELECT queries**. All queries involved must have:
- The **same number of columns**
- **Matching/compatible data types** in corresponding positions

### a) UNION
Combines results from two queries and **removes duplicate rows**.

```sql
SELECT emp_name, city FROM Employees
UNION
SELECT mgr_name, city FROM Managers;
```
**Result:** A distinct list of all names+cities from both tables — "Amit, Bhopal" appears **only once**, even though it exists in both tables.

### b) UNION ALL
Same as UNION but **keeps duplicates** (faster, since no de-duplication step is needed).

```sql
SELECT emp_name, city FROM Employees
UNION ALL
SELECT mgr_name, city FROM Managers;
```
**Result:** "Amit, Bhopal" appears **twice** (once from each table).

### c) INTERSECT
Returns only the rows that appear in **both** result sets.

```sql
SELECT emp_name, city FROM Employees
INTERSECT
SELECT mgr_name, city FROM Managers;
```
**Result:** Only `('Amit', 'Bhopal')` — the one row common to both tables.

> ⚠️ MySQL added native `INTERSECT` support only from version 8.0.31+. In older MySQL, simulate it with `INNER JOIN` or `WHERE ... IN (subquery)`.

### d) MINUS / EXCEPT
Returns rows from the **first** query that do **not** appear in the second.

```sql
-- Oracle syntax
SELECT emp_name, city FROM Employees
MINUS
SELECT mgr_name, city FROM Managers;

-- SQL Server / PostgreSQL syntax (same logic, different keyword)
SELECT emp_name, city FROM Employees
EXCEPT
SELECT mgr_name, city FROM Managers;
```
**Result:** All employees except Amit — since Amit is the only one who is also a manager.

| Operator | Duplicates? | Row order requirement |
|---|---|---|
| UNION | Removed | Same column count/type |
| UNION ALL | Kept | Same column count/type |
| INTERSECT | Removed | Same column count/type |
| MINUS/EXCEPT | Removed | Same column count/type |

---

## 2️⃣ Conditional Membership: EXISTS, ANY, ALL

These operators are used inside a `WHERE` clause to compare a value against a **set of results returned by a subquery**.

### a) EXISTS
Returns `TRUE` if the subquery returns **at least one row**. Very efficient because the engine stops scanning as soon as one match is found.

```sql
-- Find employees who belong to a department that exists in the Departments table
SELECT emp_name
FROM Employees e
WHERE EXISTS (
    SELECT 1 FROM Departments d
    WHERE d.dept_id = e.dept_id
);
```
**Use case:** Checking existence/relationship without caring about the actual matched values. Use `NOT EXISTS` to find rows with **no** match (e.g., Priya, whose `dept_id` is NULL, would be excluded by both).

### b) ANY (also written SOME)
Returns `TRUE` if the condition is true for **at least one** value returned by the subquery.

```sql
-- Employees earning more than ANY manager's salary
-- (i.e., more than at least the lowest-paid manager)
SELECT emp_name, salary
FROM Employees
WHERE salary > ANY (SELECT salary FROM Managers);
```
**Logic:** This is equivalent to `salary > MIN(salary from subquery)`.
Here, managers earn 55000, 90000, 85000 → the lowest is 55000, so any employee earning more than 55000 qualifies → **Neha (75000)**.

### c) ALL
Returns `TRUE` only if the condition holds for **every** value returned by the subquery.

```sql
-- Employees earning more than ALL managers
-- (i.e., more than even the highest-paid manager)
SELECT emp_name, salary
FROM Employees
WHERE salary > ALL (SELECT salary FROM Managers);
```
**Logic:** Equivalent to `salary > MAX(salary from subquery)` → max manager salary is 90000 → **no employee qualifies**, so the result is empty.

| Operator | Equivalent to | Passes when |
|---|---|---|
| `> ANY` | `> MIN(...)` | greater than the smallest value |
| `> ALL` | `> MAX(...)` | greater than the largest value |
| `< ANY` | `< MAX(...)` | smaller than the largest value |
| `< ALL` | `< MIN(...)` | smaller than the smallest value |

---

## 3️⃣ Views

A **view** is a virtual table based on the result of a SQL query. It doesn't store data itself (unless materialized) — it stores the *query definition* and displays live data each time it's queried.

### a) Creating a View
```sql
CREATE VIEW HighEarners AS
SELECT emp_id, emp_name, salary, city
FROM Employees
WHERE salary > 50000;
```

Query it just like a table:
```sql
SELECT * FROM HighEarners;
```

### b) Updating Data Through a View
If a view is based on a **single table** and doesn't use aggregates/DISTINCT/GROUP BY, it's usually **updatable**.

```sql
UPDATE HighEarners
SET salary = 58000
WHERE emp_name = 'Amit';
```
This actually updates the underlying `Employees` table.

### c) Modifying the View Definition
```sql
CREATE OR REPLACE VIEW HighEarners AS
SELECT emp_id, emp_name, salary, city, dept_id
FROM Employees
WHERE salary > 45000;
```

### d) Dropping a View
```sql
DROP VIEW HighEarners;
```

**Why teach views?**
- Simplify complex/repeated queries
- Restrict access to sensitive columns (security)
- Provide a stable interface even if underlying tables change

---

## 4️⃣ Stored Programs: Procedures and Functions

### a) Stored Procedure
A precompiled set of SQL statements that can accept parameters, perform logic, and be called repeatedly. Can perform DML (INSERT/UPDATE/DELETE) and doesn't have to return a value.

```sql
DELIMITER //

CREATE PROCEDURE GiveRaise(
    IN p_emp_id INT,
    IN p_percent DECIMAL(5,2)
)
BEGIN
    UPDATE Employees
    SET salary = salary + (salary * p_percent / 100)
    WHERE emp_id = p_emp_id;
END //

DELIMITER ;
```

**Calling it:**
```sql
CALL GiveRaise(3, 10);   -- Gives Sahil a 10% raise
```

### b) User-Defined Function (UDF)
Unlike a procedure, a function **must return a single value** and can be used directly inside `SELECT` statements.

```sql
DELIMITER //

CREATE FUNCTION AnnualSalary(p_emp_id INT)
RETURNS DECIMAL(12,2)
DETERMINISTIC
BEGIN
    DECLARE v_monthly DECIMAL(10,2);
    DECLARE v_annual DECIMAL(12,2);

    SELECT salary INTO v_monthly
    FROM Employees
    WHERE emp_id = p_emp_id;

    SET v_annual = v_monthly * 12;
    RETURN v_annual;
END //

DELIMITER ;
```

**Using it:**
```sql
SELECT emp_name, AnnualSalary(emp_id) AS yearly_pay
FROM Employees;
```

| Feature | Procedure | Function |
|---|---|---|
| Returns a value | Optional (can return none/many via OUT params) | Must return exactly one value |
| Used in SELECT | ❌ No | ✅ Yes |
| Can perform DML (INSERT/UPDATE) | ✅ Yes | ⚠️ Restricted/discouraged |
| Called with | `CALL procedure_name()` | Used inline in expressions |

---

## 5️⃣ Triggers

A **trigger** is a stored program that **automatically executes** in response to a specific event (`INSERT`, `UPDATE`, `DELETE`) on a table — no explicit call needed.

### a) Audit Log Setup
```sql
CREATE TABLE Salary_Audit (
    audit_id    INT AUTO_INCREMENT PRIMARY KEY,
    emp_id      INT,
    old_salary  DECIMAL(10,2),
    new_salary  DECIMAL(10,2),
    changed_on  DATETIME
);
```

### b) BEFORE INSERT Trigger — Validation
Prevent negative salaries from ever being inserted.

```sql
DELIMITER //

CREATE TRIGGER trg_check_salary
BEFORE INSERT ON Employees
FOR EACH ROW
BEGIN
    IF NEW.salary < 0 THEN
        SET NEW.salary = 0;
    END IF;
END //

DELIMITER ;
```

### c) AFTER UPDATE Trigger — Automatic Audit Logging
Every time a salary changes, automatically log the old and new values.

```sql
DELIMITER //

CREATE TRIGGER trg_salary_audit
AFTER UPDATE ON Employees
FOR EACH ROW
BEGIN
    IF OLD.salary <> NEW.salary THEN
        INSERT INTO Salary_Audit(emp_id, old_salary, new_salary, changed_on)
        VALUES (OLD.emp_id, OLD.salary, NEW.salary, NOW());
    END IF;
END //

DELIMITER ;
```

**Test it:**
```sql
UPDATE Employees SET salary = 60000 WHERE emp_id = 3;
SELECT * FROM Salary_Audit;   -- shows the automatically logged change
```

### d) AFTER DELETE Trigger — Prevent Data Loss
```sql
CREATE TABLE Employees_Archive LIKE Employees;

DELIMITER //

CREATE TRIGGER trg_archive_on_delete
BEFORE DELETE ON Employees
FOR EACH ROW
BEGIN
    INSERT INTO Employees_Archive
    VALUES (OLD.emp_id, OLD.emp_name, OLD.dept_id, OLD.salary, OLD.city);
END //

DELIMITER ;
```

### e) Dropping a Trigger
```sql
DROP TRIGGER trg_salary_audit;
```

| Trigger Timing | Fires... |
|---|---|
| `BEFORE INSERT/UPDATE` | Before the change is written — good for validation |
| `AFTER INSERT/UPDATE/DELETE` | After the change is written — good for logging/auditing |

---

## 🎯 Suggested Classroom Exercise

Give students this combined mini-project:
1. Create a `View` called `DeptSalarySummary` showing average salary per department.
2. Write a `Stored Procedure` `TransferEmployee(emp_id, new_dept_id)` that moves an employee to a new department.
3. Write a `Trigger` that logs every department transfer into a `Transfer_Log` table.
4. Use `EXISTS` to list departments that currently have **no** employees.
5. Use `UNION` to combine a list of all employee and manager names into a single "All Staff" report.

---

*End of guide — happy teaching! 🎓*
