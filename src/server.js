import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import enquiryRoutes from "./routes/enquiry.routes.js";
const app = express();

app.use(cors({
  origin: "*",
  methods: ["GET", "POST"]
}));
app.use(express.json());

app.use("/api/enquiry", enquiryRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
