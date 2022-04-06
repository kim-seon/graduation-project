import React from 'react';
import { Select, Input, Button } from 'antd';

const { Search } = Input;
const { Option } = Select;

function AdoptPage() {
    return (
        <div>
            <section>
                <h2>들이기</h2>
                <ul>
                    <li>전체</li>
                    <li>강아지</li>
                    <li>고양이</li>
                </ul>
            </section>
            <section>
                <Select defaultValue='all' style={{width: 90}}>
                    <Option value='all'>전체</Option>
                    <Option value='title'>제목</Option>
                    <Option value='writer'>작성자</Option>
                </Select>
                <Search placeholder="검색어를 입력해주세요" style={{width: 300}} enterButton />
                <Button type="primary" >글쓰기</Button>
            </section>
            <section>
                <div>이미지</div>
                <div>이미지</div>
                <div>이미지</div>
                <div>이미지</div>
                <div>이미지</div>
                <div>이미지</div>
            </section>
        </div>
    )
}

export default AdoptPage