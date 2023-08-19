const mysql = require('mysql');
const fs = require('fs');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'your_db_user',
  password: 'your_db_password',
  database: 'signup',
});

db.connect();

const productsData = JSON.parse(fs.readFileSync('db.json'));

productsData.forEach((product) => {
  const { id, title, description, img, category, brand, price, rating } = product;
  const sql = 'INSERT INTO products (id, title, description, img, category, brand, price, rating) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
  db.query(sql, [id, title, description, img, category, brand, price, rating], (err) => {
    if (err) throw err;
    console.log(`Inserted product with ID ${id}`);
  });
});

db.end();
