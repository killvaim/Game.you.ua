import { dirname } from "path";
import { fileURLToPath } from "url";

import express from "express";
import { create } from "express-handlebars";

import routes from "./routes.js";


// Dirname const
const __dirname = dirname(fileURLToPath(import.meta.url));

// Create a new express application instance
const app = express();

// Set view engine to handlebars
app.engine("hbs", create({
  defaultLayout: "main",
  extname: ".hbs",
}).engine);

app.set("view engine", "hbs");
app.set("views", `${__dirname}/views`);

// Configure folder for static files & exclude .scss from it
app.use([/\.scss$/, "/"], express.static(`${__dirname}/public`));

// Configure routes
routes(app);

// Start server
app.listen(process.env.PORT || 3000, () => {
  console.log("Server has started.")
});

