import React, { useState } from "react";
import styles from "./Chatbot.module.css";
import logo from "./logo.png";

const Chatbot = () => {
  const [showChatbox, setShowChatbox] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    const userInput = e.target.elements.message.value;

    const chatMessage = { sender: "user", message: userInput };
    setChatMessages([...chatMessages, chatMessage]);
    e.target.reset();
  };

  return (
    <div className={styles.chatbotcontainer}>
      {!showChatbox ? (
        <button
          className={styles.custombutton}
          onClick={() => setShowChatbox(true)}
        >
          <img src={logo} alt="Button Icon" className={styles.buttonicon} />
          <span className={styles.buttontext}>Let's Chat</span>
        </button>
      ) : (
        <div className={styles.chatbox}>
          <div className={styles.chatboxheader}>
          <img src={logo} alt="Button Icon" className={styles.buttonicon} />
          <span className={styles.buttontext}>Let's Chat</span>
            <button
              className={styles.closebutton}
              onClick={() => setShowChatbox(false)}
            >
              X
            </button>
          </div>
          <div className={styles.chatboxcontent}>
            {/* Render the chat messages */}
            {chatMessages.map((message, index) => (
              <div
                key={index}
                className={
                  message.sender === "user"
                    ? styles.usermessage
                    : styles.botmessage
                }
              >
                {message.message}
              </div>
            ))}
          </div>
          <form className={styles.chatboxform} onSubmit={handleSendMessage}>
            <input
              type="text"
              name="message"
              placeholder="Type your message..."
              className={styles.messageinput}
            />
            <button type="submit" className={styles.sendbutton}>
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;