import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import './index.scss';

function Chatbot() {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState(null);

    console.log('messages', messages);

    const sendMessage = (event) => {
        event.preventDefault();
        const message = inputValue;
        if (message.trim() !== '') {
            addUserMessage(message);
            addBotMessage('Bot: Thanks for your message!');
            setInputValue('');
        }
    };


    const addUserMessage = (message) => {
        setMessages((prevMessages) => [...prevMessages, { text: message, sender: 'user' }]);
    };

    const addBotMessage = (message) => {
        setMessages((prevMessages) => [...prevMessages, { text: message, sender: 'bot', animation: 'pop-in' }]);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            sendMessage(event);
        }
    };

    useEffect(() => {
        if (messages.length > 0 && messages[messages.length - 1].sender === 'bot') {
            setTimeout(() => {
                setMessages((prevMessages) => {
                    const newMessages = [...prevMessages];
                    newMessages[newMessages.length - 1].animation = '';
                    return newMessages;
                });
            }, 2000);
        }
    }, [messages]);

    return (
        <div className="content-container">
            <div className="content-container__chat">
                {messages.map((message, index) => (
                    <div key={index} className={`message ${message.sender}-message ${message.animation}`}>
                        {message.text}
                    </div>
                ))}
                <div className="input-container">
                    <input
                        type="text"
                        value={inputValue}
                        placeholder="Type your message..."
                        onKeyDown={handleKeyDown}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button onClick={sendMessage}>
                        <FaArrowUp />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Chatbot;
