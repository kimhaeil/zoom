const messageList = document.querySelector("ul");
const messageForm = document.querySelector("form"); 

const host = window.location.host;



const socket = new WebSocket(`ws://${host}`);


socket.addEventListener("open", () =>{
    console.log("Connected to Server");
});

socket.addEventListener("message", (message) =>{
   const li = document.createElement("li");
   
   const reaeder = new FileReader();
   const msg ;
   reaeder.addEventListener('loadend', ()=>{
    msg = reader.result;
   });
   reaeder.readAsArrayBuffer(message.data);
   li.innerText = text;
   messageList.append(li);
});

socket.addEventListener("close", () =>{
    console.log("Disconnected server");
});

function handleSubmit(event) {
    event.preventDefault();
    const input = messageForm.querySelector("input");
    socket.send(input.value);
}

messageForm.addEventListener("submit", handleSubmit);