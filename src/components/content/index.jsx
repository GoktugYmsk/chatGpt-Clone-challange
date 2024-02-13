import React, { useState, useEffect } from 'react';

import ContentAlt from './contentAlt';
import ContentTop from './contentTop';

import './index.scss';

function Content() {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const getUserName = sessionStorage.getItem('user');

    const sendMessage = (event) => {
        event.preventDefault();
        const message = inputValue;
        if (message.trim() !== '') {
            addUserMessage(` ${getUserName || ' Giriş yapmayan kullanıcı'} - ${message}`);
            addBotMessage(`Bot: Thanks for your message, ${getUserName || 'Giriş yapmayan kullanıcı'}!`);
            setInputValue('');
        }
    };

    const addUserMessage = (message) => {
        setMessages((prevMessages) => [...prevMessages, { text: message, sender: 'user' }]);
    };

    const addBotMessage = (message) => {
        setMessages((prevMessages) => [
            ...prevMessages,
            { text: message, sender: 'bot', animation: 'pop-in' },
        ]);
    };

    useEffect(() => {
        if (messages.length > 0 && messages[messages.length - 1].sender === 'bot') {
            setTimeout(() => {
                setMessages((prevMessages) => {
                    const newMessages = [...prevMessages];
                    newMessages[newMessages.length - 1].animation = '';

                    const chatArea = document.querySelector(".content-container__chat__area");
                    chatArea.scrollTop = chatArea.scrollHeight;

                    return newMessages;
                });
            }, 2000);
        }
    }, [messages]);

    return (
        <div className="content-container">
            <ContentTop messages={messages} />
            <ContentAlt inputValue={inputValue} setInputValue={setInputValue} sendMessage={sendMessage} />
        </div>
    );
}

export default Content;
