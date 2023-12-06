const express = require('express')
const cors = require("cors");
const app = express()
const port = 5000
const mongoDB = require("./db")
app.use(cors(
  {
    origin: "https://foodx-ultimate-priyam-chakrabortys-projects.vercel.app/"
  }
));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://foodx-ultimate-priyam-chakrabortys-projects.vercel.app:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With,Content-Type, Accept");
  next();
})
mongoDB();
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(express.json());
app.use("/api", require("./routes/CreateUser"));
app.use("/api", require("./routes/DisplayData"));
app.use("/api", require("./routes/OrderData"));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})