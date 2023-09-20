console.log("tempManipulate.js working");

// Get references to HTML elements
const body = document.body;

// Create chat-widget
const chatWidget = document.createElement("div");
chatWidget.classList.add("chat-widget");

// Create chat-container
const chatContainer = document.createElement("div");
chatContainer.classList.add("chat-container");
chatContainer.id = "chat-container";

// Create chat-header
const chatHeader = document.createElement("div");
chatHeader.classList.add("chat-header");

// Create chat-header-design
const chatHeaderDesign = document.createElement("div");
chatHeaderDesign.classList.add("chat-header-design")

// Create chat-header-avatar
const chatHeaderAvatar = document.createElement("div");
chatHeaderAvatar.classList.add("chat-header-avatar")

// Create header-avatar-image
const headerAvatarImage = document.createElement("div");
headerAvatarImage.classList.add("header-avatar-image");

// Create header-avatar-status
const headerAvatarStatus = document.createElement("div");
headerAvatarStatus.classList.add("header-avatar-status");

// Appends to "chat-header-avatar", and to "chat-header-design"
chatHeaderAvatar.appendChild(headerAvatarImage);
chatHeaderAvatar.appendChild(headerAvatarStatus);
chatHeaderDesign.appendChild(chatHeaderAvatar);

// Create chat-header-company
const chatHeaderCompany = document.createElement('div');
chatHeaderCompany.classList.add("chat-header-company");

// Create header-company-name
const headerCompanyName = document.createElement('div');
headerCompanyName.classList.add("header-company-name");
headerCompanyName.textContent = "Emily";

// Create header-company-status
const headerCompanyStatus = document.createElement('div');
headerCompanyStatus.classList.add("header-company-status");
headerCompanyStatus.textContent = 'Online';

// Appends to "chat-header-company", and "chat-header-design"
chatHeaderCompany.appendChild(headerCompanyName);
chatHeaderCompany.appendChild(headerCompanyStatus);
chatHeaderDesign.appendChild(chatHeaderCompany);

// Appends "chat-header-design" to "chat-header"
chatHeader.appendChild(chatHeaderDesign);

// ------------------------------------------------------ //

// Create chat-log (id: "chat-log")
const chatLog = document.createElement("div");
chatLog.classList.add("chat-log");
chatLog.id = "chat-log";

// Create user-input (id: "user-input")
const userInput = document.createElement("input");
userInput.type = "text";
userInput.classList.add("chat-user-input");
userInput.id = "chat-user-input";
userInput.placeholder = "Type your message...";

// Create chat-button-container
const chatButtonContainer = document.createElement("div");
chatButtonContainer.classList.add("chat-button-container")

// Create chat-button (id: "chat-button")
const chatButton = document.createElement("button");
chatButton.classList.add("chat-button")
chatButton.id = "chat-button";

// Append elements to the document
chatContainer.appendChild(chatHeader);
chatContainer.appendChild(chatLog);
chatContainer.appendChild(userInput);
chatButtonContainer.appendChild(chatButton)
chatWidget.appendChild(chatContainer);
chatWidget.appendChild(chatButtonContainer);
// Append complete "chat-widget" to "body"
body.appendChild(chatWidget);

// -------------------------------------------------------------------------------------------- //
// // Get references to HTML elements
// const chatButton = document.getElementById("chat-button");
// const userInput = document.getElementById("user-input");
// const chatLog = document.getElementById("chat-log");
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

// Send message to server side API and Get response back
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

// Append "bot-message" to the "chat-log"
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

// Event listener for "userInput (chat-user-input)"
userInput.addEventListener("keydown", (event) => {
    if (event.keyCode === 13 || event.key === 'Enter') {
        console.log("event hit");
        sendMessage();
    }
    else{
        //appendMessage("something wrong", "user-message");
    }
});

// Event listener for "chatButton (chat-button)"
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