import React, { useState } from 'react';
import style from './Adopt.module.css';

function AdoptPage() {
    const initialRegionOption ={ id: 0, label: "지역 선택" }
    const RegionOptions = [
        { id: 1, label: "서울" },
        { id: 2, label: "인천" },
        { id: 3, label: "대전" },
        { id: 4, label: "대구" },
        { id: 5, label: "광주" },
        { id: 6, label: "부산" },
        { id: 7, label: "울산" },
        { id: 8, label: "세종" },
        { id: 9, label: "경기" },
        { id: 10, label: "강원" },
        { id: 11, label: "충북" },
        { id: 12, label: "충남" },
        { id: 13, label: "경북" },
        { id: 14, label: "경남" },
        { id: 15, label: "전북" },
        { id: 16, label: "전남" },
        { id: 17, label: "제주" },
    ]
    const [SelectedRegion, setSelectedRegion] = useState('')

    const handleChangeOption = (e) => {
        setSelectedRegion(e.target.value)
        console.log(SelectedRegion)
    }

    return (
        <div className={style.mainDiv}>
            <section>
                <h2>보호중인 유기동물 조회</h2>
                <div className={style.adoptMenuSort}>
                <ul className={style.menuSort}>
                    <li>전체</li>
                    <li>강아지</li>
                    <li>고양이</li>
                </ul>
                </div>
            </section>
            <section>
                <select onChange={handleChangeOption} value={SelectedRegion} style={{width: 120}}>
                <option value={initialRegionOption}>{initialRegionOption.label}</option>
                    {RegionOptions.map((option) => (
                        <option key={option.id} value={option.label}>{option.label}</option>
                    ))}
                </select>
            </section>
            <section>
                <ul className={style.animalList}>
                    <li>
                        <div className={style.oneAnimal}>
                            <img src="http://www.animal.go.kr/files/shelter/2022/04/202205231705544.jpg" alt="img" />
                            <div className={style.oneAnimalContent}>
                                <span className={style.contentAnimal}>
                                    푸들
                                </span>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>
        </div>
    )
}

export default AdoptPage