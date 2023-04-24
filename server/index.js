const express = require('express')
const cors = require('cors');
const countryRoutes = require("./Routes/countryRoutes")
const dotenv = require('dotenv').config();
const port = process.env.PORT || 8000;

const app = express()
app.use(cors());

app.use(express.json());

app.use("/countries", countryRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
  });
  
// Start Server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
