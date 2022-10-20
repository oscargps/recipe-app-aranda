import React from "react";
import footer from '../assets/img/footer.png'
import '../assets/css/footer.scss'
const Footer = () => {
    return (
        <div className="footer">
        <div className="textfooter"> <span>Con el patrocinio de</span></div>
        <img className="imgFooter" src={footer}/>
    </div>
    )
}

export default Footer;