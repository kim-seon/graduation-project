import React from 'react'

function ReadPage() {
    const option = [
        { id: 0, label: "전체" },
        { id: 1, label: "제목" },
        { id: 2, label: "작성자" },
    ]
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
                <button>글쓰기</button>
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
                            <td>카테고리중</td>
                            <td>안녕하세요</td>
                            <td>선이</td>
                            <td>5</td>
                            <td>2</td>
                            <td>2022-05-02</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    )
}

export default ReadPage