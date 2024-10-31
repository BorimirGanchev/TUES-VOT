CREATE DATABASE UserManagement;
Use UserManagement;

CREATE TABLE User (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    status VARCHAR(100) NOT NULL
);

INSERT INTO User (name, email, status) 
VALUES ("Bori", "bori@gmail.com", "active");