-- CREATE TABLE WORKERS
CREATE TABLE workers (
    id SERIAL NOT NULL PRIMARY KEY,
    fullname VARCHAR(32),
    email VARCHAR(32),
    worker_password VARCHAR(8),
    worker_role BOOLEAN DEFAULT true,
    is_active BOOLEAN DEFAULT true
);

-- CREATE TABLE CATEGORY
CREATE TABLE category (
    id SERIAL NOT NULL PRIMARY KEY,
    category_name VARCHAR(32)
);

-- CREATE TABLE PRODUCT
CREATE TABLE product (
    id SERIAL NOT NULL PRIMARY KEY,
    product_name VARCHAR(32),
    kg FLOAT,
    price FLOAT,
    category_id INTEGER,
    is_sell BOOLEAN DEFAULT true,
    is_active BOOLEAN DEFAULT true,
    FOREIGN KEY(category_id) REFERENCES category(id)
);

-- CREATE TABLE HISTORY
CREATE TABLE history (
    id SERIAL NOT NULL,
    worker_id INTEGER,
    product_id INTEGER,
    is_sell BOOLEAN DEFAULT true,
    kg FLOAT,
    price FLOAT,
    created_att TIMESTAMP NOT NULL DEFAULT current_timestamp,
    FOREIGN KEY(worker_id) REFERENCES workers(id),
    FOREIGN KEY(product_id) REFERENCES product(id)
);
