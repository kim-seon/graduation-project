import React from 'react';
import moment from 'moment';
import style from './ReadDetail.module.css';
import { AiOutlineCloseCircle } from "react-icons/ai";

function ReadDetail(props) {
    const { setIsVisible, itemList, closeModal  } = props
    return (
        <div className={style.readDetailModal}>
            <a onClick={closeModal}><AiOutlineCloseCircle size="30"/></a>
            <h3>{itemList.title}</h3>
            <section>
                <table className={style.readList}>
                    <tbody>
                        <tr>
                            <td>작성자</td>
                            <td>{itemList?.writer?.nickname}</td>
                            <td>작성일</td>
                            <td>{moment(itemList.writeDate).format('YYYY.MM.DD')}</td>
                            <td>작성시간</td>
                            <td>{moment(itemList.writeDate).format('HH:mm')}</td>
                            <td>조회수</td>
                            <td>{itemList.viewCount}</td>
                            <td>댓글</td>
                            <td>{itemList.commentCount}</td>
                            <td>반응</td>
                            <td>300</td>
                        </tr>
                    </tbody>
                </table>
                <div className={style.readContent}>
                        {itemList.content}
                </div>
                    <div className={style.menuBottom}>
                        <button className={style.wrList}>글 목록</button>
                        <div>
                            <button className={style.goodBtn}>좋아요</button>
                            <button className={style.badBtn}>싫어요</button>
                        </div>
                    </div>
            </section>
            <section>
                <h3>댓글</h3>
            </section>
        </div>
    )
}
/*댓글 : map으로 구현 */

export default ReadDetail