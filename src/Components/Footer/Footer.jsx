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
                    <a target="_blank" href="https://www.instagram.com/kucherenko_art_gallery/?hl=ru"><FaInstagram /></a>
                    <a target="_blank" href="https://www.facebook.com/KucherenkoArtGallery"><FaFacebookF /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer
