const express = require('express')
const app = express()
const port = 9000
const mongoose = require('mongoose');
require("dotenv").config();
const userRoutes = require('./routes/user');

//middleware
app.use(express.json());
app.use('/api', userRoutes);

//routes
app.get('/', (req, res) => {
  res.send('Hello World!')
});

//Mongo conection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("connected to Mongo Atlas"))
    .catch((error) => console.log(error));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});