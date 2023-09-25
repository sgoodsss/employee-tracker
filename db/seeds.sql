-- Inserts values into tables for testing purposes
INSERT INTO departments (name)
VALUES
(`Finance`),
(`Marketing`),
(`Human Resources`),
(`Sales`),
(`IT`),
(`Operations`),
(`Management`);

INSERT INTO roles (title, salary, department_id)
VALUES
(`Accountant`, 60000, 1),
(`Financial Analyst`, 71000, 1),
('Marketing Manager', 140000, 2),
('Marketing Coordinator', 90000, 2),
('Human Resources Manager', 71000, 3),
('Recruitment Manager', 70000, 3),
('VP of Sales', 180000, 4),
('Sales Associate', 95000, 4),
('IT Technician', 51500, 5),
('Computer Programmer', 70000, 5),
('Operations Coordinator', 70000, 6),
('Project Manager', 81000, 6),
(`CEO`, 1000000, 7),
(`CFO`, 750000, 7);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
(`Lily`, `Kennedy`, 1, ),
(`Abby`, `Kelly`, 1, ),
(`Lily`, `Kennedy`, 1, ),
(`Lily`, `Kennedy`, 1, ),
(`Lily`, `Kennedy`, 1, ),
(`Lily`, `Kennedy`, 1, ),
(`Lily`, `Kennedy`, 1, ),
(`Lily`, `Kennedy`, 1, ),
(`Lily`, `Kennedy`, 1, ),
(`Lily`, `Kennedy`, 1, ),
(`Lily`, `Kennedy`, 1, ),





(`Sarah`, `Goodell`, 7, NULL),