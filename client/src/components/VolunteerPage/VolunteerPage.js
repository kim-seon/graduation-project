import React, { useState, useEffect } from 'react';
import axios from 'axios';
import style from './Voluteer.module.css';

const { kakao } = window

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
    const [isVisible, setIsVisible] = useState(false);
    const [SelectedList, setSelectedList] = useState(null)

    const onSetIsVisible = (list) => {
        setIsVisible(true);
        setSelectedList(list);
    };
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
        var url = `https://cors-anywhere.herokuapp.com/http://apis.data.go.kr/1543061/animalShelterSrvc/shelterInfo?numOfRows=315&serviceKey=YazNzI%2BG5V9YUVi8ow7kRmx82dJPZWZCN3%2FH%2Boy3xAqh1DOiPfZ663FLDjpKjKXJN6Yvn4ko6WyQylHbETYyjA%3D%3D&_type=json`
        axios.get(url, config)
            .then((response) => {
                console.log(response.data.response.body.items)
                setOrganList(response.data.response.body.items)
            }).catch(error => console.log(error))
    }, [])

    useEffect(() => {
        if(SelectedList) {
            var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 })
            var mapContainer = document.getElementById('myMap'),
            mapOption = {
                center: new kakao.maps.LatLng(33.450701, 126.570667),
                level: 2
            };
            var map = new kakao.maps.Map(mapContainer, mapOption); 
            var geocoder = new kakao.maps.services.Geocoder();
            // 주소로 좌표를 검색합니다
            geocoder.addressSearch(SelectedList.careAddr, function(result, status) {
                if (status === kakao.maps.services.Status.OK) {
                    var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
                    var marker = new kakao.maps.Marker({
                        map: map,
                        position: coords
                    });
                infowindow.setContent('<div style="text-align:center;font-size:13px;padding:6px">' + SelectedList.careNm + '</div>')
                infowindow.open(map, marker);
                map.setCenter(coords);
                }
            });
        }
    }, [SelectedList])

    return (
        <div className={style.fullDiv}>
            <h2>동물보호센터 조회</h2>
            <div className={style.mainDiv}>
                <div className={style.mapDetail}>
                    <div id='myMap' className={style.map} style={{width: '90%', height: '60%'}}></div>
                    {isVisible && 
                        <div className={style.listV}>
                            <p><b>센터 구분</b> {SelectedList.divisionNm}</p>
                            <p><b>센터 이름</b> {SelectedList.careNm}</p>
                            <p><b>센터 주소</b> {SelectedList.careAddr}</p>
                            <p><b>센터 번호</b> {SelectedList.careTel}</p>
                        </div>
                    }
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
                                    <tr className={style.bodyTr} key={index} onClick={() => onSetIsVisible(item)}>
                                        <td>{item.careNm}</td>
                                        <td>{item.divisionNm}</td>
                                        <td>{item.orgNm}</td>
                                    </tr>
                                )
                                })}
                        </tbody>
                    </table>
                    </section>
                    
                </div>
            </div>
        </div>
    )
}

export default VolunteerPage