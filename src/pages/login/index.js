import React, {useState, useEffect} from "react";
import { Redirect } from 'react-router-dom';
import Error from '../../components/login/Error'
import '../../assets/css/login.css';
import { useSelector, useDispatch } from 'react-redux'
import Validate from "../../components/login/Validate";
import { socket } from '../../service/connectSocket'
import { actLogin, loggedUser, usersList, errLogin, getMessenge, getgroupAll, addGroupActive } from '../../actions/index'

export default function Login() {
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [errUsername, setErrName] = useState(false)
    const [errPassword, setErrPass] = useState(false)

    const infoLogin = useSelector((state) => {
        return state.login
    })
    useEffect(() => {
        socket.on('login_failure', function(){
            dispatch(actLogin(false))
            dispatch(errLogin(true))
        })
        socket.on('login_success', function(data){
            dispatch(loggedUser(data))
            dispatch(errLogin(false))
            dispatch(actLogin(true))
        })
        socket.on('users', function(data){
            let {users, userLogin } = data
            dispatch(usersList(users.filter(item => userLogin.id !== item.id)))
        })
        socket.on('getRoomChatUsers', data => {
            dispatch(getgroupAll(data))
        })
        socket.on("getMsg", data => {
            dispatch(getMessenge(data));
        });
        // socket.on('getGroupChatActive', data => {
        //     dispatch(addGroupActive(data))
        // })
    }, []);
    const dispatch = useDispatch()

    const handleLoginAction = (e) => {
        e.preventDefault();
        password === '' ? setErrPass(true) : setErrPass(false)
        username === '' ? setErrName(true) : setErrPass(false)
        if (username !== '' && password !== '') {
            socket.emit('login', {username: username, password: password, idSocket: socket.id})
        } 
    }
    const onChangeUsername = (e) => {
        setUsername(e.target.value)
        setErrName(false)
    }
    const OnChangePassword = (e) => {
        setPassword(e.target.value)
        setErrPass(false)
    }
    
    if(infoLogin.actLogin) {
        return (
            <Redirect to='/index' />
        )
    }

    return (
        <div className="home">
            <form className="form-login">
                <h3>Đăng nhập</h3>
                <div className="form-group-login login-username">
                    <label className="label label-username">Tên đăng nhập</label>
                    {errUsername ? <Validate text = 'Tên đăng nhập không đúng' valiClassName='invalid-username'/> : <div></div>}
                    <input 
                        type="username" 
                        className="form-control"
                        placeholder="Nhập tên đăng nhập" 
                        onChange={onChangeUsername}
                    />
                </div>
                <div className="form-group-login login-password">
                    <label className="label label-password" >Mật khẩu</label>
                    {errPassword ? <Validate text = 'Mật khẩu không đúng' valiClassName='invalid-password'/> : <div></div>}
                    <input 
                        type="password" 
                        className="form-control" 
                        placeholder="Nhập mật khẩu" 
                        onChange={OnChangePassword}
                    />
                </div>
                <div>
                    {infoLogin.errLogin ? <Error text = "tài khoản hoặc mật khẩu khồng đúng" /> : <div></div> }
                    <button 
                        type="submit" 
                        className="btn btn-primary" 
                        style={{ width: '300px', margin: '0 auto'}}
                        onClick={handleLoginAction}
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}