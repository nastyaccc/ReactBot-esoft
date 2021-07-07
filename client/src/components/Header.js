import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <nav>
        <div className="nav-wrapper indigo">
            <Link to={'/'} className="brand-logo">Тут какой-нибудь лого 🌿</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to={'/shop'}>Магазин</Link></li>
                <li><Link to={'/about'}>О нас</Link></li>
            </ul>
        </div>
    </nav>
)

export default Header;