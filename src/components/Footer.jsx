import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
 return (
  <footer className="footer-distributed">
   <div className="footer-left">
    <h3>
     <span>Foody</span>
    </h3>

    <p className="footer-links">
     <a href="#" className="link-1">
      Home
     </a>

     <a href="#">Blog</a>

     <a href="#">Partner</a>

     <a href="#">About</a>

     <a href="#">Faq</a>

     <a href="#">Contact</a>
    </p>

    <p className="footer-company-name">Foody © 2024</p>
   </div>

   <div className="footer-center">
    <div>
     <i className="fa fa-map-marker"></i>
     <p>
      <span>Bangalore</span>India
     </p>
    </div>

    <div>
     <i className="fa fa-phone"></i>
     <p>+91-99966899</p>
    </div>

    <div>
     <i className="fa fa-envelope"></i>
     <p>
      <a href="mailto:support@company.com">support@foody.com</a>
     </p>
    </div>
   </div>

   <div className="footer-right">
    <p className="footer-company-about">
     <span>About the company</span>
     Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
    </p>

    <div className="footer-icons">
     <a href="#">
      <FontAwesomeIcon icon={faFacebook} />
     </a>
     <a href="#">
      <FontAwesomeIcon icon={faTwitter} />
     </a>
     <a href="#">
      <FontAwesomeIcon icon={faLinkedinIn} />
     </a>
     <a href="#">
      <FontAwesomeIcon icon={faGithub} />
     </a>
    </div>
   </div>
  </footer>
 );
}
