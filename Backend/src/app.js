import express from "express";
import { createServer } from "node:http"
import { Server } from "socket.io";
import mongoose from "mongoose";
import cors from "cors";
import { connectToSocket } from "./controllers/socketManager.js";
import userRoutes from "./routes/users.route.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port", (process.env.PORT || 8000));
app.use(express.json({limit:"40kb"}));
app.use(express.urlencoded({extended:true , limit:"40kb"}));

app.use("/api/v1/users", userRoutes);


app.get("/", (req, res)=> {
    return res.json({"Hello": "World"});
});

const start = async () => {
    const connectionDB = await mongoose.connect(process.env.MONGODB_LINK);
    console.log(`MONGO Connected to the mongoDB server: ${connectionDB.connection.host}`);
    server.listen(app.get("port"), ()=>{
        console.log("App is listening on port 8000");
    });
};

start();