import { IoLogoFacebook } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { GrYoutube } from "react-icons/gr";
import { ImInstagram } from "react-icons/im";

let Footer = () => {
  return (
    <div className="footerdiv">
      <div className="foot-maindiv">
        <div className="maindiv-1">
          <div className="foot-box1">
            <h5> ONLINE SHOPPING</h5>
            <ul className="liitems">
              <li>Men</li>
              <li>Women</li>
              <li>Kids</li>
              <li>Home & Living</li>
              <li>Beauty</li>
              <li>Gift Cards</li>
              <li>Myntra Insider</li>
            </ul>
          </div>

          <div className="foot-box2">
            <h5>CUSTOMER POLICIES</h5>
            <ul className="liitems">
              <li>Contact Us</li>
              <li>FAQ</li>
              <li>T&C</li>
              <li>Terms of Use</li>
              <li>Track Orders</li>
              <li>Shipping</li>
              <li>Cancellation</li>
              <li>Returns</li>
              <li>Privacy policy</li>
              <li>Grievance Officer</li>
            </ul>
          </div>

          <div className="foot-box3">
            <h5>EXPERIENCE MYNTRA APP ON MOBILE</h5>
            <div className="img-foot">
              <img src="./public/appdownload.png" alt="" />
            </div>
            <div className="ketouch">
              <p className="ptext-foot">KEEP IN TOUCH</p>
              <div className="icons-footer">
                <p>
                  <IoLogoFacebook />
                </p>
                <p>
                  <FaTwitter />
                </p>
                <p>
                  <GrYoutube />
                </p>
                <p>
                  <ImInstagram />
                </p>
              </div>
            </div>
          </div>

          <div className="foot-box4">
            <div className="first-div-footer">
              <img src="./public/og.png" height={"85%"} alt="" />
              <div className="footer-h4-box4-main">
                <h4 className="footer-h4-box4">
                  <span>100% ORIGINAL</span> guarantee for all products at
                  myntra.com
                </h4>
              </div>
            </div>
            <div className="first-div-footer">
              <img src="./public/return.png" height={"85%"} alt="" />
              <div className="footer-h4-box4-main">
                <h4 className="footer-h4-box4">
                  <span>Return within 14days</span> of receiving your order
                </h4>
              </div>
            </div>
          </div>

          <div className="foot-box1">
            <h5>USEFUL LINKS</h5>
            <ul className="liitems">
              <li>Blog</li>
              <li>Careers</li>
              <li>Site Map</li>
              <li>Corporate Information</li>
              <li>Whitehat</li>
              <li>Cleartrip</li>
            </ul>
          </div>
        </div>
        <div className="searches">
          <div className="box-1-search">
            <h5>POPULAR SEARCHES</h5>
            <p></p>
          </div>
          <p>
            Makeup | Dresses For Girls | T-Shirts | Sandals | Headphones |
            Babydolls | Blazers For Men | Handbags | Ladies Watches | Bags |
            Sport Shoes | Reebok Shoes | Puma Shoes | Boxers | Wallets | Tops |
            Earrings | Fastrack Watches | Kurtis | Nike | Smart Watches | Titan
            Watches | Designer Blouse | Gowns | Rings | Cricket Shoes | Forever
            21 | Eye Makeup | Photo Frames | Punjabi Suits | Bikini | Myntra
            Fashion Show | Lipstick | Saree | Watches | Dresses | Lehenga | Nike
            Shoes | Goggles | Bras | Suit | Chinos | Shoes | Adidas Shoes |
            Woodland Shoes | Jewellery | Designers Sarees
          </p>

          <div className="footdiv">
            <p>
              In case of any concern, <span>Contact Us</span>
            </p>
            <p>© 2023 www.myntra.com. All rights reserved.</p>
            <p className="flipakrt-comp">A Flipkart company</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
