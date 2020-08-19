import React from 'react'
import { Link } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.css'
import './../css/Footer.css'
import logo from "./../images/logo.png"
function Footer() {
    return (
        <div className="footer">
            <div classname="footer_box footer_content">
                <div className="footer_content_box">
                    <div className="fooetr_content_box--logo" > <img src={logo} alt="logo" width="60" height="60" /></div>
                    <div className="fooetr_content_box--about"> Welcome To Tv Guide. We're here to help your entertainment solutions like Tv shows, Tv scheduling, etc. </div>
                </div>
                <div className="footer_content_box">
                    <ul className="fooetr_content_box--quick_links">
                        <li>Quick Links</li>
                        <li>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/schedule">Schedule</Link></li>
                                <li><Link to="/latest">Latest</Link></li>
                                <li><Link to="/popular">Popular</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="footer_content_box">
                <ul className="fooetr_content_box--quick_links">
                        <li>Social Links</li>
                        <li>
                            <ul>
                                <li> <span className="fab fa-facebook"></span> </li>
                                <li> <span className="fab fa-twitter"></span> </li>
                                <li> <span className="fab fa-instagram"></span> </li>
                                <li> <span className="fab fa-youtube"></span> </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div classname="footer_box footer_copyright"><h6>Copyright &copy; 2020 TVGuide. All rights reserved.</h6></div>

        </div>
    )
}

export default Footer
