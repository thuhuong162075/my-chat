import React from 'react'
import '../../assets/css/ChatItem.css'

function ChatItem(props) {
    const { userName, msg, time, chatOfMe} = props
    return (
        <div className= {chatOfMe ? "mb-4 chatItem" : "mb-4 chatItem chatItemRight"}>
            <div className="img_cont_msg">
                <img 
                    src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" 
                    className="rounded-circle user_img_msg" 
                    alt="user_img_msg"
                    width={70}
                    height={70}
                />
            </div>
            <div className="msg_cotainer">
                <span className="msg_username">{userName}</span>
                    {msg}
                <span className="msg_time">{time}</span>
            </div>
        </div>
    )
}

export default ChatItem