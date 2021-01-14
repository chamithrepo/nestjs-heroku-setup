import express from "express";
const app = express();

app.get("/", (req, res) => res.send("Productizecrm Backend"));

app.listen(process.env.PORT || 3000, () =>
  console.log("Example app listening on port 3000!")
);
