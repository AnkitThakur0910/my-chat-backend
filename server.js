const io = require('socket.io')(3000,{
    cors : {
        origin : 'http://localhost:5500/'
    }
});


//connected to server
io.on('connection',(socket)=>{

    //takes message from client at message event 
    socket.on('message',(mess)=>{
        io.emit(mess);
        //send mess to client
        console.log(mess)
    })
})

