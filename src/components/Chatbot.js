import React, { useState } from 'react';
import styles from  './Chatbot.module.css'; 

const Chatbot = () => {
  const [showChatbox, setShowChatbox] = useState(false); 
  const [chatMessages, setChatMessages] = useState([]); 

  const handleClick = () => {
    setShowChatbox(!showChatbox);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    const userInput = e.target.elements.message.value;
    
    const chatMessage = { sender: 'user', message: userInput };
    setChatMessages([...chatMessages, chatMessage]);
    e.target.reset();
  };

  const handleClearConversation = () => {
    setChatMessages([]);
  };


  return (
    <div className={styles.chatbotcontainer}>
      <div className={`chatbot ${showChatbox ? 'show' : ''}`}>
        <div className="chatbot-header" onClick={handleClick}>
          Chatbot
        </div>
        <div className="chatbot-body">
          <div className="chat-messages">
            {chatMessages.map((message, index) => (
              <div
                key={index}
                className={`message ${message.sender === 'user' ? 'user' : 'bot'}`}
              >
                {message.message}
              </div>
            ))}
          </div>
          <form onSubmit={handleSendMessage}>
            <input type="text" name="message" placeholder="Type your message" />
            <button type="submit">Send</button>
          </form>
          <button onClick={handleClearConversation}>Clear All</button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;