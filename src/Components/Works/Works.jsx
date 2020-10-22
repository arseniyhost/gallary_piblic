import React from 'react';
import works_1 from './../../img/works/works_1.jpg';
import works_2 from './../../img/works/works_2.jpg';
import works_3 from './../../img/works/works_3.jpg';
import works_4 from './../../img/works/works_4.jpg';
import main from './../../img/works/main.jpg';
import block_1 from './../../img/works/block_1.jpg';
import box_1 from './../../img/works/box_1.jpg';
import box_2 from './../../img/works/box_2.jpg';
import box_3 from './../../img/works/box-2_1.jpg';
import box_4 from './../../img/works/block-2_2.jpg';
import sea_1 from './../../img/works/sea_1.jpg';
import sea_2 from './../../img/works/sea_2.jpg';
import works_5 from './../../img/works/works5.jpg';
import works_6 from './../../img/works/works6.jpg';
import works_7 from './../../img/works/works7.jpg';
import works_77 from './../../img/works/works7_1.jpg';
import works8 from './../../img/works/works8_1.jpg';
import works8_1 from './../../img/works/works8.jpg';
import sky1 from './../../img/works/sky1.jpg';
import sky2 from './../../img/works/sky2.jpg';
import sky3 from './../../img/works/sky3.jpg';
import sky4 from './../../img/works/sky4.jpg';
import sky5 from './../../img/works/sky5.jpg';
import Footer from '../Footer/Footer';
import 'animate.css';
import { motion } from 'framer-motion';
import Fade from 'react-reveal/Fade';

import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination]);


class Works extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                class="works">
                <div className="main-photo">
                </div>
                <div className="whole-works">
                    <div className="text-works">
                        <p>Welcome to my World <br />
                        (oil painting on canvas)</p>
                    </div>
                    <Fade big>
                        <div className="works-1">
                            <img src={works_1} alt="photo" />
                            <div className="text-photo">
                                <p>Love Affair, 70X70 cm, 450$</p>
                            </div>
                        </div>
                    </Fade>
                    <Fade big>
                        <div className="works-2">
                            <div className="box">
                                <img src={works_2} alt="photo" />
                                <div className="text-photo">
                                    <p>Love Affair, 70X70 cm, 450$</p>
                                </div>
                            </div>
                            <div className="box">
                                <img src={works_3} alt="photo" />
                                <div className="text-photo">
                                    <p>Love Affair, 70X70 cm, 450$</p>
                                </div>
                            </div>
                            <div className="box">
                                <img src={works_4} alt="photo" />
                                <div className="text-photo">
                                    <p>Love Affair, 70X70 cm, 450$</p>
                                </div>
                            </div>
                        </div>
                        <div className="container-work2-mobile">
                            <Swiper
                                slidesPerView={1}
                                pagination={{ clickable: true }}
                            >
                                <SwiperSlide>
                                    <div className="box">
                                        <img src={works_2} alt="photo" />
                                        <div className="text-photo">
                                            <p>Love Affair, 70X70 cm, 450$</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="box">
                                        <img src={works_3} alt="photo" />
                                        <div className="text-photo">
                                            <p>Love Affair, 70X70 cm, 450$</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="box">
                                        <img src={works_4} alt="photo" />
                                        <div className="text-photo">
                                            <p>Love Affair, 70X70 cm, 450$</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                           {/* <div className="box">
                                <img src={works_2} alt="photo" />
                                <div className="text-photo">
                                    <p>Love Affair, 70X70 cm, 450$</p>
                                </div>
                            </div>
                            <div className="box">
                                <img src={works_3} alt="photo" />
                                <div className="text-photo">
                                    <p>Love Affair, 70X70 cm, 450$</p>
                                </div>
                            </div>
                            <div className="box">
                                <img src={works_4} alt="photo" />
                                <div className="text-photo">
                                    <p>Love Affair, 70X70 cm, 450$</p>
                                </div>
                            </div> */}
                        </div>
                    </Fade>
                    <Fade big>
                        <div className="container-work3">
                            <div className="works-3">
                                <div className="a">
                                    <img src={block_1} alt="photo" />
                                </div>
                                <div className="b">
                                    <img src={box_1} alt="photo" />
                                </div>
                                <div className="c">
                                    <img src={box_2} alt="photo" />
                                </div>
                                <div className="d">
                                    <img src={box_3} alt="photo" />
                                </div>
                                <div className="e">
                                    <img src={box_4} alt="photo" />
                                </div>
                                <div className="f">
                                    <img src={main} alt="photo" />
                                </div>
                            </div>

                            <div className="text-third">
                                <p>Love Affair, 70X70 cm, 450$</p>
                            </div>
                        </div>

                        <div className="container-work3-mobile">
                            <img src={main} alt="photo" />
                            <div className="text-third">
                                <p>Love Affair, 70X70 cm, 450$</p>
                            </div>
                        </div>
                    </Fade>
                    <Fade big>
                        <div className="works-4">
                            <div className="box">
                                <img src={sea_1} alt="photo" />
                                <div className="text-photo">
                                    <p>Love Affair, 70X70 cm, 450$</p>
                                </div>
                            </div>
                            <div className="box">
                                <img src={sea_2} alt="photo" />
                                <div className="text-photo">
                                    <p>Love Affair, 70X70 cm, 450$</p>
                                </div>
                            </div>
                        </div>
                    </Fade>
                    <Fade big>
                        <div className="works-5">
                            <div className="box">
                                <img src={works_5} alt="photo" />
                                <div className="text-photo">
                                    <p>Love Affair, 70X70 cm, 450$</p>
                                </div>
                            </div>
                        </div>
                    </Fade>
                    <Fade big>
                        <div className="works-6">
                            <div className="box">
                                <img src={works_6} alt="photo" />
                                <div className="text-photo">
                                    <p>Love Affair, 70X70 cm, 450$</p>
                                </div>
                            </div>
                        </div>
                    </Fade>
                    <Fade big>
                        <div className="works-7">
                            <div className="box">
                                <img src={works_7} alt="photo" />
                                <div className="text-photo">
                                    <p>Love Affair, 70X70 cm, 450$</p>
                                </div>
                            </div>
                            <div className="box">
                                <img src={works_77} alt="photo" />
                                <div className="text-photo">
                                    <p>Love Affair, 70X70 cm, 450$</p>
                                </div>
                            </div>
                        </div>
                    </Fade>
                    <Fade big>
                        <div className="works-8">
                            <div className="box">
                                <img src={works8} alt="photo" />
                                <div className="text-photo">
                                    <p>Love Affair, 70X70 cm, 450$</p>
                                </div>
                            </div>
                            <div className="box">
                                <img src={works8_1} alt="photo" />
                                <div className="text-photo">
                                    <p>Love Affair, 70X70 cm, 450$</p>
                                </div>
                            </div>
                        </div>
                    </Fade>
                    <Fade big>
                        <div className="container-work9">
                            <div className="works-9">
                                <div class="d">
                                    <img src={sky3} alt="photo" />
                                </div>
                                <div class="f">
                                    <img src={sky5} alt="photo" />
                                </div>
                                <div class="a">
                                    <img src={sky4} alt="photo" />
                                </div>
                                <div class="b">
                                    <img src={sky1} alt="photo" />
                                </div>
                                <div class="c">
                                    <img src={sky2} alt="photo" />
                                </div>
                            </div>

                            <div className="text-last">
                                <p>Love Affair, 70X70 cm, 450$</p>
                            </div>
                        </div>
                        <div className="container-work9-mobile">
                            <img src={sky1} alt="photo" />
                            <div className="text-last">
                                <p>Love Affair, 70X70 cm, 450$</p>
                            </div>
                        </div>
                    </Fade>
                </div>
                <Footer />
            </motion.div>
        )
    }
}

export default Works
