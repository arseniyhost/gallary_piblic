import React, { useEffect } from 'react';
import Footer from '../Footer/Footer';
import action1 from './../../img/action/action1.png';
import { motion } from 'framer-motion';

const Events = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="main-events">
            <div className="events">
                <div className="container">
                    <div className="img-box">
                    </div>

                    <div className="whole-events">
                        <div className="box">
                            На данный момент событий нет
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </motion.div>
    )
}

export default Events;
