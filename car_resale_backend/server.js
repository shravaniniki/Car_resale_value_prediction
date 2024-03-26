const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const multer = require('multer');
const app = express();

app.use(express.json({ limit: '10mb' }));
app.use(cors({
  origin: 'http://localhost:3000'
}));
app.use('/images',express.static('images'))

const con = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "Rshravani@2003",
    database: "registration"
})

con.connect(function(err) {
  if (err) {
      console.error('Error connecting to database');
      return;
  }
  console.log('Connected to database');
});

 
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

app.get("/userdetails", (req, res) => {
 
    con.query("SELECT * FROM signup", 
    (err, result) => {
      if (err) {
          console.error(err);
          res.status(500).send({ message: "Internal Server Error" });
      } else {
              console.log(result[0]);
              res.send(result);
         
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



const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, __dirname + "/images"); // Use __dirname to get the current directory path
    },
    filename: function(req, file, cb) {
        cb(null, `${Date.now()}_${file.originalname}`);
    }
});
const upload = multer({ storage });

app.post("/sellerpage", upload.single('image'), (req, res) => {
  
    const car_name =req.body.car_name;
    const vehicle_age = req.body.vehicle_age;
    const km_driven= req.body.km_driven;
    const seller_type = req.body.seller_type;
    const fuel_type = req.body.fuel_type;
    const transmission_type =  req.body.transmission_type;
    const mileage = req.body.mileage;
    const engine = req.body.engine;
    const max_power = req.body.max_power;
    const seats = req.body.seats;
    const prediction = req.body.prediction;
    const description = req.body.description;
     
    const image = req.file.filename;
    const query = "INSERT INTO sellerpage (car_name,vehicle_age,km_driven,seller_type,fuel_type,transmission_type,mileage,engine,max_power,seats,prediction,description,image) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

    con.query(query, [car_name, vehicle_age, km_driven, seller_type, fuel_type, transmission_type, mileage, engine, max_power, seats, prediction, description, image], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send({ message: "Internal Server Error" });
        } else {
            console.log(result);
            res.send(result);
        }
    });
});

app.get("/cardetails", (req, res) => {
 
    con.query("SELECT * FROM sellerpage", 
    (err, result) => {
      if (err) {
          console.error(err);
          res.status(500).send({ message: "Internal Server Error" });
      } else {
              console.log(result[0]);
              res.send(result);
         
            }
        }
    )
  })
app.listen(8081, () => {
    console.log("running backend server");
});
