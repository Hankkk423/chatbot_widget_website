console.log("dynamicManipulate.js working");

// Get references to HTML elements
const body = document.body;
// Style
body.style.fontFamily = "Arial, sans-serif";
body.style.margin = "0";
body.style.padding = "0";
body.style.backgroundColor = "#f4f4f4";


// Create chat-widget
const chatWidget = document.createElement("div");
chatWidget.classList.add("chat-widget");
// Style
chatWidget.style.position = "fixed";
chatWidget.style.bottom = "30px";
chatWidget.style.right = "20px";


// Create chat-container
const chatContainer = document.createElement("div");
chatContainer.classList.add("chat-container");
chatContainer.id = "chat-container";
// Style (chatContainer.style.)
chatContainer.style.position = "fixed";
chatContainer.style.bottom = "80px"; /* Adjusted bottom position */
chatContainer.style.right = "20px";
chatContainer.style.width = "250px";
chatContainer.style.backgroundColor = "#fff";
chatContainer.style.borderRadius = "10px";
chatContainer.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.2)";
chatContainer.style.display = "none"; /* Initially hide the chat container */
//chatContainer.style.boxSizing = "border-box";


// -------------------------------- //

// Create chat-header
const chatHeader = document.createElement("div");
chatHeader.classList.add("chat-header");
// Style
chatHeader.style.padding = "10px";
chatHeader.style.backgroundColor = "#1e75c7";
chatHeader.style.color = "white";
chatHeader.style.borderTopLeftRadius = "10px";
chatHeader.style.borderTopRightRadius = "10px";
chatHeader.style.fontWeight = "bold";
chatHeader.style.fontSize = "18px";


// Create chat-header-design
const chatHeaderDesign = document.createElement("div");
chatHeaderDesign.classList.add("chat-header-design")
// Style (chatHeaderDesign.style.)
chatHeaderDesign.style.fontFamily = "Source Sans Pro,sans-serif";
chatHeaderDesign.style.justifyContent = "flex-start";
chatHeaderDesign.style.margin = "0";
chatHeaderDesign.style.display = "flex";
chatHeaderDesign.style.alignItems = "center";
chatHeaderDesign.style.boxSizing = "border-box";
chatHeaderDesign.style.position = "relative";


// Create chat-header-avatar
const chatHeaderAvatar = document.createElement("div");
chatHeaderAvatar.classList.add("chat-header-avatar")
// Style (chatHeaderAvatar.style.)
chatHeaderAvatar.style.margin = "0";
chatHeaderAvatar.style.padding = "0";
chatHeaderAvatar.style.boxSizing = "border-box";
chatHeaderAvatar.style.outline = "none";
chatHeaderAvatar.style.flexShrink = "0";
chatHeaderAvatar.style.width = "60px";
chatHeaderAvatar.style.height = "60px";
chatHeaderAvatar.style.position = "relative";
chatHeaderAvatar.style.marginRight = "22px";


// Create header-avatar-image
const headerAvatarImage = document.createElement("div");
headerAvatarImage.classList.add("header-avatar-image");
// Style (headerAvatarImage.style.)
headerAvatarImage.style.marginRight = "10px";
headerAvatarImage.style.width = "100%";
headerAvatarImage.style.height = "100%";
headerAvatarImage.style.borderRadius = "50%";
headerAvatarImage.style.backgroundColor = "#4CAF50";
headerAvatarImage.style.flexShrink = "0";
headerAvatarImage.style.backgroundImage = 'url("https://github.com/Hankkk423/chatbot_widget_website/blob/main/images/bot_image.jpg?raw=true")';
headerAvatarImage.style.backgroundSize = "cover";


// Create header-avatar-status
const headerAvatarStatus = document.createElement("div");
headerAvatarStatus.classList.add("header-avatar-status");
// Style (headerAvatarStatus.style.)
headerAvatarStatus.style.margin = "0";
headerAvatarStatus.style.padding = "0";
headerAvatarStatus.style.boxSizing = "border-box";
headerAvatarStatus.style.outline = "none";
headerAvatarStatus.style.flexShrink = "0";
headerAvatarStatus.style.borderRadius = "100%";
headerAvatarStatus.style.position = "absolute";
headerAvatarStatus.style.bottom = "7%";
headerAvatarStatus.style.right = "7%";
headerAvatarStatus.style.display = "block";
headerAvatarStatus.style.width = "16%";
headerAvatarStatus.style.height = "16%";
headerAvatarStatus.style.borderWidth = "1px";
headerAvatarStatus.style.borderStyle = "solid";
headerAvatarStatus.style.borderColor = "rgb(255, 255, 255)";
headerAvatarStatus.style.background = "rgb(105, 222, 64)";


// Appends to "chat-header-avatar", and to "chat-header-design"
chatHeaderAvatar.appendChild(headerAvatarImage);
chatHeaderAvatar.appendChild(headerAvatarStatus);
chatHeaderDesign.appendChild(chatHeaderAvatar);


// Create chat-header-company
const chatHeaderCompany = document.createElement('div');
chatHeaderCompany.classList.add("chat-header-company");
// Style (chatHeaderCompany.style.)
chatHeaderCompany.style.fontFamily = "Source Sans Pro, sans-serif";
chatHeaderCompany.style.margin = "0";
chatHeaderCompany.style.padding = "0";
chatHeaderCompany.style.boxSizing = "border-box";
chatHeaderCompany.style.outline = "none";
chatHeaderCompany.style.flexGrow = "1";
chatHeaderCompany.style.flexShrink = "0";
chatHeaderCompany.style.width = "0";


// Create company-name
const companyName = document.createElement('div');
companyName.classList.add("company-name");
companyName.textContent = "ChatBot";
// Style (companyName.style.)
companyName.style.fontFamily = "Source Sans Pro, sans-serif";
companyName.style.margin = "0";
companyName.style.padding = "0";
companyName.style.boxSizing = "border-box";
companyName.style.outline = "none";
companyName.style.flexShrink = "0";
companyName.style.fontSize = "24px";
companyName.style.lineHeight = "31px";
companyName.style.fontWeight = "600";
companyName.style.whiteSpace = "nowrap";
companyName.style.textOverflow = "ellipsis";
companyName.style.paddingRight = "15px";
companyName.style.cursor = "default";
companyName.style.color = "rgb(241, 236, 236)";


// Create company-status
const companyStatus = document.createElement('div');
companyStatus.classList.add("company-status");
companyStatus.textContent = 'Online';
// Style (companyStatus.style.)
companyStatus.style.fontFamily = "Source Sans Pro, sans-serif";
companyStatus.style.margin = "0";
companyStatus.style.padding = "0";
companyStatus.style.boxSizing = "border-box";
companyStatus.style.outline = "none";
companyStatus.style.flexShrink = "0";
companyStatus.style.fontSize = "15px";
companyStatus.style.lineHeight = "19px";
companyStatus.style.cursor = "default";
companyStatus.style.color = "rgb(155, 166, 179)";


// Appends to "chat-header-company", and "chat-header-design"
chatHeaderCompany.appendChild(companyName);
chatHeaderCompany.appendChild(companyStatus);
chatHeaderDesign.appendChild(chatHeaderCompany);

// Appends "chat-header-design" to "chat-header"
chatHeader.appendChild(chatHeaderDesign);


// --------------------------- //


// Create chat-log (id: "chat-log")
const chatLog = document.createElement("div");
chatLog.classList.add("chat-log");
chatLog.id = "chat-log";
// Style
chatLog.style.height = "260px";
chatLog.style.overflowY = "scroll";
chatLog.style.padding = "10px";
chatLog.style.background = "rgb(234, 238, 243)";


// Create user-input (id: "user-input")
const userInput = document.createElement("input");
userInput.type = "text";
userInput.classList.add("user-input");
userInput.id = "user-input";
userInput.placeholder = "Type your message...";
// Style
userInput.style.border = "none";
userInput.style.padding = "10px";
userInput.style.width = "100%";
userInput.style.borderTop = "1px solid #ccc";
userInput.style.borderBottomLeftRadius = "10px";
userInput.style.borderBottomRightRadius = "10px";
userInput.style.outline = "none";


// Create chat-button (id: "chat-button")
const chatButton = document.createElement("button");
chatButton.classList.add("chat-button")
chatButton.id = "chat-button";
chatButton.textContent = "Chat";
// Style
chatButton.style.backgroundColor = "#1e75c7";
chatButton.style.color = "white";
chatButton.style.border = "none";
chatButton.style.padding = "15px 15px";
chatButton.style.borderRadius = "5px";
chatButton.style.cursor = "pointer";
chatButton.style.backgroundImage = 'url("https://github.com/Hankkk423/chatbot_widget_website/blob/main/images/button_image.png?raw=true")';
chatButton.style.backgroundSize = "cover";
chatButton.style.backgroundPosition = "center";
chatButton.style.backgroundRepeat = "no-repeat";


// Append elements to the document
chatContainer.appendChild(chatHeader);
chatContainer.appendChild(chatLog);
chatContainer.appendChild(userInput);
chatWidget.appendChild(chatContainer);
chatWidget.appendChild(chatButton);
body.appendChild(chatWidget);

// -------------------------------------------------------------------------------------------- //
// // Get references to HTML elements
// const chatButton = document.getElementById("chat-button");
// const userInput = document.getElementById("user-input");
// const chatLog = document.getElementById("chat-log");
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
    // Style
    userMessage.style.justifyContent = "flex-end";
    userMessage.style.marginBottom = "10px";
    userMessage.style.display = "flex";
    userMessage.style.alignItems = "center";


    // Create user-bubble
    const userBubble = document.createElement("div");
    userBubble.classList.add("user-bubble");
    userBubble.textContent = message;
    // Style
    userBubble.style.backgroundColor = "#1e90ff";
    userBubble.style.color = "white";
    userBubble.style.padding = "8px";
    userBubble.style.borderRadius = "10px";
    userBubble.style.marginRight = "5px";


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
    // Style
    botMessage.style.justifyContent = "flex-start";
    botMessage.style.marginBottom = "10px";
    botMessage.style.display = "flex";
    botMessage.style.alignItems = "flex-start";

    
    // Create bot-avatar
    const botAvatar = document.createElement("div");
    botAvatar.classList.add("bot-avatar");
    // Style
    botAvatar.style.marginRight = "10px";
    botAvatar.style.width = "30px";
    botAvatar.style.height = "30px";
    botAvatar.style.borderRadius = "50%";
    botAvatar.style.backgroundColor = "#4CAF50";
    botAvatar.style.flexShrink = "0";
    botAvatar.style.backgroundImage = 'url("https://github.com/Hankkk423/chatbot_widget_website/blob/main/images/bot_image.jpg?raw=true")'; // Better use Absoult Path
    botAvatar.style.backgroundSize = "cover";


    // Create bot-bubble
    const botBubble = document.createElement("div");
    botBubble.classList.add("bot-bubble");
    botBubble.textContent = message;
    // Style
    botBubble.style.backgroundColor = "#e8f5e9";
    botBubble.style.color = "#000";
    botBubble.style.padding = "8px";
    botBubble.style.borderRadius = "10px";
    botBubble.style.marginLeft = "5px";

    
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
