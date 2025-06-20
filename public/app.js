
            var chatArea = document.querySelector('.chatArea');
            var chatInput = document.getElementById('chatInput');
            var sendButton = document.getElementById('sendButton');
            sendButton.addEventListener('click', function() {
                var message = chatInput.value;
                if (message.trim() !== '') {
                    var messageElement = document.createElement('div');
                    messageElement.textContent = message;
                    chatArea.appendChild(messageElement);
                    chatInput.value = ''; // Clear the input field
                }
            });
            chatInput.addEventListener('keypress', function(event) {
                if (event.key === 'Enter') {
                    sendButton.click(); // Trigger the send button click
                }
            });
            // Simulate receiving messages from the server
            function receiveMessage(message) {
                var messageElement = document.createElement('div');
                messageElement.textContent = message;
                chatArea.appendChild(messageElement);
            }
            