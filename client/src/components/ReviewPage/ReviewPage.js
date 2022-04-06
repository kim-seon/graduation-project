import React from 'react';
import { Select, Input, Button } from 'antd';

const { Search } = Input;
const { Option } = Select;

function ReviewPage() {
    return (
        <div>
            <section>
                <h2>입양후기</h2>
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
                <table>
                    <thead>
                        <tr>
                            <th>구분</th>
                            <th>제목</th>
                            <th>작성자</th>
                            <th>조회수</th>
                            <th>댓글수</th>
                            <th>등록일</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>수다떨기</td>
                            <td>반가워요~</td>
                            <td>김선</td>
                            <td>3</td>
                            <td>1</td>
                            <td>2일 전</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    )
}

export default ReviewPage