import React, {useState, useEffect} from "react";
import Error from '../../components/login/Error'
import Validate from "../../components/login/Validate";
import '../../assets/css/signUp.css'
import { useSelector, useDispatch } from 'react-redux'
import { usersList, actRegister, errRegister } from '../../actions/index'
import { Redirect } from 'react-router-dom';
import { socket } from '../../service/connectSocket'

function SignUp() {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errEmail, setErrEmail] = useState(false)
    const [errUsername, setErrName] = useState(false)
    const [errPassword, setErrPass] = useState(false)
    const infoRegister = useSelector((state) => {
        return state.register
    })
    const dispatch = useDispatch()
    useEffect(() => {
        socket.on('register_failure', () => {
            dispatch(errRegister(true))
        })
        socket.on('register_success', () => {
            dispatch(errRegister(false))
            dispatch(actRegister(true))
        })
        socket.on('users-register', (data) => {
            dispatch(usersList(data))
        })
    }, [])
    
    const onChangeEmail = (e) => {
        setEmail(e.target.value)
        setErrEmail(false)
    }
    const onChangeUsername = (e) => {
        setUsername(e.target.value)
        setErrName(false)
    }
    const OnChangePassword = (e) => {
        setPassword(e.target.value)
        setErrPass(false)
    }
    const onRegisterAcount = (e) => {
        e.preventDefault()
        email === '' ? setErrEmail(true) : setErrEmail(false)
        password === '' ? setErrPass(true) : setErrPass(false)
        username === '' ? setErrName(true) : setErrPass(false)
        if (email !== '' && password !== '' && username !== '') {
            socket.emit('register', {email: email, username: username, password: password})
        } 
    }
    if(infoRegister.actRegister) {
        return (
            <Redirect to='/sign-in' />
        )
    }
    return (
        <div className="signup" >
            <form className="form-signup">
                <h3>Đăng ký</h3>
                <div className="form-group-signup signup-email">
                    <label className="label label-email">Email</label>
                    {errEmail ? <Validate text = 'Email không tồn tại' valiClassName='invalid-email'/> : <div></div>}
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Nhập email" 
                        onChange={onChangeEmail}
                    />
                </div>
                <div className="form-group-signup signup-username">
                    <label className= "label label-username">Tên đăng nhập</label>
                    {errUsername ? <Validate text = 'Tên đăng nhập không đúng' valiClassName='invalid-username'/> : <div></div>}
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Tên đăng nhập" 
                        onChange={onChangeUsername}
                    />
                </div>
                <div className="form-group-signup signup-password">
                    <label className = "label label-password">Mật khẩu</label>
                    {errPassword ? <Validate text = 'Mật khẩu không đúng' valiClassName='invalid-password'/> : <div></div>}
                    <input 
                        type="password"
                        className="form-control" 
                        placeholder="Mật khẩu" 
                        onChange={OnChangePassword}
                    />
                </div>
                {infoRegister.err ? <Error text="Tài khoản email đã tồn tại"/> : <div></div> }
                <button 
                    type="submit" 
                    className="btn btn-primary btn-block" 
                    style={{ width: '300px', margin: '0 auto', marginBottom: '20px'}}
                    onClick={onRegisterAcount}
                >
                    Đăng ký
                </button>
            </form>
        </div>
    );
}
export default SignUp;