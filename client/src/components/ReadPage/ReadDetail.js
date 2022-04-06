import { Button } from 'antd';
import React from 'react';

function ReadDetail() {
    return (
        <div>
            <h2>카테고리 이름</h2>
            <section>
                <table>
                    <tbody>
                        <tr>
                            <td>작성자</td>
                            <td>김선</td>
                            <td>등록일</td>
                            <td>2022.04.04</td>
                            <td>조회수</td>
                            <td>3</td>
                            <td>댓글</td>
                            <td>6</td>
                            <td>반응</td>
                            <td>12</td>
                        </tr>
                        <tr height="500px">
                            <td colspan="6"></td>
                        </tr>
                    </tbody>
                </table>
                <div>
                    <Button type='primary'>글 목록</Button>
                </div>
                <div>
                    <Button type='primary'>좋아요</Button>
                    <Button type='primary'>추천해요</Button>
                    <Button type='primary'>싫어요</Button>
                </div>
            </section>
            <section>
                <h2>댓글</h2>
            </section>
        </div>
    )
}
/*댓글 : map으로 구현 */

export default ReadDetail