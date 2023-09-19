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
CREATE TABLE departments {

};

-- Create roles table
-- id int primary key
-- title: varchar(30)
-- salary: decimal
-- department_id: int (foreign key)
CREATE TABLE roles {

};

-- Create employees table
-- id: int primary key
-- first_name: varchar(30)
-- last_name: varchar(30)
-- role_id: int (foreign key)
-- manager_id: int (reference to another employee)
CREATE TABLE employees {

};