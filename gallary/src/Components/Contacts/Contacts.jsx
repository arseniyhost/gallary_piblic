import React from 'react'
import Footer from '../Footer/Footer';
import { TextField, Checkbox, FormControlLabel } from '@material-ui/core';
import contact from './../../img/contact.png';
import { motion } from 'framer-motion';

const Contacts = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="main-contact">
            <div className="contacts">
                <div className="container">
                    <div className="img-box">
                        <img src={contact} alt="photo" />
                    </div>
                    <div className="form">
                        <h3>Контакты/Contacts</h3>
                        <p>Kharkov, Ukraine</p>
                        <p>karinakucherenko@gmail.com</p>
                        <p>+38 (067) 155 01 55</p>
                        <div className="main-form">
                            <div className="text-from">Contact me</div>
                            <div className="input-block">
                                <TextField label="Name" />
                            </div>
                            <div className="input-block">
                                <TextField label="E-mail" />
                            </div>
                            <div className="input-block">
                                <TextField label="Phone" />
                            </div>
                            <div className="input-block textarea">
                                <TextField id="standard-multiline-static"
                                    label="Message"
                                    multiline
                                    rows={4}
                                />
                            </div>
                            <div className="checkbox">
                                <div className="first">
                                    <FormControlLabel
                                        control={<Checkbox name="checkedA" color="primary" />}
                                        label="Buy Painting"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox name="checkedA" color="primary" />}
                                        label="Order new Painting"
                                    />
                                </div>
                            </div>
                            <div className="block-button">
                                <button>SEND</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </motion.div>
    )
}

export default Contacts
