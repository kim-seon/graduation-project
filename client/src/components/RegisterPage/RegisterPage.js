import React from 'react'
import { Form, Input, Button, Radio, Select } from 'antd';

const { Option } = Select;

function RegisterPage() {
    return (
        <div>
            <h1>회원가입</h1>
            <form style={{ width: '375px' }} >
                <Radio.Group>
                    <Radio>일반회원</Radio>
                    <Radio>보호소 직원</Radio>
                </Radio.Group>
                <Form.Item label='이메일' >
                        <Input
                            id='email'
                            type='email'
                        />
                    </Form.Item>
                    <Form.Item label='닉네임'>
                        <Input
                            id='name'
                            type='text'
                        />
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
                    <Form.Item
                        label="비밀번호 확인"
                        name="confirmpassword"
                        rules={[
                        {
                            message: 'Please input your password!',
                        },
                        ]}
                    >
                    <Input.Password />
                    </Form.Item>
                    <Form.Item label="거주지역">
                        <Select>
                            <Option value="">서울</Option>
                            <Option value="">부산</Option>
                            <Option value="">대구</Option>
                            <Option value="">인천</Option>
                            <Option value="">광주</Option>
                            <Option value="">대전</Option>
                            <Option value="">울산</Option>
                            <Option value="">강원</Option>
                            <Option value="">경기</Option>
                            <Option value="">경남</Option>
                            <Option value="">경북</Option>
                            <Option value="">전남</Option>
                            <Option value="">전북</Option>
                            <Option value="">제주</Option>
                            <Option value="">충남</Option>
                            <Option value="">충북</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item>
                        <Button type='primary' style={{ minWidth: '100%' }}>
                            회원가입
                        </Button>
                    </Form.Item>
            </form>
        </div>
    )
}

export default RegisterPage