import express from "express";
import dotenv from "dotenv";
import itemRoutes from "./routes/itemRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();

const port = process.env.PORT || 8000;
const app = express();

app.use("/api", itemRoutes);
app.get("/api/:id", function (req, res) {
  res.send("Product id is: " + req.params.id);
});

app.use(notFound);
app.use(errorHandler);

app.get("/", (req, res) => res.send("Server is ready"));
app.listen(port, () => console.log(`Server started on port ${port}`));
