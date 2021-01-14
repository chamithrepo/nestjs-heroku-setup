import express from "express";
const app = express();

app.get("/", (req, res) => res.json(JSON.stringify({ ok: 1 })).end());

app.listen(process.env.PORT || 5000, () =>
  console.log("Example app listening on port 3000!")
);
