import React from 'react';
import InputSearch from './InputSearch';
import '../../assets/css/GroupChat.css'
import GroupList from './GroupList';

function GroupChat() {
  return (
    <div className="card mb-sm-3 mb-md-0 groupchat_card">
        <div className="card-header">
            <InputSearch />
        </div>
        <div className="card-body groupchat_body">
            <GroupList />
        </div>
        <div className="card-footer"></div>
    </div>
  );
}

export default GroupChat;
