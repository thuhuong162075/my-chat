import React from 'react';
import GroupChat from '../../components/groupChat';
import { Redirect } from 'react-router-dom';
import Contacts from '../../components/contacts'
import Chat from '../../components/chat/index';
import { useSelector } from 'react-redux'

function ChatPage() {
  const infoLogin = useSelector((state) => {
    return state.login
  })
  if(infoLogin.actLogin) {
    return (
      <div className="ChatPage container-fluid h-100" >
        <Contacts />
        <div className="row justify-content-center h-100" style={{marginTop: "30px"}}>
          <div className="col-md-4 col-xl-3 chat">
            <GroupChat />
          </div>
          <div className="col-md-8 col-xl-6 chat">
            <Chat />
          </div>
        </div>
      </div>
    )
  }else {
    return (
      <Redirect to='/sign-in' />
    )
  }
  
}
export default ChatPage;