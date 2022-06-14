import React, { useState, useEffect } from 'react';
import axios from 'axios';
import style from './Modal.module.css';
import { AiOutlineCloseCircle } from "react-icons/ai";


function AdoptDetailModal(props) {
    const { setIsVisible, itemList, closeModal  } = props

    return (
        <div className={style.madalDetail}>
            <a onClick={closeModal}><AiOutlineCloseCircle size="30"/></a>
            <div className={style.detailList}>
            <img src={itemList.popfile} />
            <div className={style.detail}>
                <div className={style.listLeft}>
                    <span><b>상태</b> {itemList.processState}</span>
                    <span><b>구조날짜</b> {itemList.happenDt}</span>
                    <span><b>구조위치</b> {itemList.happenPlace}</span>
                    <span><b>특징</b> {itemList.specialMark}</span>
                    <span><b>보호소 이름</b> {itemList.careNm}</span>
                    <span><b>보호소 주소</b> {itemList.careAddr}</span>
                    
                </div>
                <div className={style.listRight}>
                    <span><b>공고번호</b> {itemList.desertionNo}</span>
                    <span><b>종</b> {itemList.kindCd}</span>
                    <span><b>성별</b> {itemList.sexCd}</span>
                    <span><b>색상</b> {itemList.colorCd}</span>
                    <span><b>나이</b> {itemList.age}</span>
                    <span><b>몸무게</b> {itemList.weight}</span>
                    <span><b>중성화 여부</b> {itemList.neuterYn}</span>
                    <span><b>보호소 번호</b> {itemList.careTel}</span>
                </div>
            </div>          
            </div>
        </div>
    )
}

export default AdoptDetailModal