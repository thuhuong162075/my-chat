import React from 'react';
import Group from './group';
import '../../assets/css/GroupList.css'
import { useSelector } from 'react-redux'

function GroupList() {
  const infoGroup = useSelector((state) => {
    return state.group
})

  return (
    <ul className="GroupList">
        {infoGroup.map((item, index) => <Group key={index} group={item}/>) }
    </ul>
  );
}

export default GroupList;
