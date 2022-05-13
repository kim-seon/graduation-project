import React from "react";
import ReactDOM from 'react-dom';

function MainPage() {
    return (
        <div>
        <section>
            <h2>지역 검색</h2>
            <div>
            <input />
            </div>
        </section>
        <section>
            <div>
                <h2>실종 동물 찾기</h2>
                <h3>멘트</h3>
                <button>더보기</button>
            </div>
            <div>
                <div>이미지</div>
                <div>글</div>
            </div>
            <div>
                <div>이미지</div>
                <div>글</div>
            </div>
            <div>
                <div>이미지</div>
                <div>글</div>
            </div>
        </section>
        <section>
            <div>
                <h3>강아지</h3>
                <div>이미지</div>
                <div>이미지</div>
                <div>이미지</div>
            </div>
            <div>
                <h3>고양이</h3>
                <div>이미지</div>
                <div>이미지</div>
                <div>이미지</div>
            </div>
            <div>
                <h2>보호소 동물</h2>
                <h3>멘트</h3>
                <button>더보기</button>
            </div>
        </section>
        <section>
            <div>
                <h3>봉사자 구해요</h3>
                <table>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>제목</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>내용</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <h3>커뮤니티</h3>
                <table>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>제목</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>내용</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
        <section>
            <div>
                <h3>입양 후기</h3>
                <button>더보기</button>
            </div>
            <div>내용</div>
        </section>
        </div>
    )
}

export default MainPage