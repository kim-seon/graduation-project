import React from 'react';
import { Select, Input, Button } from 'antd';

const { Search } = Input;
const { Option } = Select;

function FindPage() {
    return (
        <div>
            <section>
                <h2>살피기</h2>
                <ul>
                    <li>찾고 있어요</li>
                    <li>데리고 있어요</li>
                    <li>만났어요</li>
                </ul>
            </section>
            <section>
                <Select defaultValue='all' style={{width: 90}}>
                    <Option value='all'>전체</Option>
                    <Option value='dog'>강아지</Option>
                    <Option value='cat'>고양이</Option>
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

export default FindPage