import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { config } from "dotenv";
import cors from "cors";

const uid = () => Math.random().toString(36).substring(2, 10);

let tasks = {
  pending: {
    title: "pending",
    items: [
      {
        id: uid(),
        title: "Send the Figma file to Dima",
        comments: [],
      },
    ],
  },
  ongoing: {
    title: "ongoing",
    items: [
      {
        id: uid(),
        title: "Review GitHub issues",
        comments: [
          {
            name: "David",
            text: "Ensure you review before merging",
            id: uid(),
          },
        ],
      },
    ],
  },
  completed: {
    title: "completed",
    items: [
      {
        id: uid(),
        title: "Create technical contents",
        comments: [
          {
            name: "Dima",
            text: "Make sure you check the requirements",
            id: uid(),
          },
        ],
      },
    ],
  },
};

config();
const app = express();
const PORT = process.env.PORT || 5000;
const http = createServer(app);
const io = new Server(http, {
  cors: {
    origin: "http://localhost:5173",
  },
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

io.on("connection", (socket) => {
  console.log(`${socket.id} user just connected!`);
  socket.on("disconnect", () => {
    socket.disconnect();
    console.log("A user disconnected");
  });
});

app.get("/api", (req, res) => {
  res.json(tasks);
});

http.listen(PORT, () => console.log(`Server listening on ${PORT}`));
