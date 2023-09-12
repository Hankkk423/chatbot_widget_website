console.log("staticManipulate.js working");

// Get references to HTML elements
const chatButton = document.getElementById("chat-button");
const userInput = document.getElementById("user-input");
const chatLog = document.getElementById("chat-log");
const SERVER_URL = 'https://hankyen.pythonanywhere.com/to_model_GPT';



// Function to display "the bot is replying" message
const showBotIsReplying = () => {
    const botIsReplyingMessage = document.createElement("div");
    botIsReplyingMessage.classList.add('bot-message', 'is-replying'); // Add a custom class
    botIsReplyingMessage.textContent = "AI Agent is replying...";

    chatLog.appendChild(botIsReplyingMessage);
    chatLog.scrollTop = chatLog.scrollHeight;
}

// Function to remove "the bot is replying" message
const removeBotIsReplying = () => {
    const botIsReplyingMessage = chatLog.querySelector('.is-replying'); // Use the custom class
    if (botIsReplyingMessage) {
        console.log("remove Hit!");
        chatLog.removeChild(botIsReplyingMessage);
    }
}



const sendMessage = async () => {
    const message = userInput.value.trim();
    if (message !== '') {
        appendMessage_user(message);
        userInput.value = '';

        showBotIsReplying(); // Display "the bot is replying" message

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

        removeBotIsReplying(); // Remove "the bot is replying" message

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

appendMessage_bot("Hello and welcome to 24/7 Care At Home! We're here to provide you with the support and information you need for top-notch home health and hospice care. How can we assist you today? Are you interested in learning more about our services, scheduling a consultation, or have any questions about our compassionate care? Please feel free to ask, and we'll be happy to help!", 'bot-message');