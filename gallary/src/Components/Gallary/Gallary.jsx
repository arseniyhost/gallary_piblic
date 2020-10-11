import React, { useEffect } from 'react';
import Footer from '../Footer/Footer';
import Aos from 'aos';
import Carousel from 'react-elastic-carousel';
import gallary1 from './../../img/gallary/gallary1.JPG';
import gallary2 from './../../img/gallary/gallary2.jpg';
import gallary3 from './../../img/gallary/gallary3.jpg';
import gallary4 from './../../img/gallary/gallary4.jpg';
import { motion } from 'framer-motion';
import Fade from 'react-reveal/Fade';

const Card = ({ number }) => {
    return (
        <div className="card">
            <img src={gallary1} alt="photo" />
            <div className="box">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, eveniet?</p>
            </div>
        </div>
    )
}

const Gallary = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
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
                                <Carousel breakPoints={setting} pagination={false}>
                                    <Card />
                                    <Card />
                                    <Card />
                                    <Card />
                                    <Card />
                                    <Card />
                                </Carousel>
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
