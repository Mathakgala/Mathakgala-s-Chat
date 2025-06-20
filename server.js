// server.js
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const PORT = process.env.PORT || 3000;
// Middleware to parse JSON bodies
app.use(express.json());


// Serve static files from "public" folder
app.use(express.static('public'));

// Handle client connections
io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  socket.on('chat message', (msg) => {
    io.emit('chat message', msg); // Broadcast to all users
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

// Start server
http.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
