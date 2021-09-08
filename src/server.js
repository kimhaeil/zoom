import http from "http"
import WebSocket from 'ws';
import express from "express"
import { Console } from 'console';

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => res.render("home"));

const handleListen = () => console.log(`listening on http://localhost:3000`);

const server = http.createServer(app);

const wss = new WebSocket.Server({server});


const sockets = [];

wss.on("connection", (socket) => {
    sockets.push(socket);
    socket.on("close", ()=>{
        console.log("Socket Closed");
    })
    socket.on("message", (message) =>{
        sockets.forEach(aSocket => aSocket.send(message));   
    });

    socket.send("hello!!");
});

server.listen(3000, handleListen);

// app.listen(3000);