import React, {useEffect} from 'react'
import ChatItem from './ChatItem'
import '../../assets/css/ChatBody.css'
import { socket } from '../../service/connectSocket'
import { useSelector, useDispatch } from 'react-redux'
import { getMessenge } from '../../actions/index'


function ChatBody() {
    const infoLogin = useSelector((state) => {
        return state.login
    })
    const infoGroup = useSelector((state) => {
        return state.group
    })
    const groupActive = infoGroup.find(item=> item.activeMesBody)
    
    const dispatch = useDispatch()
    useEffect(() => {
        socket.on("getMsg", data => {
            dispatch(getMessenge(data));
        });
    }, []);

    return (
        <div className="card-body msg_card_body">
            {groupActive.mesenger?.map((msgInfo, index) => 
                { return (
                    <ChatItem 
                        chatOfMe={msgInfo.userName === infoLogin.loggedUser.username ? true : false}
                        key={index} 
                        userName={msgInfo.userName} 
                        msg={msgInfo.msg} 
                        time={msgInfo.time} />
                ) })}
            
        </div>
    );
};
export default ChatBody