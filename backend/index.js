import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import jwt from "jsonwebtoken";
import mysql from "mysql";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "signup",
});

app.get('/api/products', (req, res) => {
  const sql = 'SELECT * FROM products';
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

const verifyUser = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ Message: "Authentication Error" });
  } else {
    jwt.verify(token, "our-jsontoken-secret-key", (err, decoded) => {
      if (err) {
        return res.status(401).json({ Message: "Authentication Error" });
      } else {
        req.name = decoded.name;
        next();
      }
    });
  }
};

app.get("/", verifyUser, (req, res) => {
  return res.json({ Status: "Success", name: req.name });
});

app.post("/login", (req, res) => {
  const sql = "SELECT * FROM login WHERE email = ? AND password = ?";
  db.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) {
      return res.status(500).json({ Message: "Server error" });
    }
    if (data.length > 0) {
      const name = data[0].name;
      const token = jwt.sign({ name }, "our-jsontoken-secret-key", {
        expiresIn: "1d",
      });
      res.cookie("token", token, { httpOnly: true });
      return res.json({ Status: "Success" });
    } else {
      return res.status(404).json({ Message: "User not found" });
    }
  });
});

app.post("/signup", (req, res) => {
  console.log(req.body);
  const sql = "INSERT INTO login(`name`, `email`,`password`) Values (?)";
  const values = [req.body.name, req.body.email, req.body.password];

  db.query(sql, [values], (err, data) => {
    if (err) {
      return res.json("Error");
    } else {
      return res.json(data);
    }
  });
});

app.get("/logout", (req, res) => {
  res.clearCookie("token");
  return res.json({ Status: "Success" });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
