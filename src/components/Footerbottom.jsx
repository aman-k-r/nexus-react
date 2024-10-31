import React from "react";
import './Footerbottom.css'; 

const FooterBottom = () => {
  const currentYear = new Date().getFullYear(); 

    return (
        <div className="footer-bottom">
            <p>
                © <span>{currentYear} &nbsp;&nbsp;</span> <span>Aman Kumar</span>
            </p>
        </div>
    );
};

export default FooterBottom;
