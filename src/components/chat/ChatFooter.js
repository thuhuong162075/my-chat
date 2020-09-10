import React, {useState} from 'react'
import '../../assets/css/ChatFooter.css'
import AttachFileIcon from '@material-ui/icons/AttachFile'
import SendIcon from '@material-ui/icons/Send'
import { useSelector } from 'react-redux'
import { socket } from '../../service/connectSocket'


function ChatFooter() {
    const [msg, setMsg] = useState("");
    const infoLogin = useSelector((state) => {
        return state.login
    })
    const sendMessage = () => {
        socket.emit("sendMsg", JSON.stringify({ user: infoLogin.loggedUser.username, msg: msg }));
        setMsg('')
    }
    return (
        <div className="card-footer">
            <div className="input-group">
                <div className="input-group-append">
                    <span className="input-group-text attach_btn">
                        <AttachFileIcon 
                            fontSize="small" 
                        />
                    </span>
                </div>
                <input
                    name="" 
                    className="form-control type_msg" 
                    placeholder="Type your message..."
                    onChange={(event) => setMsg(event.target.value)} 
                    />
                <div className="input-group-append">
                    <span className="input-group-text send_btn">
                        <SendIcon 
                            fontSize="small"
                            onClick={() => { sendMessage() }}
                        />
                    </span>
                </div>
            </div>
        </div>
    )
}
export default ChatFooter