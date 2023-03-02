import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
<footer>
    <div className="footer-contact">
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/128/4494/4494464.png" alt=""/></a>
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/128/3670/3670044.png" alt="" /></a>
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/128/4494/4494465.png" alt="" /></a>
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/128/4494/4494467.png" alt="" /></a>
    </div>
    <div className="footer-text">
    2015 | All news - шаблон сайта для новостного портала от Djautkhanov
    </div>
</footer>
    );
};

export default Footer;