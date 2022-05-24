import React from 'react';
import axios from 'axios';
import { USER_SERVER } from '../../Config';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import style from './NavBar.module.css';

function SignNav() {
    const navigate = useNavigate()
    const user = useSelector((state) => state.user)

    const logoutHandler = () => {
        axios.get(`${USER_SERVER}/logout`).then(response => {
            if(response.status === 200) {
                navigate('/');
            } else {
                alert('로그아웃에 실패했어요.')
            }
        });
    };

    if(user.userData && !user.userData.isAuth) {
        return (
            <ul className={style.menu}>
                <li><a href='/login'>로그인</a></li>
                <li><a href='/register'>회원가입</a></li>
            </ul>
        ) 
    } else {
        return (
            <ul className={style.menu}>
                <li><a onClick={logoutHandler}>로그아웃</a></li>
                <li><a>{ user.userData && user.userData.nickname }</a></li>
            </ul>
        )
    }
    
}

export default SignNav