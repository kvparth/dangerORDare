import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes";
import cors from "cors";
import connectDB from "./config/db";


dotenv.config();
const app = express();

app.use(cors());
app.use(express.json()); // ✅ Middleware for JSON parsing
connectDB();

app.use("/api/auth", authRoutes);

const PORT = Number(process.env.PORT || 5000);

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
}).on("error", (err) => {
  console.error("❌ Server failed to start:", err);
});

// app.listen(PORT, "0.0.0.0", () => {
//   console.log(`✅ Server running on http://0.0.0.0:${PORT}`);
// });
