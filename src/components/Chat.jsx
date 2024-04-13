import React, { useEffect, useMemo, useRef, useState } from 'react';
import { IoMdChatbubbles } from "react-icons/io";
import '../styles/chat.css';
import { IoSend } from 'react-icons/io5';
import io from 'socket.io-client';

const Chat = () => {
    const auth = localStorage.getItem('auth');
    if (!auth) {
        window.location.href = '/login';
    }
    const user = JSON.parse(localStorage.getItem('user'));
    const name = user?.name;

    const socket = useMemo(() => io("http://localhost:5000/"), []);

    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const chatContainerRef = useRef(null);

    const handleSend = () => {
        if (message.trim() !== '') {
            socket.emit("message", { message, name });
            setMessage('');
        }
    };

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        const handleNewMessage = (data) => {
            console.log(data)
            setMessages(prevMessages => [...prevMessages, data]);
            if (chatContainerRef.current) {
                chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
            }
        };

        socket.on("message", handleNewMessage);

        return () => {
            socket.off("message", handleNewMessage);
        };
    }, [socket]);

    useEffect(() => {
        if (isOpen && chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [isOpen, messages]);

    return (
        <>
            <div onClick={handleClick} className='z-10 w-[60px] h-[60px] md:w-[100px] md:h-[100px] bg-red-500 absolute bottom-16 right-5 md:right-10 border-4 border-purple-600 flex justify-center items-center text-white rounded-full hover:text-red-500 hover:bg-white cursor-pointer'>
                <IoMdChatbubbles className='w-10 md:w-16' />
            </div>
            <div className={`chat-box ${isOpen ? 'open' : ''} overflow-hidden`}>
                {isOpen && <div className='absolute w-8 md:w-10 h-8 md:h-10 bg-white font-extrabold capitalize rounded-full flex justify-center items-center right-2 top-2 cursor-pointer hover:border-2 hover:border-black' onClick={handleClick}>X</div>}
                {isOpen && <>
                    <h1 className='text-lg md:text-3xl mt-2 font-bold text-white tracking-wider text-center'>Let's Discuss!</h1>
                    <div ref={chatContainerRef} className='bg-[#c2fa90c4] py-2 mt-3 md:mt-2 overflow-y-scroll h-[75%]'>
                        {
                            messages.map((msg, index) => (
                                <div key={index} className={`chat-bubble px-4 mt-4 w-full flex flex-col text-xl justify-center`}>
                                    <p className={`${msg.name === name ? 'user1' : 'user2'} text-white bg-blue-700 px-3 py-2 rounded-xl`}>{msg.message}</p>
                                    <h6 className={`${msg.name === name ? 'user1p' : 'user2p'} text-sm text-gray-600`}>{msg.name}</h6>
                                </div>
                            ))
                        }
                    </div>

                    <div className='absolute bottom-2 w-full px-2 flex items-center'>
                        <input value={message} onChange={(e) => setMessage(e.target.value)} type="text" className='w-[80%] h-10 rounded-lg px-2' placeholder='Type something' />
                        <div onClick={handleSend} className='flex items-center justify-center bg-yellow-400 flex-grow h-10 rounded-lg ml-1'>
                            <IoSend className='text-2xl' />
                        </div>
                    </div>
                </>}
            </div>
        </>
    )
}

export default Chat;
