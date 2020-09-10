import React, {useEffect} from 'react';
import { socket } from '../../service/connectSocket'
import { useSelector} from 'react-redux'
import '../../assets/css/Contact.css'


function Contact(props) {
    const infoLogin = useSelector((state) => {
        return state.login
    })
    const {user} = props
    const onGroupPrivate = () => {
        console.log('tạo nhóm')
        socket.emit('createChatGroup', {
            members: [user.id, infoLogin.loggedUser.id],
            // masterName: infoLogin.loggedUser.id,
            roomId: 'room_' + infoLogin.loggedUser.id + (Date.now()), 
            chatGroupName: `${infoLogin.loggedUser.username},${user.username}`,
        })
    }
    useEffect(() => {
        socket.on('createGroupClient', data => {
            console.log('client lắng nghe việc tạo nhóm chat từ server')
            socket.emit('joinChatGroup', {
                id: user.id,
                userName: user.username,
                info: data
            })
        })
        socket.on('chatGrSystemNotice', data => {
            console.log(data.msg)
        })
    }, []);
    return (
        <li className="nav-item active contact">
            <div className="d-flex bd-highlight">
                <div className="img_cont" onClick={onGroupPrivate}>
                    <img 
                        src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                        className="rounded-circle user_img"
                        alt="user-contact"
                    />
                    <span className="online_icon"></span>
                    <div className="user_info">
                        <span>{user.username}</span>
                    </div>
                </div>
                
            </div>
        </li>
    );
}

export default Contact;
