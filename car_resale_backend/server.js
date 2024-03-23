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

app.post("/sellerpage", (req, res) => {
    const { user } = req.body;
    if (!user || !user.isAuthenticated) {
      return res.status(401).send({ message: "Unauthorized" });
    }
    const car_name = req.body.car_name
    const vehicle_age = req.body.vehicle_age
    const km_driven = req.body.km_driven
    const seller_type = req.body.seller_type
    const fuel_type = req.body.fuel_type
    const transmission_type = req.body.transmission_type
    const mileage = req.body.mileage
    const engine = req.body.engine
    const max_power = req.body.max_power
    const seats = req.body.seats
    const prediction = req.body.prediction;
    const description = req.body.description;
    con.query("INSERT INTO sellerpage (car_name,vehicle_age,km_driven,seller_type,fuel_type,transmission_type,mileage,engine,max_power,seats,prediction,description) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [car_name,vehicle_age,km_driven,seller_type,fuel_type,transmission_type,mileage,engine,max_power,seats,prediction,description], 
    (err, result) => {
      if (err) {
          console.error(err);
          res.status(500).send({ message: "Internal Server Error" });
      } else {
          
              console.log(result);
              res.send(result);
          }
        }
    )
  })



app.listen(8081, () => {
    console.log("running backend server");
})