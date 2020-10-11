import styled from 'styled-components'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const Style = styled.div`
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 60px;
    right: 50px;
    z-index: 20;
    display: none;
    opacity: 0;

    @media (max-width: 1493px) {
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
        opacity: 1;
    }

    div {
        width: 2rem;
        height: 0.25rem;
        background-color: ${({ open }) => open ? '#ccc' : '#333'};
        border-radius: 10px;
        transform-origin: 1px;
        transition: all .3s linear;

        &:nth-child(1) {
            transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }

        &:nth-child(2) {
            transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
            opacity: ${({ open }) => open ? 0 : 1}
        }

        &:nth-child(3) {
            transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }

`;


const Container = styled.div`

        .active {
            color: #ACACAC;
            transition: all .4s;
        }

        a {
            margin-right: 40px;
            transition: all .4s;
        }

        a:hover {
            color: #ACACAC;
            transition: all .4s;
        }

        a:last-child {
            margin-right: 0;
        }
    @media(max-width: 1493px) {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
                    flex-flow: column nowrap;
                    background: #E5E5E5;
                    position: fixed;
                    height: 100vh;
                    transition: transform .3s ease-in-out;
                    right: 0;
                    top: 0;
                    z-index: 10;
                    width: 300px;
                    

                    a {
                        font-size: 20px;
                        margin-right: 0px;
                        margin-bottom: 20px;
                    }

                    a:last-child {
                        margin-bottom:0;
                    }
                    
                    
    }
`;


const BurderMenu = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className='main-menu'>
            <Style open={open} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </Style>
            <Container open={open}>
                <NavLink onClick={() => setOpen(!open)} exact to='/' activeClassName={'active'}>Главная/Home</NavLink>
                <NavLink onClick={() => setOpen(!open)} to="/works" activeClassName={'active'}>Работы/Works</NavLink>
                <NavLink onClick={() => setOpen(!open)} to="/events" activeClassName={'active'}>События/Events</NavLink>
                <NavLink onClick={() => setOpen(!open)} to="/gallary" activeClassName={'active'}>Галерея/Gallary</NavLink>
                <NavLink onClick={() => setOpen(!open)} to="/shop" activeClassName={'active'}>Магазин/Shop now</NavLink>
                <NavLink onClick={() => setOpen(!open)} to="/about" activeClassName={'active'}>Об авторе/About me</NavLink>
                <NavLink onClick={() => setOpen(!open)} to="/contacts" activeClassName={'active'}>Контакты/Contacts</NavLink>
            </Container>
        </div>
    )
}

export default BurderMenu;
