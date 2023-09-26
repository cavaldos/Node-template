const express = require("express");
const app = express();
const morgan = require("morgan");
app.use(morgan("tiny"));

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
