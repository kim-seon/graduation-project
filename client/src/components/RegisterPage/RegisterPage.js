import React, {useState} from 'react';
import moment from 'moment'
import { Formik } from 'formik';
import * as Yup from 'yup';
import { registerUser } from '../../_actions/user_action';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


function RegisterPage(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const [ShowInput, setShowInput] = useState(false)

    const handleShowInput = () => {
        setShowInput(true)
    }

    return (
        <Formik
            initialValues={{
                role: 'normal',
                email: '',
                nickname: '',
                password: '',
                confirmPassword: ''
            }}
            validationSchema={Yup.object().shape({
                role: Yup.string()
                    .required('가입 권한을 선택해주세요.'),
                email: Yup.string()
                    .email('이메일 형식으로 입력해주세요.')
                    .required('이메일을 입력하세요.'),
                nickname: Yup.string()
                    .when("role", {
                        is: 'normal',
                        then: Yup.string().required('닉네임을 입력하세요.')
                    })
                    .when("role", {
                        is: 'protection',
                        then: Yup.string().required('보호소 직원 회원은 닉네임에 \'보호소\'가 포함되어야 해요.').matches(/[보호소]/, '단어 \'보호소\'를 포함해주세요.')
                    })                   
                    ,
                password: Yup.string()
                    .min(6, '비밀번호는 6자 이상 입력해야 해요.')
                    .required('비밀번호를 입력하세요.'),
                confirmPassword: Yup.string()
                    .oneOf([Yup.ref('password'), null], '비밀번호와 일치해야 해요.')
                    .required('비밀번호를 확인하세요.')
            })}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    let dataToSubmit = {
                        role: values.role,
                        email: values.email,
                        password: values.password,
                        nickname: values.nickname
                    }

                    dispatch(registerUser(dataToSubmit)).then(response => {
                        if(response.payload.success) {
                            navigate('/login')
                        } else {
                            alert(response.payload.err.errmsg)
                        }
                    })
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
                            <div className='inputForm'>
                                <h1>회원가입</h1>
                                
                                <form onSubmit={handleSubmit} >
                                    <div className='radio_group'>
                                        <div className='radio_group-item item-1'>
                                            <input id='role-0' name='role' type='radio' value='normal' checked={values.role === "normal"} onChange={handleChange} />
                                            <label htmlFor='role-0'>일반회원</label>
                                        </div>
                                        <div className='radio_group-item item-2'>
                                            <input id='role-1' name='role' type='radio' value='protection' checked={values.role === "protection"} onChange={handleChange} />
                                            <label htmlFor='role-1'>보호소 직원</label>
                                        </div>
                                        
                                    </div>
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
                                    <div className='authNumber'>
                                        <button className='emailAuthBtn' onClick={handleShowInput} >인증번호</button>
                                        { ShowInput ? <input className='inputAuthNum' type='text' placeholder='인증번호 입력' style={{ display: 'inline' }} /> : <input className='inputAuthNum' type='text' placeholder='인증번호 입력' style={{ display: 'none' }} /> }
                                        
                                    </div>
                                    <div className='infoForm'>
                                        <input
                                            id='nickname'
                                            type='text'
                                            placeholder='닉네임'
                                            value={values.nickname}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={
                                                errors.nickname && touched.nickname ? 'text-input error' : 'text-input'
                                            }
                                        />
                                        {errors.nickname && touched.nickname && (<div className="input-feedback">{errors.nickname}</div>)}
                                        
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
                                    <div className='infoForm'>
                                        <input
                                            id='confirmPassword'
                                            type='password'
                                            placeholder='비밀번호 확인'
                                            value={values.confirmPassword}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={
                                                errors.confirmPassword && touched.confirmPassword ? 'text-input error' : 'text-input'
                                            }
                                        />
                                        {errors.confirmPassword && touched.confirmPassword && (<div className="input-feedback">{errors.confirmPassword}</div>)}
                                    </div>
                                    <div>
                                        <button className='submitBtn' type='submit' onChange={handleSubmit} disabled={isSubmitting} style={{minWidth: '100%'}}>회원가입</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )
                }}
            </Formik>
    )

}

export default RegisterPage