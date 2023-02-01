const chatForm = document.querySelector('#chat-form');
const chatInput = document.querySelector('#chat-input');
const chatMessages = document.querySelector('#chat-messages');

chatForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // get the message
  const message = chatInput.value;

  // create a new chat message element
  const chatMessage = document.createElement('div');
  chatMessage.innerHTML = `You: ${message}`;

  // add the chat message to the chat messages container
  chatMessages.appendChild(chatMessage);

  // clear the chat input
  chatInput.value = '';

  // simulate a reply from another user
  setTimeout(() => {
    const reply = `Other user: Hi! How are you?`;

    const replyMessage = document.createElement('div');
    replyMessage.innerHTML = reply;

    chatMessages.appendChild(replyMessage);
  }, 1000);
});