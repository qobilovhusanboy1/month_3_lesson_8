-- CREATE DATABASE
CREATE DATABASE n9;

-- CREATE TABLE
CREATE TABLE super_admin(
    id SERIAL NOT NULL,
    admin_name VARCHAR(32),
    admin_password VARCHAR(8),
    created_att TIMESTAMP NOT NULL DEFAULT current_timestamp
);

-- INSERT SUPER ADMIN
INSERT INTO super_admin(admin_name, admin_password)
VALUES ('Xasan', '!@#$%^&*');