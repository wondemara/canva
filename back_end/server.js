const http = require('https');
const express = require('express');
const app = express();
const cors = require('cors');

const server = http.createServer(app);
require('dotenv').config();
app.use(cors());

app.use(express.json());

const PORT = process.env.PORT;



server.listen(PORT,()=>{
    console.log(`Server Running on https://localhost:${PORT}`);
});