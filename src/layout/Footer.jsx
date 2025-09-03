import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../assets/images/Logo.svg"
const Footer = () => {
  return (
    <div>
          <footer className="df-footer pt_100">
              {/* Logo */}
              <div className="df-footer-logo text-center">
                  <img src={Logo} alt="Dataflock Logo" />
                  <span> Dataflock</span>
              </div>

              {/* Navigation Links */}
              <div className="df-footer-nav text-center">
                  <Link to="#">Market Insights</Link>
                  <Link to="#">Data Solutions</Link>
                  <Link to="#">Analytics Tools</Link>
                  <Link to="#">Client Support</Link>
                  <Link to="#">Contact Us</Link>
              </div>

              {/* Divider */}
              <div className="df-footer-divider"></div>

              {/* Legal Links */}
              <div className="df-footer-legal text-end">
                  <Link to="/privacy-policy">Privacy Policy</Link>
                  <Link to="/terms-of-service">Terms of Service</Link>
                  <Link to="/cookies-settings">Cookies Settings</Link>
              </div>
          </footer>
    </div>
  )
}

export default Footer
