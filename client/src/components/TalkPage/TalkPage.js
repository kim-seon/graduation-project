import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import style from './Talk.module.css';
import ReadDetail from '../ReadPage/ReadDetail'

function TalkPage() {
    const [BoardList, setBoardList] = useState([])
    const option = [
        { id: 0, label: "전체" },
        { id: 1, label: "제목" },
        { id: 2, label: "작성자" },
    ]

    const [isVisible, setIsVisible] = useState(false);
    const [SelectedList, setSelectedList] = useState(null)

    const onSetIsVisible = (list) => {
        setIsVisible(true);
        setSelectedList(list);
    };

    const closeModal = (e) => {
        e.preventDefault();
        setSelectedList(null);
        setIsVisible(false);
    };


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

    
    return (
        <div className={style.fullDiv}>
            <h2>잡담하기</h2>
            <div className={style.talkMenu}>
                <div className={style.talkMenuLeft}>
                    <select className={style.searchSelect}>
                        {option.map((option) => (
                            <option key={option.id} value={option.label}>{option.label}</option>
                        ))}
                    </select>
                    <input/>
                </div>
                <div className={style.talkMenuRight}>
                    <a href='/basicwrite'>글쓰기</a>
                </div>
                
            </div>
            <div>
                <table className={style.readList}>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>제목</th>
                            <th>작성자</th>
                            <th>조회수</th>
                            <th>댓글수</th>
                            <th>등록일</th>
                        </tr>
                    </thead>
                    <tbody>
                        {BoardList.map((item, index) => {
                            return (
                                <tr key={item._id} onClick={() => onSetIsVisible(item)}>
                                    <td>{index+1}</td>
                                    <td>{item.title}</td>
                                    <td>{item?.writer?.nickname}</td>
                                    <td>{item.viewCount}</td>
                                    <td>{item.commentCount}</td>
                                    <td>{moment(item.writeDate).format('YYYY-MM-DD HH:mm')}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <div>
                { isVisible && (
                    <ReadDetail setIsVisible={setIsVisible} closeModal={closeModal} itemList={SelectedList}/>
                )}
            </div>
        </div>
    )
}

export default TalkPage