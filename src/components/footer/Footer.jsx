import React from 'react';

import './footer.scss';

import { Link } from 'react-router-dom';

import bg from '../../assets/footer-bg.jpg';
import logo from '../../assets/logo.jpg';

const Footer = () => {
    return (
        <div className="footer" style={{backgroundImage: `url(${bg})`}}>
            <div className="footer__content container">
                <div className="footer__content__logo">
                    <div className="logo">
                        <img className='logo' src={logo} alt="" />
                        <Link to="/">NurikGentle</Link>
                    </div>
                </div>
                <div className="footer__content__menus">
                    <div className="footer__content__menu">
                        <Link to="/">Негизги</Link>
                        <Link to="/">Биз Менен Байланыш</Link>
                        <Link to="/">Кызматтар</Link>
                        <Link to="/">Биз Жөнүндө</Link>
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/">Эфир</Link>
                        <Link to="/">Суроо-Жооп</Link>
                        <Link to="/">Премиум</Link>
                        <Link to="/">Жеке Укуктар</Link>
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/">Cөзсүз Көргүлө</Link>
                        <Link to="/">Жакында Эле Чыккандар</Link>
                        <Link to="/">Эң Популярдуулар</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;