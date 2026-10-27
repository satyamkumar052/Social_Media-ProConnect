import express from 'express';
const app = express();


import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import UserRouter from "./routes/user.routes.js";
import PostRouter from "./routes/posts.routes.js";
dotenv.config();


// middleware
app.use(cors());
app.use(express.json());
app.use(express.static("uploads"));


const start = async () => {
    try {
        await mongoose.connect(process.env.MONGOURL);
        console.log('Connected to MongoDB!');
    } catch (err) {
        console.error('MongoDB connection error:', err);
    }
};

app.use("/", UserRouter);
app.use("/", PostRouter);

const PORT = process.env.PORT || 8080;

app.get("/health", (_, res) => {
    const isDbReady = mongoose.connection.readyState === 1;
    if (!isDbReady) {
        return res.status(503).json({ ok: false, error: "Database connecting..." });
    }
    res.status(200).json({ ok: true, service: "backend" });
});

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
    start();
});

