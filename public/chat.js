// public/chat.js

// Set up an EventSource to listen for messages from the server
new window.EventSource("/sse").onmessage = function (event) {
    const message = event.data;
    const messagesContainer = document.getElementById('messages');
    messagesContainer.innerHTML += `<p>${message}</p>`;
  };
  
  // Add an event listener to the form for sending messages
  const form = document.getElementById('form');
  form.addEventListener('submit', function (event) {
    event.preventDefault();
  
    const input = document.getElementById('input');
    const message = input.value;
  
    // Send the message to the server via the `/chat` endpoint
    window.fetch(`/chat?message=${message}`);
    input.value = ''; // Clear the input field
  });
  