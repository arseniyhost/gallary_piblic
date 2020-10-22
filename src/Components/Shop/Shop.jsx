import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import shop1 from './../../img/shop/shop1.jpg';
import shop2 from './../../img/shop/shop2.jpg';
import shop3 from './../../img/shop/shop3.jpg';
import shop4 from './../../img/shop/shop4.jpg';
import shop5 from './../../img/shop/shop5.jpg';
import shop6 from './../../img/shop/shop6.jpg';
import shop7 from './../../img/shop/shop7.jpg';
import shop8 from './../../img/shop/shop8.jpg';
import shop9 from './../../img/shop/shop9.jpg';
import shop10 from './../../img/shop/shop10.jpg';
import shop11 from './../../img/shop/shop11.jpg';
import Footer from '../Footer/Footer';
import { motion } from 'framer-motion';
import Fade from 'react-reveal/Fade';

import Aos from 'aos';
import 'aos/dist/aos.css';

const arrayImg = [shop1, shop2, shop3, shop4, shop5, shop6, shop7, shop8, shop9, shop10, shop11];
window.arrayImg = arrayImg;

const Shop = ({ getCurrentImg, urlImg }) => {
    // useEffect(() => {
    //     Aos.init({ duration: 2000 });
    // }, [])

    const getImg = (url) => {
        getCurrentImg(url);
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="main-shop">
            <div className="shop">
                <h3>Shop now</h3>
                <div className="store">
                    <Fade big>
                        <div className="box">
                            <div className="block">
                                <img src={arrayImg[1]} alt="photo" />
                                <div className="text">
                                    <span>Love Affair, 70X70 cm, 450$</span>
                                    <NavLink onClick={() => getImg(1)} to="/shop/order" >shop now</NavLink>
                                </div>
                            </div>
                            <div className="block">
                                <img src={arrayImg[0]} alt="photo" />
                                <div className="text">
                                    <span>Love Affair, 70X70 cm, 450$</span>
                                    <NavLink onClick={() => getImg(0)} to="/shop/order">shop now</NavLink>
                                </div>
                            </div>
                        </div>
                    </Fade>
                    <Fade big>
                        <div className="box">
                            <div className="block">
                                <img src={shop4} alt="photo" />
                                <div className="text">
                                    <span>Love Affair, 70X70 cm, 450$</span>
                                    <NavLink onClick={() => getImg(3)} to="/shop/order">shop now</NavLink>
                                </div>
                            </div>
                            <div className="block">
                                <img src={shop3} alt="photo" />
                                <div className="text">
                                    <span>Love Affair, 70X70 cm, 450$</span>
                                    <NavLink onClick={() => getImg(2)} to="/shop/order">shop now</NavLink>
                                </div>
                            </div>
                        </div>
                    </Fade>
                    <Fade big>
                        <div className="box">
                            <div className="block">
                                <img src={shop6} alt="photo" />
                                <div className="text">
                                    <span>Love Affair, 70X70 cm, 450$</span>
                                    <NavLink onClick={() => getImg(5)} to="/shop/order">shop now</NavLink>
                                </div>
                            </div>
                            <div className="block">
                                <img src={shop5} alt="photo" />
                                <div className="text">
                                    <span>Love Affair, 70X70 cm, 450$</span>
                                    <NavLink onClick={() => getImg(4)} to="/shop/order">shop now</NavLink>
                                </div>
                            </div>
                        </div>
                    </Fade>
                    <Fade big>
                        <div className="box">
                            <div className="block">
                                <img src={shop7} alt="photo" />
                                <div className="text">
                                    <span>Love Affair, 70X70 cm, 450$</span>
                                    <NavLink onClick={() => getImg(6)} to="/shop/order">shop now</NavLink>
                                </div>
                            </div>
                            <div className="block">
                                <img src={shop8} alt="photo" />
                                <div className="text">
                                    <span>Love Affair, 70X70 cm, 450$</span>
                                    <NavLink onClick={() => getImg(7)} to="/shop/order">shop now</NavLink>
                                </div>
                            </div>
                        </div>
                    </Fade>
                    <Fade big>
                        <div className="box-main">
                            <div className="block">
                                <img src={shop9} alt="photo" />
                                <div className="text">
                                    <span>Love Affair, 70X70 cm, 450$</span>
                                    <NavLink onClick={() => getImg(8)} to="/shop/order">shop now</NavLink>
                                </div>
                            </div>
                        </div>
                    </Fade>
                    <Fade big>
                        <div className="box">
                            <div className="block">
                                <img src={shop11} alt="photo" />
                                <div className="text">
                                    <span>Love Affair, 70X70 cm, 450$</span>
                                    <NavLink onClick={() => getImg(10)} to="/shop/order">shop now</NavLink>
                                </div>
                            </div>
                            <div className="block">
                                <img src={shop10} alt="photo" />
                                <div className="text">
                                    <span>Love Affair, 70X70 cm, 450$</span>
                                    <NavLink onClick={() => getImg(9)} to="/shop/order">shop now</NavLink>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
            <Footer />
        </motion.div>
    )
}

export default Shop;
