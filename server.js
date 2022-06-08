const express = require("express");
const path = require("path");
const port = process.env.PORT || 5000;

const app = express();

app.use(
  "/static",
  express.static(path.resolve(__dirname + "/frontend/static"))
);

app.use(
  "/images",
  express.static(path.resolve(__dirname + "/frontend/static/images"))
);

app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/frontend/index.html"));
});

app.listen(port, () =>
  console.log(`Сервер работает... Порт: http://localhost:${port}`)
);
