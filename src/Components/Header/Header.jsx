import React from 'react';
import logo from './../../img/logo.png';
import { NavLink } from 'react-router-dom';
import BurderMenu from './BurderMenu';

const Header = () => {
    return (
        <div className={"header"}>
            <div className="header_menu">
                <div className="img_logo">
                    <NavLink exact to='/'>
                        <div className="logo">
                            <img src={logo} alt="logo"/>
                        </div>

                    </NavLink>
                </div>
                <BurderMenu />
            </div>
        </div>
    )
}

export default Header
