/***
 *  Relationship
 ***/


/* Create a SQL Schema
    excercise) on Online IDE

      CREATE TABLE products (
        id int not null primary key,
        name varchar(255),
        price money,
        stock int
      );

      INSERT INTO products VALUES (1, 'pen', 1.2, 32);
      INSERT INTO products VALUES (2, 'pencil', 0.8, 12);

*/

/* Create another SQL Schema
    excercise) on Online IDE

      CREATE TABLE customers (
        id int not null primary key,
        firstName varchar(255),
        lastName varchar(255),
        age int
      );

      INSERT INTO customers VALUES (1, 'Hansen', 'Ola', 30);
      INSERT INTO customers VALUES (2, 'Svendson', 'Tove', 23);
      INSERT INTO customers VALUES (3, 'Pettersen', 'Kari', 20);

*/

/* Create the other SQL Schema
    excercise) on Online IDE

      CREATE TABLE orders (
        id int not null,
        order_number int,
        customer_id int,
        product_id int,
        PRIMARY KEY (id),
        FOREIGN KEY (customer_id) REFERENCES customers (id),
        FOREIGN KEY (product_id) REFERENCES products (id)
      );

      INSERT INTO orders VALUES (1, 77895, 3, 1);
      INSERT INTO orders VALUES (2, 44678, 3, 2);
      INSERT INTO orders VALUES (3, 22456, 2, 1);
      INSERT INTO orders VALUES (4, 24562, 1, 2);

  // Assignment to Study
  -> FOREIGN KEY REFERENCES : https://www.w3schools.com/sql/sql_foreignkey.asp
  -----------------------------------------------------------------------------

*/

/* SELECT FROM INNER JOIN ON
    example)

      SELECT column_name(s)
      FROM table1
      INNER JOIN table2
      ON table1.column_name = table2.column_name;

    // Assignment to Study
    -> SELECT FROM INNER JOIN ON : https://www.w3schools.com/sql/sql_join_inner.asp
    --------------------------------------------------------------------------------

    excercise) on Online IDE

      SELECT orders.order_number, customers.firstName, customers.lastName, customers.age
      FROM orders INNER JOIN customers
      ON orders.customer_id=customers.id;

      SELECT orders.order_number, products.name, products.price, products.stock
      FROM orders INNER JOIN products
      ON orders.product_id=products.id;

*/
