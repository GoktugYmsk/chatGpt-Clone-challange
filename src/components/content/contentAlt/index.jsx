import React from 'react'

import { FaArrowUp } from 'react-icons/fa'

function ContentAlt({ inputValue, setInputValue, sendMessage }) {

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            sendMessage(event);
        }
    };


    return (
        <>
            <div className="content-container__input-area">
                <input
                    type="text"
                    value={inputValue}
                    placeholder="Type your message..."
                    onKeyDown={handleKeyDown}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button className='send-button' onClick={sendMessage}>
                    <FaArrowUp />
                </button>
            </div>
        </>
    )
}

export default ContentAlt