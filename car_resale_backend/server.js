const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const con = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "Rshravani@2003",
    database: "registration"
})

app.post('/signup', (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const phone= req.body.phone;
  const password = req.body.password;
  con.query("INSERT INTO signup (username, email, phone, password) VALUES (?, ?, ?, ?)", [username, email,phone,password], 
        
        (err, result) => {
            if(result){
                res.send(result);
            }else{
              console.log(err);
              console.log(username,email,phone,password);
                res.send({message: "ENTER CORRECT ASKED DETAILS!"})
            }
        }
    )
})

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  con.query("SELECT * FROM signup WHERE username = ? AND password = ?", [username, password], 
  (err, result) => {
    if (err) {
        console.error(err);
        res.status(500).send({ message: "Internal Server Error" });
    } else {
        if (result.length > 0) {
            console.log(result);
            res.send(result);
        } else {
            res.status(401).send({ message: "Wrong username or password" });
        }
          }
      }
  )
})



app.listen(8081, () => {
    console.log("running backend server");
})