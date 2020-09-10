import React from 'react';
import { useSelector } from 'react-redux'
import Contact from './contact'
import '../../assets/css/Contacts.css'


function Contacts() {
  const infoLogin = useSelector((state) => {
    return state.login
  })
  return (
    <nav className="contacts navbar navbar-expand-lg navbar-light">
      <div className="contact-me d-flex bd-highlight">
        <div className="img_cont">
            <img 
                src="https://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg"
                className="rounded-circle user_img"
                alt="user-contact"
            />
            <span className="online_icon"></span>
        </div>
        <div className="user_info">
          <span>Me</span>
        </div>
      </div>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="GroupList navbar-nav mr-auto">
          {infoLogin.usersList.length > 0 ? (
            infoLogin.usersList.map((item, index) => <Contact key={index} user={item}/>)
          ) : <div></div>}
            
        </ul>
      </div>
    </nav>
  );
}

export default Contacts;
