import React, { useState } from 'react';
import '../css/Chat.css';
import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons';
import InsertEmotionIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import axios from '../axios';
function Chat({ messages }) {
    const [input, setInput] = useState('');

    const sendMessage = async (e) => {
        e.preventDefault(); // stopping the refresh
        await axios.post('/messages/new', {
            message: input,
            name: 'demo',
            timestamp: 'demo',
            received: 'false',
        });

        setInput('');
    };
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src="https://scontent.fvca1-2.fna.fbcdn.net/v/t1.0-9/44419904_1017824478396511_815785035935252480_o.jpg?_nc_cat=100&ccb=1-3&_nc_sid=174925&_nc_ohc=XMoEMyQ3Mn8AX8-6JyI&_nc_ht=scontent.fvca1-2.fna&oh=98f4a533e3ae425d97b0103365e79005&oe=607BC5E9"/>
                <div className="chat__headerInfo">
                    <h3>Room Name</h3>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                {messages.map((message) => (
                    <p
                        className={`chat__message ${
                            message.received && 'chat__receiver'
                        }`}
                    >
                        <span className="chat__name">{message.name}</span>
                        {message.message}
                        <span className="chat__timestamp">
                            {message.timestamp}
                        </span>
                    </p>
                ))}
            </div>

            <div className="chat__footer">
                <InsertEmotionIcon />
                <form>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type a message"
                        type="text"
                    />
                    <button onClick={sendMessage} type="submit">
                        send
                    </button>
                </form>
                <MicIcon />
            </div>
        </div>
    );
}

export default Chat;
