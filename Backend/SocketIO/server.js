import { Server } from "socket.io";
import http from 'http';
import express from "express";


const app = express();

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "https://chatapp-8mg1.onrender.com",
        methods: ["GET", "POST"],
    },
});

export const getReceiverSocketId = (receiverId) =>
{
    return users[receiverId];
};



const users ={}
// server side
io.on("connection", (socket) => {
    console.log("a user connected", socket.id);
    const userId = socket.handshake.query.userId
    if (userId)
    {
        users[userId] = socket.id
        console.log("hello",users)
    }
    io.emit("getOnlineUsers", Object.keys(users));
// client side
    socket.on("disconnect", () =>
    {
        console.log("a user disconnected", socket.id);
        delete users[userId];
        io.emit("getOnlineUsers", Object.keys(users))
    })
})

export {app,io,server}
