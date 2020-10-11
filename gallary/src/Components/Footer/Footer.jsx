import React from 'react';
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
            <div className="block">
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
    )
}

export default Footer
