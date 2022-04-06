import React from 'react';
import { Form, Input, Button } from 'antd';
import Editor from './EditorComponent';

function Basicform() {
    return (
        <div>
            <section>
                <h2>카테고리 이름</h2>
                <ul>
                    <li>1</li>
                    <li>2</li>
                </ul>
            </section>
            <form>
                <Form.Item
                    label="제목"
                >
                <Input />
                </Form.Item>
                <Editor />
                <Button type='primary'>목록 보기</Button>
                <Button type='primary'>등록</Button>
            </form>
        </div>
    )
}

export default Basicform