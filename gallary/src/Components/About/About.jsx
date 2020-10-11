import React from 'react';
import Footer from '../Footer/Footer';
import about1 from './../../img/about/about1.jpg';
import about2 from './../../img/about/about2.JPG';
import about3 from './../../img/about/about3.JPG';
import about4 from './../../img/about/about4.jpg';
import about5 from './../../img/about/about5.jpg';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import { motion } from 'framer-motion';
import Fade from 'react-reveal/Fade';

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="main-about">
            <div className="about">
                <div className="about-info">
                    <div className="main-photo">

                    </div>
                    <h2>KARINA KUCHERENKO</h2>
                    <div className="block-photos">
                        <Fade big>
                            <div className="box-1">
                                <div className="part-photo">
                                    <img src={about1} alt="photo" />
                                </div>
                                <div className="part-text">
                                    <div className="text">
                                        <p>Vera Tsepkova, educated as an international economist
                                        and a certified translator
                                        of German and French languages, nowadays- young mother who
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
                            <div className="box-2">
                                <div className="part-text">
                                    <div className="text">
                                        <p>
                                            Vera Tsepkova, educated as an international economist and a
                                            certified translator of German and French languages, nowadays -
                                            young mother who found her destiny in arts.
                                </p>
                                        <p>
                                            The painting are done in a style of abstract expressionism -  which
                                            liberates mind from any control of intellect and logical
                                            principles, settles its aim for the artist to express spontaneously,
                                            his mind in absolutely chaotic, abstract forms. A particular trait
                                            of works is a free and autonomous deposition of paints over a
                                            canvas, happening purely upon the influence psychological and
                                            emotional states of the
                              </p>
                                    </div>

                                </div>
                                <div className="part-photo">
                                    <img src={about2} alt="photo" />
                                </div>
                            </div>
                        </Fade>
                        <Fade big>
                            <div className="box-3">
                                <div className="part-photo">
                                    <img src={about3} alt="photo" />
                                </div>
                                <div className="part-text">
                                    <div className="text"> <p>
                                        Vera Tsepkova, educated as an international economist and a
                                        certified translator of German and French languages, nowadays -
                                        young mother who found her destiny in arts.
                                </p>
                                        <p>
                                            The painting are done in a style of abstract expressionism -  which
                                            liberates mind from any control of intellect and logical
                                            principles, settles its aim for the artist to express spontaneously,
                                            his mind in absolutely chaotic, abstract forms. A particular trait
                                            of works is a free and autonomous deposition of paints over a
                                            canvas, happening purely upon the influence psychological and
                                            emotional states of the
                              </p></div>

                                </div>
                            </div>
                        </Fade>
                        <Fade big>
                            <div className="box-4">
                                <div className="part-photo">
                                    <img src={about4} alt="photo" /><img src={about5} alt="photo" />
                                </div>
                                <div className="part-text">
                                    <div className="text">
                                        <p>
                                            Vera Tsepkova, educated as an international economist and a certified translator
                                            of German and French languages, nowadays - young mother who found her
                                            destiny in arts.
                                            The painting are done in a style of abstract expressionism -  which liberates mind from any control of intellect
                                            and logical principles, settles its aim for the
                                            artist to express spontaneously, his mind in absolutely chaotic, abstract forms. A particular trait of works is a
                                            free and autonomous deposition of paints over
                                            a canvas, happening purely upon the influence psychological and emotional states of the
                                </p>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
            <Footer />
        </motion.div>
    )
}

export default About;
