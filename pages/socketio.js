import { useEffect } from 'react';
import { io } from 'socket.io-client';
 
 const socket = io("http://localhost:3000/api/socketio", { transports: ["websocket"]});

 const Socket = () => {
  useEffect(() => {
    fetch('/api/socketio').finally(() => {
      socket = io()

      socket.on('connect', () => {
        console.log('connect')
        socket.emit('hello')
      })

      socket.on('hello', data => {
        console.log('data', data)
      })

      socket.on('a user connected', () => {
        console.log('a user connected')
      })

      socket.on('disconnect', () => {
        console.log('disconnect')
      })
    })
  }, [])


  const Handler = ()=>{
    socket.emit('hello')
    socket.on('hello', data => {
      console.log('data', data)
    })
  }

  return (
    <>
      <h1 style={{ textAlign: "center"}}>Socket.io</h1>
      <button onClick={Handler}>Data</button>
    </>
  )
}


export default Socket;