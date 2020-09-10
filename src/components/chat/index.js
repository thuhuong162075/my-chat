import React from 'react';
import ChatHeader from './ChatHeader';
import '../../assets/css/Chat.css'
import ChatBody from './ChatBody';
import ChatFooter from './ChatFooter';
function Chat() {
  return (
    <div className="card card_chat">
        <ChatHeader />
        <ChatBody />
        <ChatFooter />
    </div>
  );
}

export default Chat;
