import React from "react";
import ReactDOM from 'react-dom';
import style from './Main.module.css'
import adoptLogo from './image/adoptLogo.png'

function MainPage() {
    return (
        <div>
        <section className={style.boardAdopt}>
            <div className={style.boardAdoptMent}>
                <div className={style.boardAdoptMentLeft}>
                    <img src={adoptLogo} className={style.adoptLogo} />
                    <p>
                        지난해 유기동물은 11만6,984건으로 12만건에 육박한다고 해요.
                    </p>
                    <p>
                        그 중 강아지 8만4,136건(71.9%), 고양이는 3만1,421건(26.9%)으로<br/>
                        많은 강아지와 고양이가 유기되고 있어요,
                    </p>
                    <p>
                        그렇게 보호소에 구조된 아이들은<br/>
                        10일의 공고기간이 지나면 진행되는 안락사로 10마리 중 4마리(41.5%)가 사망해요.
                    </p>
                </div>
            </div>
        </section>
        <section className={style.boardWhere}>
            <div className={style.boardWhereMent}>
                <div className={style.boardWhereMentRight}>
                    <h2>주변에 있는 동물보호소를 찾아보세요.</h2>
                    <p>도움이 필요한 보호소에게 힘이 되어주세요.</p>
                    <button>찾아보기</button>
                </div>
            </div>
        </section>
        <section className={style.boardMap}>
            <div className={style.boardMapMent}>
                <div className={style.boardMapMentLeft}>
                    <h3>나의 반려동물을 위해 검진을 해주세요.</h3>
                    <p>주변에 있는 동물병원 찾기</p>
                    <input />
                </div>
                <div className={style.boardMapMentRight}>
                    <h3>나의 반려동물에게 등록은 필수예요.</h3>
                    <p>주변에 있는 동물등록업체 찾기</p>
                    <input />
                </div>
            </div>
        </section>
        <section className={style.boardReview}>
            <div className={style.boardReviewMent}>
                <div className={style.boardReviewMentLeft}>
                    <span className={style.boardReviewPreview}>입양후기 내용</span>
                </div>
                <div className={style.boardReviewMentRight}>
                    <h3>가족이 된 후기를 공유해주세요.</h3>
                    <p>입양후기를 남겨주세요.</p>
                    <button>더보기</button>
                </div>

            </div>
        </section>
        </div>
    )
}

export default MainPage