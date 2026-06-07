import express from "express"
const app = express();


import Contact from "./models/contacts.models.js";
import ContactRoutes from "./routes/contacts.routes.js";
import { connectDB } from "./config/database.js";

//Database connection
connectDB();

//Middleware
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

//Routes
app.use("/", ContactRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
