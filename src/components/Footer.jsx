import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram, faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>



    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
    
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
      <div className="flex">
        <div className="mr-2">
        © 2021-2023 Redeemer Games UG &nbsp; &nbsp;   Legal Disclosure : 
      </div>
      <div className=" text-left text-sm mt-1" >
      
        
      Redeemer Games UG<br />
      Ludwigstr. 2, <br />
      63067 Offenbach am Main, Germany <br />
      Owner: Koray Anil Akman <br />
      Register entry: register B <br />
      Register court Offenbach am Main <br />
      Register number: HRB 54354
      </div>

      </div>
          
      </p>
      
        <div className="text-center">
            {
            /*
            <a
                href="https://www.instagram.com/rdmrgames/"
                className=""
            >
                <FontAwesomeIcon className="mx-5" style={{color:"white"}} icon={faInstagram} size="2x" />
            </a>
            <a
                href="https://www.linkedin.com/company/87193907"
                className=""
            >
                <FontAwesomeIcon className="mx-5" style={{color:"white"}} icon={faLinkedin} size="2x" />
            </a>
            <a
                href="https://twitter.com/KorayAk92536893"
                className=""
            >
                <FontAwesomeIcon className="mx-5" style={{color:"white"}} icon={faTwitter} size="2x" />
            </a>
            */
            }
        </div>
    </div>
  </section>
);

export default Footer;
