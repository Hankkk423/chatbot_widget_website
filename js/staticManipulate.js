console.log("staticManipulate.js working");

// Get references to HTML elements
const chatButton = document.getElementById("chat-button");
const userInput = document.getElementById("user-input");
const chatLog = document.getElementById("chat-log");
const SERVER_URL = 'https://hankyen.pythonanywhere.com/to_model_GPT';

const sendMessage = async () => {
    const message = userInput.value.trim();
    if (message !== '') {
        appendMessage_user(message);
        userInput.value = '';


        const response = await fetch(SERVER_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message })
        });
  
        const data = await response.json();
        const answer = data.res;
        
        console.log('input: ', message,
                '\ntag:', data.tag,
                '\nres: ', data.res);

        // const answer = "test answer";


        appendMessage_bot(answer);
    }
};
    
// Append "user-message" to the "chat-log"
const appendMessage_user = (message) => {
    // Create user-message
    const userMessage = document.createElement("div");
    userMessage.classList.add('user-message');

    // Create user-bubble
    const userBubble = document.createElement("div");
    userBubble.classList.add("user-bubble");
    userBubble.textContent = message;


    userMessage.appendChild(userBubble);
    chatLog.appendChild(userMessage);

    // Scroll to the bottom of the chat log
    chatLog.scrollTop = chatLog.scrollHeight;
}

// Append a message to the chat log
const appendMessage_bot = (message) => {
    // Create bot-message
    const botMessage = document.createElement("div");
    botMessage.classList.add('bot-message');

    // Create bot-avatar
    const botAvatar = document.createElement("div");
    botAvatar.classList.add("bot-avatar");

    // Create bot-bubble
    const botBubble = document.createElement("div");
    botBubble.classList.add("bot-bubble");
    botBubble.textContent = message;
    
    
    botMessage.appendChild(botAvatar);
    botMessage.appendChild(botBubble);
    chatLog.appendChild(botMessage);

    // Scroll to the bottom of the chat log
    chatLog.scrollTop = chatLog.scrollHeight;
}

// Event listener for user input
userInput.addEventListener("keydown", (event) => {
    if (event.keyCode === 13 || event.key === 'Enter') {
        console.log("event hit");
        sendMessage();
    }
    else{
        //appendMessage("something wrong", "user-message");
    }
});

chatButton.addEventListener("click", () => {
    const chatContainer = document.getElementById("chat-container");
    if (chatContainer.style.display === "none") {
        chatContainer.style.display = "block";
    } 
    else {
        chatContainer.style.display = "none";
    }
});

appendMessage_bot("Hello! How can I help you?", 'bot-message');