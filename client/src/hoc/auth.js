import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { auth } from '../_actions/user_action';

// eslint-disable-next-line import/no-anonymous-default-export
export default function (SpecificComponent, option, adminRoute = null) {
    //null    =>  아무나 출입이 가능한 페이지
    //true    =>  로그인한 유저만 출입이 가능한 페이지
    //false   =>  로그인한 유저는 출입 불가능한 페이지
    
    function AuthenticationCheck(props) {
        const dispatch = useDispatch();
        const navigate = useNavigate();

        useEffect(() => {
            dispatch(auth()).then(response => {
                if(!response.payload.isAuth) {
                    if(option) navigate('/login');
                } else {
                    if(adminRoute) {
                        navigate('/');
                    } else {
                        if(option === false) {
                            navigate('/');
                        }
                    }
                }
            })
        })
        return (
            <SpecificComponent />
        )
    }
    return AuthenticationCheck
}