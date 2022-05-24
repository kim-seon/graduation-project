import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment'


function ReadPage() {
    const [BoardList, setBoardList] = useState([])
    const option = [
        { id: 0, label: "전체" },
        { id: 1, label: "제목" },
        { id: 2, label: "작성자" },
    ]

    useEffect(() => {
        axios.get('/api/write/getContentList')
            .then(response => {
                if(response.data.success) {
                    console.log(response.data.board)
                    setBoardList(response.data.board)
                } else {
                    alert('실패')
                }
            })
    }, [])

    const list = BoardList.map((item, index) => {
        
        return (
            <tr key={item._id}>
                <td>{item.id}</td>
                <td>{item.category}</td>
                <td>{item.title}</td>
                <td>{item?.writer?.nickname}</td>
                <td>{item.viewCount}</td>
                <td>{item.commentCount}</td>
                <td>{moment(item.writeDate).format('YYYY-MM-DD HH:mm')}</td>
            </tr>
        )
    })
    
    return (
        <div>
            <section>
                <h2>카테고리 이름</h2>
                <ul>
                    <li>전체</li>
                    <li>1</li>
                    <li>2</li>
                </ul>
            </section>
            <section>
                <select style={{width:120}}>
                {option.map((option) => (
                    <option key={option.id} value={option.label}>{option.label}</option>
                ))}
                </select>
                <input></input>
                <a href='/basicwrite'>글쓰기</a>
            </section>
            <section>
                <table style={{textAlign: 'center'}}>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>구분</th>
                            <th >제목</th>
                            <th>작성자</th>
                            <th>조회수</th>
                            <th>댓글수</th>
                            <th>등록일</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list}
                    </tbody>
                </table>
            </section>
        </div>
    )
}

export default ReadPage