const express = require('express');
const app = express();

const cors = require('cors')
const server = require('http').createServer(app)

const WebSocket = require('ws')

const wss = new WebSocket.Server({server: server})

wss.on('connection',function connection(ws){
    console.log('client connected');
    ws.send('welcome client');

    ws.on('message',function incoming(message){
        console.log("recieved %s",message)
    })
})
app.get('/',(req,res)=>{
    res.send('hello world')
})

server.listen(3000,()=>console.log('listenting on 3000'))