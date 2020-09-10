import React, {useEffect} from 'react';
import '../../assets/css/Group.css'
import { socket } from '../../service/connectSocket'


function Group(props) {
    const {group} = props
    const onGroupPrivate = () => {
        // socket.emit('createChatGroup', {
        //     member: [user.idSocket, socket.id],
        //     masterName: infoLogin.loggedUser.username,
        //     roomId: 'room_' + infoLogin.loggedUser.id + (Date.now()), 
        //     chatGroupName: `${infoLogin.loggedUser.username},${user.username}`,
        // })
    }
    useEffect(() => {
        // socket.on('createGroupClient', data => {
        //     console.log('client lắng nghe việc tạo nhóm chat từ server')
        //     socket.emit('joinChatGroup', {
        //         id: user.id,
        //         userName: user.username,
        //         info: data
        //     })
        // })
        socket.on('chatGrSystemNotice', data => {
            console.log(data.msg)
        })
    }, []);
    return (
        <li className="group active">
            <div className="d-flex bd-highlight">
                <div className="img_cont" onClick={onGroupPrivate}>
                    <img 
                        src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                        className="rounded-circle user_img"
                        alt="user-contact"
                    />
                    <span className= {group.active ? "online_icon": "offline"}></span>
                </div>
                <div className="user_info">
                    <span>{group.nameroom}</span>
                    <p>{group.active ? 'is online': 'offline'}</p>
                </div>
            </div>
        </li>
    );
}

export default Group;
