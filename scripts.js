//socket at client side
import { io } from "./socket.io-client";
const socket = io('http://localhost:3000')

//takes message form server
socket.on('connect',(m)=>{
    document.write(`${socket.id}`);
})
socket.on('message',(m)=>{
    document.write(`${m}`);
})

//send message to server
function senddata(e){
socket.emit('message',e.target.value)
}