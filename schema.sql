/*

To run this file, we do the following in our Terminal:

1. Go to the directory of this sql file.

2. Get into our mysql console.

3. Run "source schema.sql"

*/

-- Drops the task_saver_db if it already exists --
DROP DATABASE IF EXISTS moviePlannerDB;

-- Create the database task_saver_db and specified it for use.
CREATE DATABASE moviePlannerDB;

USE moviePlannerDB;

-- Create the table tasks.
CREATE TABLE movies_db (
  id INT NOT NULL AUTO_INCREMENT,
  movie VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO movies_db (movie) VALUES ('Weekend at Bernies');
INSERT INTO movies_db (movie) VALUES ('Star Wars');
INSERT INTO movies_db (movie) VALUES ('Call Shannon back.');
