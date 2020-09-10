import React, {useState} from 'react';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import GroupAddIcon from '@material-ui/icons/GroupAdd'
import GroupIcon from '@material-ui/icons/Group'
import BlockIcon from '@material-ui/icons/Block'
import MenuIcon from '@material-ui/icons/Menu'
import '../../assets/css/ChatHeader.css'
import { useSelector } from 'react-redux'


function ChatHeader() {
    const infoLogin = useSelector((state) => {
        return state.login
    })
    const infoGroup = useSelector((state) => {
        return state.group
    })
    const groupActive = infoGroup.find(item=> item.activeMesBody)
    const [showMenu, setShowMenu] = useState(false)
    return (
        <div className="card-header msg_head">
            <div className="d-flex bd-highlight">
                <div className="img_cont">
                    <img 
                        src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" 
                        className="rounded-circle user_img" 
                        alt="user_img"
                    />
                    <span className="online_icon"></span>
                </div>
                <div className="user_info">
                    <span>{groupActive.nameroom}</span>
                    <p >{!infoLogin.loggedUser ? '' : infoLogin.loggedUser.username}</p>
                </div>
                <div className="video_cam">
                    <span><VideocamIcon /></span>
                    <span><PhoneEnabledIcon /></span>
                </div>
            </div>
            <span id="action_menu_btn" onClick={() => setShowMenu(!showMenu)}>
                <MenuIcon fontSize="small" style={{color: "white"}}/>
            </span>
            <div className= {!showMenu ? "action_menu active_menu" : "action_menu"} >
                <ul>
                    <li>
                        <AccountCircleIcon 
                            fontSize="small" 
                            style={{color: "white"}}
                        /> 
                        View profile
                    </li>
                    <li>
                        <GroupIcon 
                            fontSize="small" 
                            style={{color: "white"}}
                        /> 
                        Add to close friends
                    </li>
                    <li>
                        <GroupAddIcon 
                            fontSize="small" 
                            style={{color: "white"}}
                        /> 
                        Add to group
                    </li>
                    <li>
                        <BlockIcon 
                            fontSize="small" 
                            style={{color: "white"}}
                        /> 
                        Block
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default ChatHeader;
