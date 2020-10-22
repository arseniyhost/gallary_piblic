import React, { useEffect } from 'react';
import Footer from '../Footer/Footer';
import gallary1 from './../../img/gallary/gallary1.JPG';
import gallary2 from './../../img/gallary/gallary2.jpg';
import gallary3 from './../../img/gallary/gallary3.jpg';
import gallary4 from './../../img/gallary/gallary4.jpg';
import { motion } from 'framer-motion';
import Fade from 'react-reveal/Fade';


import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/navigation/navigation.scss';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination]);

const Gallary = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    const setting = [
        { width: 500, itemsToShow: 1 },
        { width: 790, itemsToShow: 2 },
        { width: 1200, itemsToShow: 3 },
        { width: 1500, itemsToShow: 4 }
    ]
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="gallary">
            <div className="gallary-box">
                <div className="photo-gallary">
                </div>
                <div className="main-gallary">
                    <div className="block-img">
                        <img src={gallary2} alt="photo" />
                    </div>
                    <Fade big>
                        <div className="block-about">
                            <div className="box">
                                <img src={gallary1} alt="photo" />
                            </div>
                            <div className="box-text">
                                <div className="text">
                                    <p>Vera Tsepkova, educated as an international economist
                                    and a certified translator
                                    of German and French languages, nowadays - young mother who
                            found her destiny in arts.</p>
                                    <p>
                                        Using paints and palette knives, she manages to
                                        transfer the beauty and shades of natural in particularly
                                        special ways: lightly, bravely, unobtrusively. Observing
                                        her works, one fleetingly catches a thought that the beauty
                                around us does in fact save the world. </p>
                                    <p>The painting are done in a style of abstract expressionism
                                    -  which liberates mind from any control of intellect
                                    and logical principles, settles its aim for the artist
                                    to express spontaneously, his mind in absolutely chaotic,
                                    abstract forms. A particular trait of works is a free and
                                    autonomous deposition of paints over a canvas, happening
                                    purely upon the influence psychological and emotional states
                                         of the</p>
                                </div>
                            </div>
                        </div>
                    </Fade>
                    <Fade big>
                        <div className="block-photos">
                            <div className="box">
                                <img src={gallary2} alt="photo" />
                            </div>
                            <div className="box">
                                <img src={gallary3} alt="photo" />
                            </div>
                        </div>
                    </Fade>
                    <Fade big>
                        <div className="img-block">
                            <div className="box-text">
                                <div className="text">
                                    <p>
                                        Vera Tsepkova, educated as an international economist and a
                                        certified translator of German and French languages, nowadays -
                                        young mother who found her destiny in arts.
                                </p>
                                    <p>The painting are done in a style of abstract expressionism -  which
                                    liberates mind from any control of intellect and logical
                                    principles, settles its aim for the artist to express spontaneously,
                                    his mind in absolutely chaotic, abstract forms. A particular trait
                                    of works is a free and autonomous deposition of paints over a
                                    canvas, happening purely upon the influence psychological and
                                    emotional states of the
                          </p>
                                </div>
                            </div>
                            <div className="box">
                                <img src={gallary4} alt="photo" />
                            </div>
                        </div>
                    </Fade>
                    <Fade big>
                        <div className="block-reviews">
                            <h3>reviews/Отзывы</h3>
                            <div className="slider">
                                <Swiper
                                    breakpoints={{
                                        499: {
                                            slidesPerView: 1,
                                            spaceBetweenSlides: 30
                                        },
                                        // when window width is <= 999px
                                        999: {
                                            slidesPerView: 2,
                                            spaceBetweenSlides: 40
                                        },

                                        1200: {
                                            slidesPerView: 3,
                                            spaceBetweenSlides: 60
                                        },
                                    }}
                                    
                                    pagination={{ clickable: true }}
                                    navigation
                                >
                                    <SwiperSlide>
                                        <div className="card">
                                            <img src={gallary1} alt="photo" />
                                            <div className="box">
                                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, eveniet?</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="card">
                                            <img src={gallary1} alt="photo" />
                                            <div className="box">
                                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, eveniet?</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="card">
                                            <img src={gallary1} alt="photo" />
                                            <div className="box">
                                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, eveniet?</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="card">
                                            <img src={gallary1} alt="photo" />
                                            <div className="box">
                                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, eveniet?</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="card">
                                            <img src={gallary1} alt="photo" />
                                            <div className="box">
                                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, eveniet?</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div >
            <Footer />
        </motion.div >
    )
}

export default Gallary;
