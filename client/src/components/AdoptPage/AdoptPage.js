import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
    const [SelectKind, setSelectKind] = useState('')
    const [SubmitResult, setSubmitResult] = useState({
        region: "",
        kind: ""
    })
    const [FilteringList, setFilteringList] = useState(false)

    const handleKindChangeOption = (e) => {
        setSelectKind(e.target.value)
        console.log(SelectKind)
    }
    const handleChangeOption = (e) => {
        setSelectedRegion(e.target.value)
        console.log(SelectedRegion)
    }

    const [AnimalList, setAnimalList] = useState([])

    useEffect(() => {
        axios.get('/api/adopts/animalList')
            .then(response => {
                if(response.data.success) {
                    console.log(response.data.obj.response.body.items)
                    setAnimalList(response.data.obj.response.body.items)
                } else {
                    alert('실패')
                }
            })
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitResult({
            region: SelectedRegion,
            kind: SelectKind
        })
        setFilteringList(true)
        console.log(SubmitResult)
    }


    return (
        <div className={style.mainDiv}>
            <form onSubmit={handleSubmit}>
            <h2>보호중인 유기동물 조회</h2>
                <div className={style.selectDiv}>
                <select onChange={handleChangeOption} value={SelectedRegion} style={{width: 120}}>
                <option value={initialRegionOption}>{initialRegionOption.label}</option>
                    {RegionOptions.map((option) => (
                        <option key={option.id} value={option.label}>{option.label}</option>
                    ))}
                </select>
                </div>
            <section>
                <div className={style.adoptMenuSort}>
                    <div className={style.sort1}>
                        <input id='menuSort1' type='radio' name='kind' value="개" onChange={handleKindChangeOption} />
                        <label htmlFor='menuSort1'>강아지</label>
                    </div>
                    <div className={style.sort2}>
                        <input id='menuSort2' type='radio' name='kind' value="고양이" onChange={handleKindChangeOption} />
                        <label htmlFor='menuSort2'>고양이</label>
                        <input type='submit' onClick={handleSubmit} className={style.submitCheck}value='선택' />
                    </div>
                </div>
            </section>
            </form>
            <section className={style.resultSection}>
            {AnimalList.item?.filter((item) => {
                if(SubmitResult.region === "" && SubmitResult.kind === "") {
                    return {item}
                } else if(FilteringList===true && item.noticeNo.includes(SubmitResult.region) && item.kindCd.includes(SubmitResult.kind)) {
                    return {}
                }
            })?.map((item, index) => {
                return (
                        <ul key={index} className={style.animalList}>
                            <li>
                                <div className={style.oneAnimal}>
                                    <img src={item.popfile} alt="image" />
                                    <div className={style.oneAnimalContent}>
                                        <span className={style.contentAnimal}>상태: {item.processState}</span>
                                        <span className={style.contentAnimal}>품종: {item.kindCd}</span>
                                        <span className={style.contentAnimal}>공고시작: {item.noticeSdt}</span>
                                        <span className={style.contentAnimal}>공고종료: {item.noticeEdt}</span>
                                        <span className={style.contentAnimal}>보호소: {item.careNm}</span>
                                        <span className={style.contentAnimal}>보호소: {item.noticeNo}</span>
                                        <span className={style.contentAnimal}>보호소: {item.kindCd}</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                )
            })
            }
            </section>
        </div>
    )
}

export default AdoptPage