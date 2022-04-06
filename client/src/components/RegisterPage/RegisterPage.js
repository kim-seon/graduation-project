import React from 'react'
import { Form, Input, Button, Radio, Select } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { LockOutlined } from '@ant-design/icons';
import { SmileOutlined } from '@ant-design/icons';
import { EnvironmentOutlined } from '@ant-design/icons';

const { Option } = Select;

function RegisterPage() {
    return (
        <div>
            <h1>회원가입</h1>
            <form style={{ width: '375px' }} >
                <Radio.Group defaultValue={1}>
                    <Radio value={1}>일반회원</Radio>
                    <Radio value={2}>보호소 직원</Radio>
                </Radio.Group>
                <Form.Item>
                        <Input
                            id='email'
                            type='email'
                            placeholder='이메일'
                            prefix={<UserOutlined/>}
                            required
                        />
                    </Form.Item>
                    <Form.Item>
                        <Input
                            id='nickname'
                            type='text'
                            prefix={<SmileOutlined/>}
                            placeholder='닉네임'
                        />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                        {
                            message: '비밀번호를 입력해주세요.',
                        },
                        ]}
                    >
                    <Input.Password
                        placeholder='비밀번호'
                        prefix={<LockOutlined/>}
                    />
                    </Form.Item>
                    <Form.Item
                        name="confirmpassword"
                        rules={[
                        {
                            message: '비밀번호를 입력해주세요.',
                        },
                        ]}
                    >
                    <Input.Password
                        placeholder='비밀번호 학인'
                        prefix={<LockOutlined/>}
                    />
                    </Form.Item>
                    <Form.Item>
                        <Select style={{width: 120}} placeholder='거주지역' >
                            <Option value="1">서울</Option>
                            <Option value="2">부산</Option>
                            <Option value="3">대구</Option>
                            <Option value="4">인천</Option>
                            <Option value="5">광주</Option>
                            <Option value="6">대전</Option>
                            <Option value="7">울산</Option>
                            <Option value="8">강원</Option>
                            <Option value="9">경기</Option>
                            <Option value="10">경남</Option>
                            <Option value="11">경북</Option>
                            <Option value="12">전남</Option>
                            <Option value="13">전북</Option>
                            <Option value="14">제주</Option>
                            <Option value="15">충남</Option>
                            <Option value="16">충북</Option>
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