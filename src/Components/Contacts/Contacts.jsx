import React from 'react'
import Footer from '../Footer/Footer';
import { TextField, Checkbox, FormControlLabel } from '@material-ui/core';
import contact from './../../img/contact.png';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

const Contacts = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('12345', 'template_8j3xk6f', e.target, 'user_Gwxzj0VyA9IRAEUg7a6sH')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
    }


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
                        <form onSubmit={sendEmail}>
                            <div className="main-form">
                                <div className="text-from">Contact me</div>
                                <div className="input-block">
                                    <TextField label="Name" name="name" />
                                </div>
                                <div className="input-block">
                                    <TextField label="E-mail" name="email" />
                                </div>
                                <div className="input-block">
                                    <TextField label="Phone" name="phone" />
                                </div>
                                <div className="input-block textarea">
                                    <TextField id="standard-multiline-static"
                                        label="Message"
                                        multiline
                                        rows={4}
                                        name="message"
                                    />
                                </div>
                                <div className="checkbox">
                                    <div className="first">
                                        <FormControlLabel
                                            control={<Checkbox name="checkeda" color="primary" />}
                                            label="Buy Painting"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox name="checkedb" color="primary" />}
                                            label="Order new Painting"
                                        />
                                    </div>
                                </div>
                                <div className="block-button">
                                    <button>SEND</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </motion.div>
    )
}

export default Contacts
