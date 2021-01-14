import express from "express";
import dotenv from "dotenv";
dotenv.config();

import logger from "./logger";

const app = express();

app.get("/", (req, res) => res.send("Productizecrm Backend"));

// app.listen(process.env.PORT || 3000, () =>
//   console.log("Example app listening on port 3000!")
// );

/**
 * Setup listener port
 */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  logger.info(`Running Node.js version ${process.version}`);
  logger.info(`App environment: ${process.env.NODE_ENV}`);
  logger.info(`App is running on port ${PORT}`);
});

export default app;
