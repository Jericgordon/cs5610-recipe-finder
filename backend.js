import express from "express";
import recipesRouter from "./routes/recipes.js";
import authRoutes from "./routes/users.js";

console.log("Initalizing backend server...");
const PORT = process.env.PORT || 3000;
const app = express();

// Parse JSON and urlencoded request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use(express.static("frontend"));

app.use("/assets", express.static("assets")); //by convention this folder is called 'public'

app.use("/api/", recipesRouter);

app.use("/api/auth", authRoutes); //it's really helpful to name your route files after the route. If you're going to have an "api/" route in HTML, it's probably best to name that route file api.js for ease of finding

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
