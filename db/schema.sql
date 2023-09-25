-- Create company database to store data
DROP DATABASE IF EXISTS company;
CREATE DATABASE company;
USE company;

DROP TABLE IF EXISTS employees;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS departments;

-- Create departments table
-- id
-- name: varchar(30)
CREATE TABLE departments (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY(id)
);

-- Create roles table
-- id int primary key
-- title: varchar(30)
-- salary: decimal
-- department_id: int (foreign key)
CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary INT NOT NULL,
    department_id INT,
    PRIMARY KEY(id),
    FOREIGN KEY(department_id)
    REFERENCES departments(id)
);

-- Create employees table
-- id: int primary key
-- first_name: varchar(30)
-- last_name: varchar(30)
-- role_id: int (foreign key)
-- manager_id: int (reference to another employee)
CREATE TABLE employees (
    id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY(id),
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    FOREIGN KEY (role_id) REFERENCES roles(id),
    manager_id INT, 
    FOREIGN KEY (manager_id) REFERENCES employees(id)
);