import React, { useEffect, useState } from "react";
import style from './Map.module.css'

const { kakao } = window

const Map = () => {
    const [Places, setPlaces] = useState([])
    const [InputText, setInputText] = useState('')
    const [Place, setPlace] = useState('')
    
    const onChange = (e) => {
        setInputText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setPlace(InputText+'동물병원')
        setInputText('')
    }

    useEffect(() => {
        var infowindow = new kakao.maps.InfoWindow({ zIndex: 0 })
        const container = document.getElementById('map')
        
        const options = {
            center: new kakao.maps.LatLng(33.450701, 126.570667),
            level: 3
        }
        const map = new kakao.maps.Map(container, options)
        const ps = new kakao.maps.services.Places()

        ps.keywordSearch(Place, placesSearchCB)

        function placesSearchCB(data, status, pagination) {
            if (status === kakao.maps.services.Status.OK) {
                let bounds = new kakao.maps.LatLngBounds()
        
                for (let i = 0; i < data.length; i++) {
                    displayMarker(data[i])
                    bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x))
                }
                map.setBounds(bounds)
                displayPagination(pagination)
                setPlaces(data)
                }
            }
    
            function displayPagination(pagination) {
                var paginationEl = document.getElementById('pagination'),
                    fragment = document.createDocumentFragment(), i
                // 기존에 추가된 페이지 번호 삭제
                while (paginationEl.hasChildNodes()) {
                    paginationEl.removeChild(paginationEl.lastChild)
                }

                for (i = 1; i <= pagination.last; i++) {
                    var el = document.createElement('a')
                    el.href = '#'
                    el.innerHTML = i

                    if (i === pagination.current) {
                        el.className = style.on
                    } else {
                    el.onclick = (function (i) {
                        return function () {
                        pagination.gotoPage(i)
                    }
                    })(i)
                    }
                    fragment.appendChild(el)
                }
                paginationEl.appendChild(fragment)
            }

            function displayMarker(place) {
                let marker = new kakao.maps.Marker({
                map: map,
                position: new kakao.maps.LatLng(place.y, place.x),
                })
        
                kakao.maps.event.addListener(marker, 'mouseover', function () {
                infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>')
                infowindow.open(map, marker)
                })
            }
        },[Place])
    return (
        <div className={style.mapDetail}>
            <h2>동물병원 조회</h2>
            <div className={style.mainMap}>
                
                <div className={style.mapContainer}>
                    <div className={style.searchDiv}>
                        <input onChange={onChange} value={InputText} placeholder='원하시는 지역(시/군/구)을 입력하세요.' />
                        <button onClick={handleSubmit}>검색</button>
                    </div>
                    <div id="map" className={style.searchMap}
                        style={{
                            width: '700px',
                            height: '500px',
                            }}
                    ></div>
                    </div>
                    <div className={style.resultList}>
                    {Places.map((item, i) => (
                        <div className={style.listR} key={i}>
                            <span className={style.indexNum}>{i + 1}</span>
                            <span className={style.indexTitle}>{item.place_name}</span>
                            <div className={style.addressDiv}>
                                    {item.road_address_name ? (
                                        <p><span>도로명주소</span> {item.road_address_name}</p>
                                    ) : (
                                    <p><span>지번주소</span>{item.address_name}</p>
                                    )}
                                    <p className={style.phoneNum}><span>전화번호</span> {item.phone}</p>
                            </div>
                        </div>
                    ))}
                    </div>
                    <div id="pagination" className={style.pagination}></div>
                </div>
        </div>

    )
}

export default Map