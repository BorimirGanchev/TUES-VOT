import express from "express"
import mysql from "mysql"
import cors from "cors"

const app = express();
const db = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "Password",
    database: "test"
})

app.use(express.json());
app.use(cors());

app.get("/", (req, res)=>{
    res.json("hello world")
})

app.get("/books", (req,res)=>{
    const q = "SELECT * FROM books"
    db.query(q, (err, data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post("/books", (req, res)=>{
    const q = "INSERT INTO books(`tittle`,`desc`, `price` ,`cover`) VALUES (?)"
    const values = [
        req.body.tittle,
        req.body.desc,
        req.body.price,
        req.body.cover,
    ];  

    db.query(q, [values], (err, data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.listen(8800, ()=>{
    console.log("Connected to backend!1")
})

// 
// app.use(express.json());

// const db = mysql.createConnection({
//     host: '172.17.0.2', // Replace with the IP address of your MySQL container
//     user: 'root',
//     password: 'rootpassword',
//     database: 'Usermanagement',
//     multipleStatements: true
// });

// db.connect((err) => {
//     if (err) {
//         console.error('Error connecting to the database:', err);
//         return;
//     }
//     console.log('Connected to the database');
// });

// app.get('/api/users', (req, res) => {
//     const sqlSelect = "SELECT * FROM users";
//     db.query(sqlSelect, (err, result) => {
//         if (err) return res.json({ message: err });
//         return res.json(result);
//     });
// });

// app.listen(port, () => {
//     console.log(`Server running on http://localhost:${port}`);
// });