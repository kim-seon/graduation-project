import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Input, Button } from 'antd';

function LoginPage() {
    return (
        <div>
            <h1>로그인</h1>
            <form style={{ width: '375px' }}>
            <Form.Item
                label="아이디"
                name="username"
                rules={[
                {
                    message: 'Please input your username!',
                },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="비밀번호"
                name="password"
                rules={[
                {
                    message: 'Please input your password!',
                },
                ]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item>
                <div>
                    <Button type='primary' style={{ minWidth: '100%' }}>카카오로 로그인</Button>
                    <Button type='primary' style={{ minWidth: '100%' }}>네이버로 로그인</Button>
                    <Button type='primary' style={{ minWidth: '100%' }}>페이스북 로그인</Button>
                </div>
            </Form.Item>
            <Form.Item>
                <div>
                    <Button type='primary' htmlType='submit' className='login-form-button' style={{ minWidth: '100%' }}>로그인</Button>
                </div>
                <a className='login-form-forgot' href='/reset_user'>비밀번호 찾기</a>
                <br/> 계정이 없으신가요? <a href='/register'> 회원가입</a>
            </Form.Item>
            </form>
        </div>
    )
}

export default LoginPage