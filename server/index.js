const express = require('express')
const cors = require('cors');
const path = require('path')
const countryRoutes = require("./Routes/countryRoutes")
const dotenv = require('dotenv').config();
const port = process.env.PORT || 8000;

const app = express()
app.use(cors());

app.use(express.json());

app.use("/countries", countryRoutes);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
  
    app.get('*', (req, res) =>
      res.sendFile(
        path.resolve(__dirname, '../', 'client', 'build', 'index.html')
      )
    );
  } else {
    app.get('/', (req, res) => res.send('Please set to production'));
  }
  
// Start Server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})

module.exports = app;