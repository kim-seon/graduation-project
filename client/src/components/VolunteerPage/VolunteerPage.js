import React, { useState, useEffect } from 'react';
import axios from 'axios';
import style from './Voluteer.module.css';

function VolunteerPage() {
    const initialRegionOption ={ id: 0, label: "지역 선택" }
    const initialTypeOption = { id: 0, label: "센터 유형" }
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
    const TypeOptions = [
        { id: 1, label: "개인" },
        { id: 2, label: "단체" },
        { id: 3, label: "법인" },
        { id: 4, label: "동물병원" }
    ]
    const [SelectedRegion, setSelectedRegion] = useState('')
    const [SelectedType, setSelectedType] = useState('')
    const [OrganList, setOrganList] = useState([])

    const handleChangeOption = (e) => {
        setSelectedRegion(e.target.value)
        console.log(SelectedRegion)
    }

    const handleChangeTypeOption = (e) => {
        setSelectedType(e.target.value)
        console.log(SelectedType)
    }

    useEffect(() => {
        var config = {headers: {'Accept': '*/*'}}
        var url = `https://cors-anywhere.herokuapp.com/http://apis.data.go.kr/1543061/animalShelterSrvc/shelterInfo?numOfRows=20&pageNo=1&serviceKey=SutH0Y4nGuUCdZHtSVrjnaRle9CT7Do1j7h9Tv9U7Qi2Ha%2FAHzeSV1MatoUg%2BYb43vFih%2FlHXDNC34l%2B15LfxA%3D%3D&_type=json`
        axios.get(url, config)
            .then((response) => {
                console.log(response.data.response.body.items)
                setOrganList(response.data.response.body.items)
            }).catch(error => console.log(error))
    }, [])

    return (
        <div className={style.mainDiv}>
            <h2>동물보호센터 조회</h2>
            <div>
                <div>

                </div>
                <div>
                    <section className={style.selectList}>
                        <select className={style.selectType} onChange={handleChangeTypeOption} value={SelectedType} style={{width: 120}}>
                                <option value={initialTypeOption}>{initialTypeOption.label}</option>
                                    {TypeOptions.map((option) => (
                                        <option key={option.id} value={option.value}>{option.label}</option>
                                    ))}
                        </select>
                        <select className={style.selectRegion} onChange={handleChangeOption} value={SelectedRegion} style={{width: 120}}>
                            <option value={initialRegionOption}>{initialRegionOption.label}</option>
                                {RegionOptions.map((option) => (
                                    <option key={option.id} value={option.value}>{option.label}</option>
                                ))}
                        </select>
                    </section>
                    <table className={style.listTabel}>
                        <thead>
                            <tr>
                                <th>센터명</th>
                                <th>센터유형</th>
                                <th>지역</th>
                            </tr>
                        </thead>
                        <tbody>
                            {OrganList.item?.map((item, index) => {
                                return (
                                    <tr className={style.bodyTr} key={index}>
                                        <td>{item.careNm}</td>
                                        <td>{item.divisionNm}</td>
                                        <td>{item.orgNm}</td>
                                    </tr>
                                )
                                })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default VolunteerPage