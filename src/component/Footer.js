import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ 
      backgroundColor: "#1f1f1f", 
      padding: "40px 0 20px", 
      marginTop: "60px",
      borderTop: "1px solid rgba(255,255,255,0.1)"
    }}>
      <div className="container">
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", 
          gap: "30px",
          marginBottom: "30px"
        }}>
          {/* About Section */}
          <div>
            <h3 style={{ color: "#32cd32", marginBottom: "15px" }}>Nadim Shahriar</h3>
            <p style={{ fontSize: "14px", lineHeight: "1.6", color: "#ccc" }}>
              Passionate robotics engineer and software developer dedicated to creating innovative solutions 
              that make a positive impact on society through technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: "#32cd32", marginBottom: "15px" }}>Quick Links</h4>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {[
                { path: "/", label: "Home" },
                { path: "/about", label: "About" },
                { path: "/portfolio", label: "Portfolio" },
                { path: "/blog", label: "Achievements" },
                { path: "/contact", label: "Contact" }
              ].map(link => (
                <li key={link.path} style={{ marginBottom: "8px" }}>
                  <Link 
                    to={link.path} 
                    style={{ 
                      color: "#ccc", 
                      textDecoration: "none", 
                      fontSize: "14px",
                      transition: "color 0.3s ease"
                    }}
                    onMouseEnter={(e) => e.target.style.color = "#32cd32"}
                    onMouseLeave={(e) => e.target.style.color = "#ccc"}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{ color: "#32cd32", marginBottom: "15px" }}>Get In Touch</h4>
            <div style={{ fontSize: "14px", color: "#ccc" }}>
              <p style={{ marginBottom: "8px" }}>
                <i className="fas fa-envelope" style={{ marginRight: "8px", color: "#32cd32" }}></i>
                nadimshahriarapurbo@gmail.com
              </p>
              <p style={{ marginBottom: "8px" }}>
                <i className="fas fa-phone" style={{ marginRight: "8px", color: "#32cd32" }}></i>
                +8801716909892
              </p>
              <div style={{ marginTop: "15px" }}>
                {[
                  { href: "https://www.linkedin.com/in/nadim-shahriar-apurbo-9508692a9/", icon: "fab fa-linkedin-in" },
                  { href: "https://www.facebook.com/ERROR.Hiii", icon: "fab fa-facebook-f" },
                  { href: "https://www.instagram.com/nadim_shahriar_apurbo/", icon: "fab fa-instagram" },
                  { href: "https://github.com/nadim-shahriar-apurbo", icon: "fab fa-github" }
                ].map((social, index) => (
                  <a 
                    key={index}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ 
                      color: "#ccc", 
                      fontSize: "18px", 
                      marginRight: "15px",
                      transition: "color 0.3s ease"
                    }}
                    onMouseEnter={(e) => e.target.style.color = "#32cd32"}
                    onMouseLeave={(e) => e.target.style.color = "#ccc"}
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div style={{ 
          textAlign: "center", 
          paddingTop: "20px", 
          borderTop: "1px solid rgba(255,255,255,0.1)",
          fontSize: "14px",
          color: "#ccc"
        }}>
          <p>
            © {currentYear} Nadim Shahriar. All rights reserved. | 
            <span style={{ color: "#32cd32" }}> Built with React</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;