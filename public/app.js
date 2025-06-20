// Connect to the server
const socket = io();

// Get DOM elements
const chatArea = document.getElementById('chatArea');
const chatInput = document.getElementById('chatInput');
const sendButton = document.getElementById('sendButton');

// Send message to server
sendButton.addEventListener('click', () => {
  const message = chatInput.value.trim();
  if (message !== '') {
    socket.emit('chat message', message);
    chatInput.value = '';
  }
});

// Optional: send on Enter key
chatInput.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    sendButton.click();
  }
});

// Receive message from server
socket.on('chat message', (msg) => {
  const messageElement = document.createElement('div');
  messageElement.textContent = msg;
  chatArea.appendChild(messageElement);
  chatArea.scrollTop = chatArea.scrollHeight;
});

            