import React from 'react';
import { FaFacebookF, FaInstagram } from "react-icons/fa";

import makeCarousel from 'react-reveal/makeCarousel';

import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import styled, { css } from 'styled-components';

import slide1 from './../../img/main_photo.jpg';
import slide2 from './../../img/main_photo-2.jpg';
import slide3 from './../../img/main_photo-3.jpg';
import slide4 from './../../img/main_photo-4.jpg';
import slide5 from './../../img/main_photo-5.jpg';
import { motion } from 'framer-motion';

const slides = [
    { id: 0, original: slide1 },
    { id: 1, original: slide2 },
    { id: 2, original: slide3 },
    { id: 3, original: slide4 },
    { id: 4, original: slide5 }
];

const SlideBox = ({ url }) => {
    return (
        <div className='box-img'>
            <img src={url} alt="photo" />
        </div>
    )
}

const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 505vh;
`;
const CarouselUI = ({ children }) => <Container>{children}</Container>;
const Carousel = makeCarousel(CarouselUI);

const Home = () => {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="main">
            <div id="photo">
                <div className='box-img'>
                    <img src={slide3} alt="photo" />
                </div>
                {/* <Carousel defaaultWait={1000}>
                    <Slide>
                        <Fade big>
                            <div className='box-img'>
                                <img src={slide1} alt="photo" />
                            </div>
                        </Fade>
                    </Slide>
                    <Slide>
                        <Fade big>
                            <div className='box-img'>
                                <img src={slide2} alt="photo" />
                            </div>
                        </Fade>
                    </Slide>
                    <Slide>
                        <Fade big>
                            <div className='box-img'>
                                <img src={slide3} alt="photo" />
                            </div>
                        </Fade>
                    </Slide>
                </Carousel> */}
            </div>
            <div className="main_footer">
                <div className="box">
                    <div className="text-name">
                        <p>KARINA KUCHERENKO</p>
                    </div>
                    <div className="text-rules">
                        <span>
                            © 2020 Karina Kucherenko - artist
                    </span>
                    </div>
                    <div className="text-icons">
                        <FaInstagram />
                        <FaFacebookF />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Home
