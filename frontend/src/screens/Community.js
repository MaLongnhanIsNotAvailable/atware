import React from 'react';
import Sidebar from '../components/Sidebar';
import Chat from '../components/Chat';
import '../css/app.css'
import { useEffect, useState } from 'react';
// import Pusher from 'pusher-js';
import axios from '../axios';
function Community() {
    const [messages, setMessages] = useState([]);
    // useEffect(() => {
    //     axios.get('/messages/sync').then((response) => {
    //         setMessages(response.data);
    //     });
    // }, []);

    // useEffect(() => {
    //     const pusher = new Pusher('e4ce7692ab63a77612df', {
    //         cluster: 'ap1',
    //     });

    //     const channel = pusher.subscribe('messages');
    //     channel.bind('inserted', (newMessage) => {
    //         setMessages([...messages, newMessage]);
    //     });

    //     return () => {
    //         channel.unbind_all();
    //         channel.unsubscribe();
    //     };
    // }, [messages]);
    return (
        <div className="app">
            <div className="app__body">
                <Sidebar />
                <Chat messages={messages} />
            </div>
        </div>
    );
}

export default Community;
