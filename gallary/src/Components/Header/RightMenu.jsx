import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
        .active {
            color: #ACACAC;
            transition: all .4s;
        }

        a {
            margin-right: 100px;
            transition: all .4s;
        }

        a:hover {
            color: #ACACAC;
            transition: all .4s;
        }

        a:last-child {
            margin-right: 0;
        }
    @media(max-width: 1000px) {
                    display: flex;
                    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
                    flex-flow: column nowrap;
                    background: #2d2d2d;
                    position: fixed;
                    height: 100vh;
                    transition: transform .3s ease-in-out;
                    right: 0;
                    top: 0;
                    z-index: 10;
                    width: 300px;
                    padding-top: 3.5rem;
    }
`;

const RightMenu = ({ open }) => {
    return (
        <Container open={open}>
            <NavLink onClick={!open} exact to='/' activeClassName={'active'}>Главная/Home</NavLink>
            <NavLink onClick={!open} to="/works" activeClassName={'active'}>Работы/Works</NavLink>
            <NavLink onClick={!open} to="/events" activeClassName={'active'}>События/Events</NavLink>
            <NavLink onClick={!open} to="/gallary" activeClassName={'active'}>Галерея/Gallary</NavLink>
            <NavLink onClick={!open} to="/shop" activeClassName={'active'}>Магазин/Shop now</NavLink>
            <NavLink onClick={!open} to="/about" activeClassName={'active'}>Об авторе/About me</NavLink>
            <NavLink onClick={!open} to="/contacts" activeClassName={'active'}>Контакты/Contacts</NavLink>
        </Container>
    )
}

export default RightMenu;
