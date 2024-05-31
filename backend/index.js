import express, { urlencoded } from "express";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 8000;

connectDB();

const app = express();

app.use(express.json());
app.use(cors());
app.use(urlencoded({ extended: true }));

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use(errorHandler);
app.use(notFound);

app.listen(PORT, () => {
  console.log("Listening on port 8000");
});
