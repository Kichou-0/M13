require("dotenv").config();

const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/api/token", (req, res) => {
    res.json({
        success: true
    });
});

app.listen(3000, () => {
    console.log("Serveur lancé : http://localhost:3000");
});