import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'

function Basicform() {
    const user = useSelector(state => state.user)
    const navigate = useNavigate()
    const [Content, setContent] = useState('')
    const [Title, setTitle] = useState('')
    const [Image, setImage] = useState([])
    

    
    const addImage = (e) => {
        const selectImageList = e.target.files
        const imageURLList = [...Image]

        for(let i=0; i<selectImageList.length; i++) {
            const nowImageUrl = URL.createObjectURL(selectImageList[i])
            imageURLList.push(nowImageUrl)

        }
        setImage(imageURLList)
    }

    const handleChangeTitle = (e) => {
        setTitle(e.currentTarget.value)
    }

    const handleChangeContent = (e) => {
        setContent(e.currentTarget.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if(user.userData && !user.userData.isAuth) {
            return alert('로그인을 해주세요.')
        }
        if(Title === '' || Content === '') {
            return alert('모든 항목을 입력해주세요.')
        }
        
        const datas = {
            writer: user.userData && user.userData._id,
            title: Title,
            content: Content,
            images: Image
        }

        axios.post('/api/write/writeForm', datas)
            .then(response => {
                if(response.data.success) {
                    alert('글작성 성공')
                    navigate('/simpleread')
                    console.log(response)
                } else {
                    alert('글작성 실패')
                }
            }).catch(e => {
                console.log(e.response)
            })
        }

    return (
        <div>
            <div>
                <h2>카테고리 이름</h2>
                <ul>
                    <li>1</li>
                    <li>2</li>
                </ul>
            </div>
            <div>
            <form onSubmit={onsubmit}>
                <label>제목
                    <input 
                        onChange={handleChangeTitle}
                        value={Title}
                    />
                </label>
                <br/>
                <textarea cols='90' rows='30' style={{resize: 'none'}} 
                    onChange={handleChangeContent}
                    value={Content}
                />
                <br/>
                <label htmlFor='input-file' onChange={addImage}>
                {Image.map((image, id) => (
                    <div key={id}>
                        <img src={image} alt={`${image}-${id}`} width='300' />
                    </div>
                ))}
                <input
                    id='input-file'
                    type='file'
                    multiple='multiple'
                    accept='image/jpg,image/png,image/jpeg'
                />
                </label>
                <div>
                    <button>목록 보기</button>
                    <button onClick={onSubmit}>등록</button>
                </div>
            </form>
            </div>
        </div>
    )
}

export default Basicform