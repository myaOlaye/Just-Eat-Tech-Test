import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(cors());

app.get("/api/restaurants/:postcode", (req, res) => {
  const { postcode } = req.params;

  console.log(postcode);

  axios
    .get(
      `https://uk.api.just-eat.io/discovery/uk/restaurants/enriched/bypostcode/${postcode}`
    )
    .then(({ data: { restaurants } }) => {
      console.log(restaurants);
      res.status(200).send({ restaurants });
    })
    .catch((error) => {
      console.log("in catch");
      console.log(error);
    });
});

app.listen(3001, () => console.log("Proxy server running on port 3001"));
