import React from 'react';
import Login from './pages/login';
import SignUp from './pages/signup';
import { useSelector} from 'react-redux'

import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import ChatPage from './pages/Chat';

function App() {

  const infoLogin = useSelector((state) => {
    return state.login
  })

  const onLogout = () => {
    console.log('logout')
  }

  return (
    <Router>
      <div className="App" style={{textAlign: 'center'}}>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                { 
                  !infoLogin.actLogin ? 
                  (
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item">
                        <NavLink 
                          className="nav-link" 
                          to={"/sign-in"}
                          activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                          }}
                        >
                          Đăng nhập
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink 
                          className="nav-link" 
                          to={"/sign-up"}
                          activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                          }}
                        >
                          Đăng ký
                        </NavLink>
                      </li>
                    </ul>
                  )
                   :
                  (
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item" onClick = {onLogout} style={{cursor: 'pointer'}}>
                        <NavLink 
                          className="nav-link" 
                          to={"/index"}
                        >
                          Đăng xuất
                        </NavLink>
                      </li>
                    </ul>
                  )           
                }
            </div>
          </div>
        </nav>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
              <Route exact path='/' component={ChatPage} />
              <Route path="/sign-in" component={Login} />
              <Route path="/sign-up" component={SignUp} />
              <Route exact path='/index' component={ChatPage} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;