import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { loginUser } from '../../_actions/user_action';
import { KAKAO_AUTH_URL } from '../../modules/KakaoAuth';
import { IoIosArrowDropleft } from "react-icons/io";

function LoginPage(props) {
    const { naver } = window;
    const location = useLocation();
    const NAVER_CALLBACK_URL = 'http://localhost:3000/';
    const NAVER_CLIENT_ID = 'qDUWI81FaRtxoY0PrdSP';

    const initializeNaverLogin = () => {
        const naverLogin = new naver.LoginWithNaverId({
            clientId: NAVER_CLIENT_ID,
            callbackUrl: NAVER_CALLBACK_URL,
            isPopup: false,
            loginButton: { color: 'green', type: 3, height: '40' },
        });
        naverLogin.init();
    };

    const getNaverToken = () => {
        if (!location.hash) return;
        const token = location.split('#')[1].hash.split('=')[1].split('&')[0];
        console.log(token);
    };

    useEffect(() => {
        initializeNaverLogin();
        getNaverToken();
    }, []);

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [formErrorMessage, setFormErrorMessage] = useState('')

    return (
        <Formik
            initialValues={{
                email: '',
                password: ''
            }}
            validationSchema={Yup.object().shape({
                email: Yup.string()
                    .email('이메일이 입력되지 않았어요.')
                    .required('이메일을 입력하세요.'),
                password: Yup.string()
                    .min(6, '비밀번호는 6자 이상 입력해야 해요.')
                    .required('비밀번호를 입력하세요.')
            })}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    let dataToSubmit = {
                        email: values.email,
                        password: values.password
                    };

                    dispatch(loginUser(dataToSubmit))
                        .then(response => {
                            if(response.payload.loginSuccess) {
                                window.localStorage.setItem('userId', response.payload.userId)
                                //navigate('/')
                                window.location.href ='/'
                            } else {
                                setFormErrorMessage('이메일과 비밀번호를 확인해주세요.')
                            }
                        })
                        .catch(err => {
                            setFormErrorMessage('이메일과 비밀번호를 확인해주세요.')
                            setTimeout(() => {
                                setFormErrorMessage('')
                            }, 3000);
                        });
                        setSubmitting(false);
                }, 500);
            }}
            >

            {props => {
                const {
                    values,
                    touched,
                    errors,
                    dirty,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    handleReset
                } = props;
                return (
                    <div className='app'>
                            <div className='backBtn'>
                                <a href='/'><IoIosArrowDropleft size="35" color='C2C4B6'/></a>
                            </div>
                        <div className='inputForm'>
                            <h1>로그인</h1>
                            <form onSubmit={handleSubmit} >
                                <div className='infoForm'>
                                    <input
                                        id='email'
                                        type='email'
                                        placeholder='이메일'
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={
                                            errors.email && touched.email ? 'text-input error' : 'text-input'
                                        }
                                        />
                                        {errors.email && touched.email && (<div className="input-feedback">{errors.email}</div>)}
                                </div>
                                <div className='infoForm'>
                                    <input
                                        id='password'
                                        type='password'
                                        placeholder='비밀번호'
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={
                                            errors.password && touched.password ? 'text-input error' : 'text-input'
                                        }
                                        />
                                        {errors.password && touched.password && (<div className="input-feedback">{errors.password}</div>)}
                                    
                                </div>
                                {formErrorMessage && (<label><p style={{ color: '#ff0000bf', fontSize: '0.7rem', border: '1px solid', padding: '1rem', borderRadius: '10px' }}>{formErrorMessage}</p></label>)} 
                                <div className='socialLogin'>
                                    <p id='kakaoIdLogin'><a href={KAKAO_AUTH_URL} style={{ textDecorationLine: 'none' }}>카카오 로그인</a></p>
                                    <p id='naverIdLogin'></p>
                                    <p id='facebookIdLogin'><a>페이스북 로그인</a></p>
                                </div>
                                <div>
                                    <button className='submitBtn' type='submit' disabled={isSubmitting} onSubmit={handleSubmit}>로그인</button>
                                </div>
                                <div>
                                    <a className='findPassword' >비밀번호 찾기</a>
                                    <br />
                                    <span className='move2register'>
                                    계정이 없다면? <a href='/register' >이메일로 회원가입</a>
                                    </span>
                                </div>
                            </form>
                        </div>
                    </div>
                )
            }}    
        </Formik>        
    )
}

export default LoginPage