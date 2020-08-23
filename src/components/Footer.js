import React from 'react'
import '@fortawesome/fontawesome-free/css/all.css'
import './../css/Footer.css'
import logo from "./../images/logo.png"
function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <img src={logo} width="60" height="60" alt="logo" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint molestiae
            iste adipisci, quod hic exercitationem voluptates soluta est! Illum,
            voluptatem vero animi ut consectetur dignissimos minima odit natus!
            Quam, error?
      </p>
        </div>
        <div className="footer-content">
          <h4>
            Social
      </h4>
          <ul>
            <li><span className="fab fa-facebook-square"></span><i>Facebook</i></li>
            <li><span className="fab fa-twitter-square"></span><i>Twitter</i></li>
            <li><span className="fab fa-youtube-square"></span><i>Youtube</i></li>
          </ul>
        </div>
        <div className="footer-content"><h4>Links</h4>
          <ul>
            <li><a href="/schedule">Schedule</a></li>
            <li><a href="/latest">Latest</a></li>
            <li><a href="/popular">Popular</a></li>
          </ul>
        </div>
      </footer>
      <div className="footer-copyright">
        &copy; 2020 TV Guide, inc. All Rights Reserved.
  </div>
    </>
  )
}

export default Footer
