import React, { useState } from 'react';
import Axios from 'axios';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../_actions/user_action';

function LoginPage(props) {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [formErrorMessage, setFormErrorMessage] = useState('')


    const { Kakao } = window

    const loginWithKakao = () => {
        console.log('시작')
        Kakao.Auth.authorize({
            redirectUri: 'http://localhost:3000/oauth/kakao'
        })
    }
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
                                navigate('/')
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
                        <section>
                            <h1>로그인</h1>
                        </section>
                        <form style={{ width: '375px' }}>
                            <div>
                                <label>이메일
                                <input
                                    id='email'
                                    type='email'
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={
                                        errors.email && touched.email ? 'text-input error' : 'text-input'
                                    }
                                    />
                                    {errors.email && touched.email && (<div className="input-feedback">{errors.email}</div>)}
                                </label>
                            </div>
                            <div>
                                <label>비밀번호
                                <input
                                    id='password'
                                    type='password'
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={
                                        errors.password && touched.password ? 'text-input error' : 'text-input'
                                    }
                                    />
                                    {errors.password && touched.password && (<div className="input-feedback">{errors.password}</div>)}
                                </label>
                            </div>
                            {formErrorMessage && (<label><p style={{ color: '#ff0000bf', fontSize: '0.7rem', border: '1px solid', padding: '1rem', borderRadius: '10px' }}>{formErrorMessage}</p></label>)} 
                            <div>
                                <a onClick={loginWithKakao}>카카오 로그인</a>
                                <div id='naverIdLogin'></div>
                                <button style={{minWidth: '100%'}}>페이스북 로그인</button>
                            </div>
                            <div>
                                <input type='submit' value='로그인' />
                            </div>
                        
                            <div>
                                <button>비밀번호 찾기</button>
                                <br />
                                계정이 없다면? <a href='/register'>이메일로 회원가입</a>
                            </div>
                        </form>
                    </div>
                )
            }}    
        </Formik>        
    )
}

export default LoginPage