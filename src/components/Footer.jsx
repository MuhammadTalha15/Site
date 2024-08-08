import React from 'react'
import '../styles/footer.css'
import FooterLogo from '../assets/Logo/footer-Logo.png'
import SmoothscrollBtn from './SmoothscrollBtn'

const Footer = () => {

    const date = new Date();
    let year = date.getFullYear();

  return (
    <>
        <div className="footer">
            <SmoothscrollBtn />
            <div className="ftr-upr-txt-cnt">
                <div className="ftr-upr-txt">
                    <p className="ftr-txt">Your Vission, My Expertise Feel free to Contact for your Solutions and Products.</p>
                </div>
            </div>
            <div className="ftr-lwr-txt-cnt">
                <nav className="ftr-nav">
                    <ol>
                        <li><a href="#">HOME</a></li>
                        <li><a href="#">ABOUT</a></li>
                        <li><a href="#">PROJECTS</a></li>
                        <li><a href="#">CONTACT</a></li>
                    </ol>
                </nav>
                <div className="ftr-logo">
                    <span className='ftr-stick'></span>
                    <img src={FooterLogo} alt="" className="ftr-logo-img" />
                    <span className='ftr-stick'></span>
                </div>
                <div className="cpy-rgt-licence">
                    <p className="copy-text">Copyright © {year} Website | Muhammad Talha®. All rights reserved.</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer
