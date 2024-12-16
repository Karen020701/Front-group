
let messageQueue = [];


function displayMessages() {
    const messagesContainer = document.getElementById('messages');
    messagesContainer.innerHTML = ''; 

    messageQueue.forEach(message => {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.textContent = message;
        messagesContainer.appendChild(messageElement);
    });

   
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}


function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const messageText = messageInput.value.trim();

    if (messageText === '') {
        return;
    }

    //agrega el sms en orden o por cola
    messageQueue.push(messageText);

    
    displayMessages();

    
    messageInput.value = '';

    processQueue();
}


function processQueue() {
    if (messageQueue.length === 0) {
        return; 
    }
    
    const messagesContainer = document.getElementById('messages');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.textContent = messageToProcess;
    messagesContainer.appendChild(messageElement);

 
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}


document.getElementById('message-input').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});
