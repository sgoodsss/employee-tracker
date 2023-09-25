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
(`CFO`, 750000, 7),
(`CEO`, 1000000, 7);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
(`Lily`, `Kennedy`, 1, 13),
(`Abby`, `Kelly`, 2, 13),
(`Gina`, `Bullock`, 3, 14),
(`Keith`, `Holt`, 4, 3),
(`Henry`, `Cruz`, 5, 14),
(`Michael`, `Gonzalez`, 6, 5),
(`Jenny`, `Dockendorff`, 7, 13),
(`Arthur`, `Goodell`, 8, 7),
(`Lauren`, `Harte`, 9, 5),
(`Arden`, `Beyer`, 10, 9),
(`Clement`, `Pham`, 11, 12),
(`Vicki`, `Watkins`, 12, 14),
(`Madison`, `Cain`, 13, 14),
(`Sarah`, `Goodell`, 14, NULL)