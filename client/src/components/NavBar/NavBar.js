import React from 'react';
import SignNav from './SignNav';
import style from './NavBar.module.css';
import logo from './images/logo.png'


function NavBar() {
    return (
        <div>
            <div className={style.navMenu}>
                <img src={logo} className={style.logo} />
                <ul className={style.menu}>
                    <li><a href='adopt'>가족되기</a></li>
                    <li><a href='/volunteer'>도움되기</a></li>
                    <li className={style.readyCategory} ><a href='/map'>준비하기</a></li>
                    <li><a href='find'>살피기</a></li>
                    <li><a href='review'>입양후기</a></li>
                    <li><a href='/community'>잡담하기</a></li>
                </ul>
                <SignNav />
            </div>
        </div>
    )
}

export default NavBar