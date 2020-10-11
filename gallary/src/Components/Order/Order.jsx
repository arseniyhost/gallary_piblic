import React from 'react';
import Footer from '../Footer/Footer';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
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
import { emphasize, TextField } from '@material-ui/core';
import { motion } from 'framer-motion';
const arrayImg = [shop1, shop2, shop3, shop4, shop5, shop6, shop7, shop8, shop9, shop10, shop11];


class Order extends React.Component {
    constructor() {
        super();

        this.state = {
            name: '',
            email: '',
            phone: '',
            name_paint: '',
            message: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    async handleSubmit(e) {
        e.preventDefault();

        const { name, phone, email, message, name_paint } = this.state;

        const form = await axios.post('/api/form', {
            name,
            email,
            message,
            phone
        })
    }



    render() {
        if (this.props.urlImg === null) {
            return <Redirect to="/shop" />
        }
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="main-order">
                <div className="order-box">
                    <div className="order">
                        <div className="box-img">
                            <img src={arrayImg[this.props.urlImg]} alt="photo" />
                        </div>
                        <div className="box-form">
                            <span>Your order:</span>
                            <p>Please, fill the form<br /> below</p>
                            <div className="form" onSubmit={this.handleSubmit}>
                                <form>
                                    <div className="box">
                                        <div className="input-block">
                                            <TextField onChange={this.handleChange} id="standard-basic" name="name" label="Name" />
                                        </div>
                                        <div className="input-block">
                                            <TextField onChange={this.handleChange} id="standard-basic" name="email" label="E-mail" />
                                        </div>
                                        <div className="input-block">
                                            <TextField onChange={this.handleChange} id="standard-basic" name="phone" label="Phone" />
                                        </div>
                                    </div>
                                    <div className="box">
                                        <div className="input-block">
                                            <TextField onChange={this.handleChange} id="standard-basic" name="paint_name" label="Painting name" />
                                        </div>
                                        <div className="input-block">
                                            <TextField onChange={this.handleChange} id="standard-basic" name="name_paint" label="Name" />
                                        </div>
                                        <div className="input-block">
                                            <TextField onChange={this.handleChange} id="standard-basic" name="message" name="message" label="Your massage" />
                                        </div>
                                    </div>
                                    <div className="block-button">
                                        <button>SHOP NOW</button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div >
                <Footer />
            </motion.div >
        )
    }
}

export default Order;
