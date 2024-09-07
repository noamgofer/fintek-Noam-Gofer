const express = require('express')
const cors = require('cors') 
const fetch = require("node-fetch");
const app = express()


app.use(express.json());
app.use(cors());

const URL = "https://api.weatherapi.com/v1/forecast.json?key=7ee81b957e104a36bf705918240509&q=" //need to add city name

app.post('/weather' , async (req,res) => {
    const city = req.body.city
    if(!city) {
        return res.status(400).send({error})
    }
    try{
      const response = await fetch(`${URL}${city}`)
      const data = await response.json()
      res.json(data)
      console.log(data);
        
    } catch (error) {
        console.log("Error fetching weather data" , error);
        res.send({error: "Failed to fetch weather data"})
        
    }
})

app.listen(4000 , () => {console.log("Server works on port 4000");
})