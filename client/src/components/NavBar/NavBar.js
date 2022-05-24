import React from 'react';
import SignNav from './SignNav';
import style from './NavBar.module.css';
import logo from './images/logo.png'
import mainImage from './images/dogncat.png';

function NavBar() {
    return (
        <div className={style.landingDiv}>
            <div className={style.navMenu}>
                <img src={logo} className={style.logo} />
                <ul className={style.menu}>
                    <li><a href='adopt'>가족되기</a></li>
                    <li><a href='/volunteer'>도움되기</a></li>
                    <li><a href='/map'>준비하기</a></li>
                    <li><a href='find'>살피기</a></li>
                    <li><a href='review'>입양후기</a></li>
                    <li><a href='/community'>잡담하기</a></li>
                </ul>
                <SignNav />
            </div>
            <div>
                <div className={style.landingContent}>
                    <h1>가족이 되어주세요</h1>
                    <div className={style.mainImage}>
                        <img src={mainImage} />
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default NavBar