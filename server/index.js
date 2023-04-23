const express = require('express')
const countryRoutes = require("./Routes/countryRoutes")
const dotenv = require('dotenv').config();
const port = process.env.PORT || 8000;

const app = express()

app.use(express.json());

app.use("/countries", countryRoutes);

// Start Server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})