
/*** Basic Concept : CRUD
 *    - Create : CREATE TABLE, INSERT INTO VALUES
 *    - Read : SELECT FROM WHERE
 *    - Update : UPDATE SET WHERE, ALTER TABLE ADD
 *    - Destroy(or Delete) : DELETE FROM WHERE
 ***/


// SQL Tutorial : https://www.w3schools.com/sql/default.asp
// SQL Online IDE : https://sqliteonline.com/

/* 1. CREATE TABLE
    example)

      CREATE TABLE table_name (
        column1 datatype,
        column2 datatype,
        column3 datatype,
        ....
      );

    // Assignment to Study
    1) CREATE TABLE : https://www.w3schools.com/sql/sql_create_table.asp
    2) Data Types : https://www.w3schools.com/sql/sql_datatypes.asp
    3) Primary Key : https://www.w3schools.com/sql/sql_primarykey.asp
    ----------------------------------------------------------------------
    excercise) on Online IDE

      CREATE TABLE Products (
        id int NOT NULL,
        name varchar(255),
        price money,
        PRIMARY KEY (id)
      );
*/

/* 2. INSERT INTO VALUES
    example)

      INSERT INTO table_name (column1, column2, column3, ...)
      VALUES (value1, value2, value3, ...);

      * 모든 칼럼에 빠짐없이 값을 입력한다면 굳이 칼럼을 특정할 필요는 없다.
      INSERT INTO table_name
      VALUES (value1, value2, value3, ...);

    // Assignment to Study
    1) INSERT INTO VALUES : https://www.w3schools.com/sql/sql_insert.asp
    ----------------------------------------------------------------------
    excercise) on Online IDE

      INSERT INTO Products VALUES (1, 'Pen', 1.20);

      INSERT INTO Products (id, name) VALUES (2, 'Pen');
      // OR
      INSERT INTO Products VALUES (2, 'Pen', NULL);

      // X실행되지 않는다.X - 모든 칼럼에 값을 입력하지 않을 경우에는 칼럼을 특정해야 한다.
      INSERT INTO Products VALUES (2, 'Pencil');

      // X실행되지 않는다.X - Primary Key 값은 반드시 입력되어야 한다.
      INSERT INTO Products (name, price) VALUES ('Rubber', 1.30);
*/

/* 3. SELECT FROM
    example)

      * 칼럼을 특정해서 보고 싶을 때
      SELECT column1, column2, ...
      FROM table_name;

      * 테이블 전체를 보고 싶을 때
      SELECT * FROM table_name;

    // Assignment to Study
    1) SELECT FROM : https://www.w3schools.com/sql/sql_select.asp
    ----------------------------------------------------------------------
    excercise) on Online IDE

      SELECT * FROM Products;

      SELECT id, name FROM Products;

      SELECT name, price FROM Products;
*/

/* 4. WHERE
    example)

      SELECT column1, column2, ...
      FROM table_name
      WHERE condition;

    // Assignment to Study
    1) WHERE : https://www.w3schools.com/sql/sql_where.asp
    ----------------------------------------------------------------------
    excercise) on Online IDE

      SELECT * FROM Products WHERE id=1;

      SELECT name FROM Products WHERE id=1;

      SELECT price FROM Products WHERE name='Pen';
*/

/* 5. UPDATE SET WHERE
    example)

      UPDATE table_name
      SET column1 = value1, column2 = value2, ...
      WHERE condition;

    // Assignment to Study
    1) UPDATE SET WHERE : https://www.w3schools.com/sql/sql_update.asp
    ----------------------------------------------------------------------
    excercise) on Online IDE

      // NULL인 곳을 채워 넣음
      UPDATE Products SET price=1.30 WHERE id = 2;

      // 제품 이름과 가격을 수정함
      UPDATE Products SET name='Rubber', price=1.40 WHERE id = 2;

      // 절대 이렇게 실행해서는 안된다!!! - 모든 price 값들이 바뀌어 버리게 된다.
      // 한편으로는 필요할 경우에 편리한 방법이기도 하다.
      UPDATE Products SET price=1.30;
*/

/* 6. ALTER TABLE ADD
    example)

      ALTER TABLE table_name
      ADD column_name datatype;

    // Assignment to Study
    1) ALTER TABLE ADD : https://www.w3schools.com/sql/sql_alter.asp
    ----------------------------------------------------------------------
    excercise) on Online IDE

      // stock이라는 이름의 column을 추가
      ALTER TABLE Products ADD stock int;

      // 새로 추가한 column의 NULL인 곳을 채워 넣음
      UPDATE Products Set stock=32 WHERE id=1;
      UPDATE Products Set stock=12 WHERE id=2;
*/

/* 7. DELETE FROM WHERE
    example)

      DELETE FROM table_name WHERE condition;

    // Assignment to Study
    1) DELETE FROM WHERE : https://www.w3schools.com/sql/sql_delete.asp
    ----------------------------------------------------------------------
    excercise) on Online IDE

      // 현실에서 user는 주로 제품이름을 보고 판단한다. 반면 데이터상에서는 id를 주의 깊게 살펴야 한다.
      DELETE FROM Products WHERE name='Rubber';
      // OR
      DELETE FROM Products WHERE id=2;
      // OR - 물론 이렇게도 가능하다.
      DELETE FROM Products WHERE price=1.40;
      // OR
      DELETE FROM Products WHERE stock=12;

      // 만약 삭제의 대상이 되는 record가 하나의 조건으로 특정되지 않는다면 여러 조건을 사용할 수 있다.
      DELETE FROM Products WHERE price=1.40, stock=12;

      // 함부로 실행해서는 안된다!!! - 모든 record들이 삭제된다. 즉 table에서 column들의 이름만 남기고 모든 row들을 지워버리게 된다.
      // 한편으로는 기존의 모든 데이터를 지워버리고 새로운 record들을 입력하고 싶을 때 편리한 방법이다.
      DELETE FROM Products;
*/
