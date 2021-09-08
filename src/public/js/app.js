const host = window.location.host;


const socket = new WebSocket(`ws://${host}`);


socket.addEventListener("open", () =>{
    console.log("Connected to Server");
});

socket.addEventListener("message", (message) =>{
    console.log("Just got this:", message.data, "from server");
});

socket.addEventListener("close", () =>{
    console.log("Disconnected server");
});

setTimeout(() => {
    socket.send("hello from browser");
}, 10000);