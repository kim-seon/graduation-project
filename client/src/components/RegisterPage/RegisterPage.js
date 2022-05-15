import React, {useState} from 'react';
import moment from 'moment'
import { Formik } from 'formik';
import * as Yup from 'yup';
import { registerUser } from '../../_actions/user_action';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function RegisterPage(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const RoleOptions = [
        { name: 'role', value: '일반회원' },
        { name: 'role', value: '보호소직원' }
    ]

    const initialRegionOption ={ id: 0, label: "선택" }
    const RegionOptions = [
        { id: 1, label: "서울" },
        { id: 2, label: "인천" },
        { id: 3, label: "대전" },
        { id: 4, label: "대구" },
        { id: 5, label: "광주" },
        { id: 6, label: "부산" },
        { id: 7, label: "울산" },
        { id: 8, label: "세종" },
        { id: 9, label: "경기" },
        { id: 10, label: "강원" },
        { id: 11, label: "충북" },
        { id: 12, label: "충남" },
        { id: 13, label: "경북" },
        { id: 14, label: "경남" },
        { id: 15, label: "전북" },
        { id: 16, label: "전남" },
        { id: 17, label: "제주" },
    ]
    const [SelectedRegion, setSelectedRegion] = useState('')

    const handleChangeOption = (e) => {
        setSelectedRegion(e.target.value)
        console.log(SelectedRegion)
    }
    return (
        <Formik
            initialValues={{
                role: 'normal',
                email: '',
                nickname: '',
                password: '',
                confirmPassword: '',
                region: '선택'
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
                    .required('비밀번호를 확인하세요.'),
                region: Yup.string()
                    .required('거주지역을 선택하세요.')
            })}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    let dataToSubmit = {
                        role: values.role,
                        email: values.email,
                        password: values.password,
                        nickname: values.nickname,
                        region: SelectedRegion
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
                            <section>
                                <h1>회원가입</h1>
                            </section>
                            <form style={{ width: '375px' }} onSubmit={handleSubmit} >
                                <div>
                                    <label><input name='role' type='radio' value='normal' checked={values.role === "normal"} onChange={handleChange} />일반회원</label>
                                    <label><input name='role' type='radio' value='protection' checked={values.role === "protection"} onChange={handleChange} />보호소 직원</label>
                                    
                                </div>
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
                                    /></label>
                                    {errors.email && touched.email && (<div className="input-feedback">{errors.email}</div>)}
                                </div>
                                <div id='authNumber'>
                                    <button  >인증번호</button>
                                    <input id='inputAuthNum' type='number' placeholder='인증번호 입력' />
                                </div>
                                <div>
                                    <label>닉네임
                                    <input
                                        id='nickname'
                                        type='text'
                                        value={values.nickname}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={
                                            errors.nickname && touched.nickname ? 'text-input error' : 'text-input'
                                        }
                                    /></label>
                                    {errors.nickname && touched.nickname && (<div className="input-feedback">{errors.nickname}</div>)}
                                    
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
                                    /></label>
                                    {errors.password && touched.password && (<div className="input-feedback">{errors.password}</div>)}
                                </div>
                                <div>
                                    <label>비밀번호 확인
                                    <input
                                        id='confirmPassword'
                                        type='password'
                                        value={values.confirmPassword}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={
                                            errors.confirmPassword && touched.confirmPassword ? 'text-input error' : 'text-input'
                                        }
                                    /></label>
                                    {errors.confirmPassword && touched.confirmPassword && (<div className="input-feedback">{errors.confirmPassword}</div>)}
                                </div>
                                <div>
                                    <label>거주지역
                                    <select style={{width:120}}
                                        id='selectRegion'
                                        onChange={handleChangeOption}
                                        onBlur={handleBlur}
                                        value={SelectedRegion}
                                        className={
                                            errors.region && touched.region ? 'text-input error' : 'text-input'
                                        }
                                        
                                    >
                                    <option value={initialRegionOption}>{initialRegionOption.label}</option>
                                    {RegionOptions.map((option) => (
                                        <option key={option.id} value={option.label}>{option.label}</option>
                                    ))}
                                    </select></label>
                                    {errors.region && touched.region && (<div className="input-feedback">{errors.region}</div>)}
                                </div>
                                <div>
                                    <button type='submit' onChange={handleSubmit} disabled={isSubmitting} style={{minWidth: '100%'}}>회원가입</button>
                                </div>
                            </form>
                        </div>
                    )
                }}
            </Formik>
    )

}

export default RegisterPage