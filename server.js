require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
app.use(morgan("dev"));
app.use(cors());

// console.log(process.env.MARVEL_API_KEY);

app.get("/", (req, res) => {
  res.status(500).json("Welcome on my Backend !");
});

//https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=DJaAuKQ9c1SDzk0j

app.get("/characters", async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=MARVEL_API_KEY`
    );
    res.json(response.data);
  } catch (error) {
    console.log(error.message);
  }
});

app.get("/comics", async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=MARVEL_API_KEY`
    );
    res.json(response.data);
  } catch (error) {
    console.log(error.message);
  }
});

app.listen(3001, () => {
  console.log("Server has started !");
});
