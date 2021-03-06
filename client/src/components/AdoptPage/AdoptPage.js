import React, { useState, useEffect } from 'react';
import axios from 'axios';
import style from './Adopt.module.css';
import AdoptDetailModal from './AdoptDetailModal';

function AdoptPage() {
    const initialRegionOption ={ id: 0, label: "지역 선택" }
    const RegionOptions = [
        { id: 1, value: '6110000', label: "서울" },
        { id: 2, value: '6280000', label: "인천" },
        { id: 3, value: '6300000', label: "대전" },
        { id: 4, value: '6270000', label: "대구" },
        { id: 5, value: '6290000', label: "광주" },
        { id: 6, value: '6260000', label: "부산" },
        { id: 7, value: '6310000', label: "울산" },
        { id: 8, value: '5690000', label: "세종" },
        { id: 9, value: '6410000', label: "경기" },
        { id: 10, value: '6420000', label: "강원" },
        { id: 11, value: '6430000', label: "충북" },
        { id: 12, value: '6440000', label: "충남" },
        { id: 13, value: '6470000', label: "경북" },
        { id: 14, value: '6480000', label: "경남" },
        { id: 15, value: '6450000', label: "전북" },
        { id: 16, value: '6460000', label: "전남" },
        { id: 17, value: '6500000', label: "제주" },
    ]
    const [SelectedRegion, setSelectedRegion] = useState("")
    const [SelectKind, setSelectKind] = useState("")
    const [SelectedNextPage, setSelectedNextPage] = useState("")
    const [SelectedPrevPage, setSelectedPrevPage] = useState("")
    const [Page, setPage] = useState(1)
    const [Filter, setFilter] = useState({
        region: "",
        kind: ""
    })
    const [AnimalList, setAnimalList] = useState([])
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

        var config = {headers: {'Accept': '*/*'}}
        var url = `https://cors-anywhere.herokuapp.com/http://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?upkind=${Filter.kind}&upr_cd=${Filter.region}&pageNo=${Page}&numOfRows=20&serviceKey=YazNzI%2BG5V9YUVi8ow7kRmx82dJPZWZCN3%2FH%2Boy3xAqh1DOiPfZ663FLDjpKjKXJN6Yvn4ko6WyQylHbETYyjA%3D%3D&_type=json`
        axios.get(url, config)
            .then((res) => {
                console.log(res.data.response.body.items)
                setAnimalList(res.data.response.body.items)
            })
    }, [Filter.kind, Filter.region, Page])

    
    const handleSubmit = (e) => {
        e.preventDefault();
        setFilter({
            region: SelectedRegion,
            kind: SelectKind
        })
    }

    const handleKindChangeOption = (e) => {
        setSelectKind(e.target.value)
        console.log(SelectKind)
    }
    const handleChangeOption = (e) => {
        setSelectedRegion(e.target.value)
        console.log(SelectedRegion)
    }

    const handleNextPage = (e) => {
        setSelectedNextPage(e.target.value)
        setPage(Page + 1)
        console.log(SelectedNextPage)
    }

    const handlePrevPage = (e) => {
        setSelectedPrevPage(e.target.value)
        if(Page > 1) {
            setPage(Page - 1)
        }
        console.log(SelectedPrevPage)
    }


    return (
        <div className={style.mainDiv}>
            <h2>보호중인 유기동물 조회</h2>
            <section>
            <div className={style.selectDiv}>
                <select className={style.selectRegion} onChange={handleChangeOption} value={SelectedRegion} style={{width: 120}}>
                <option value={initialRegionOption}>{initialRegionOption.label}</option>
                    {RegionOptions.map((option) => (
                        <option key={option.id} value={option.value}>{option.label}</option>
                    ))}
                </select>
            </div>
            <div className={style.adoptMenuSort}>
                <div className={style.sort1}>
                    <input id='menuSort1' type='radio' name='kind' value="417000" onChange={handleKindChangeOption} />
                    <label htmlFor='menuSort1'>강아지</label>
                </div>
                <div className={style.sort2}>
                    <input id='menuSort2' type='radio' name='kind' value="422400" onChange={handleKindChangeOption} />
                    <label htmlFor='menuSort2'>고양이</label>
                    <input type='button' onClick={handleSubmit} className={style.submitCheck}value='선택' />
                </div>
            </div>
            </section>
            <div className={style.pageBar}>
                <button className={style.prevBtn} onClick={handlePrevPage}>이전페이지</button>
                <button className={style.nextBtn} onClick={handleNextPage}>다음페이지</button>
            </div>
            <div className={style.resultSection}>
            {AnimalList.item?.map((item, index) => {
                return (
                        <ul key={index} className={style.animalList}>
                            <li>
                                <div className={style.oneAnimal} onClick={() => onSetIsVisible(item)}>
                                    <img src={item.popfile} alt="image" />
                                    <div className={style.oneAnimalContent}>
                                        <span><a className={style.contentAnimalState}>{item.processState}</a></span>
                                        <span className={style.contentAnimal}>품종: {item.kindCd}</span>
                                        <span className={style.contentAnimal}>공고시작: {item.noticeSdt}</span>
                                        <span className={style.contentAnimal}>공고종료: {item.noticeEdt}</span>
                                        <span className={style.contentAnimal}>보호소: {item.careNm}</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                )
            })
            }
            <div>
                { isVisible && (
                    <AdoptDetailModal setIsVisible={setIsVisible} closeModal={closeModal} itemList={SelectedList}/>
                )}
            </div>
            </div>
        </div>
    )
}

export default AdoptPage