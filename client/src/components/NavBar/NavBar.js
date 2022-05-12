import React from 'react';
import SignNav from './SignNav';

function NavBar() {
    return (
        <div>
            <ul>
                <li><a href='/map'>길잡이</a></li>
                <li><a href='/volunteer'>돌보기</a></li>
                <li><a href='/community'>잡담허가</a></li>
                <li><a href='adopt'>들이기</a></li>
                <li><a href='review'>입양 후기</a></li>
                <li><a href='find'>살피기</a></li>
            </ul>
                <SignNav />
        </div>
    )
}

export default NavBar