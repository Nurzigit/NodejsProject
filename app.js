import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "JWT Token working!",
  });
});

// app.use("/api/auth", authRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is started: http://localhost:${PORT}`);
});
