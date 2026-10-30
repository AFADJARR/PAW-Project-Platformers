const express = require("express");
const path = require("path");
const logger = require("./middlewares/logger");
const webRoutes = require("./routes/web");
const apiRoutes = require("./routes/api");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(logger);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/", webRoutes); 
app.use("/api", apiRoutes); 

app.listen(PORT, () => {
  console.log(`[Server] Cbot Plat running at http://localhost:${PORT}`);
});
