import styles from "./style";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero, ContactUs } from "./components";
import {close, logo, menu, robot} from "../src/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import Button from "./components/Button.jsx";

const Termofus = () => (
    <div className="bg-primary w-full overflow-hidden">

        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Navbar />

            </div>
        </div>



        <section className="mt-[80px] mb-[300px]">

            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4  text-4xl mx-5 tracking-tight font-extrabold text-center  text-gray-900 dark:text-white">Impressum</h2>
                <div className=''>

                    <p className={`${styles.paragraph}  mt-5 text-center mx-4`}>
                        Redeemer Games UG
                        Ludwigstr. 2,
                        63067 Offenbach am Main, Germany
                        Owner: Koray Anil Akman
                        Register entry: register B
                        Register court Offenbach am Main
                        Register number: HRB 54354


                    </p>
                </div>
            </div>
        </section>


        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                {/*
              <Stats/>

              <Business />

              <Billing />

              <CardDeal />
              <Testimonials />
              <Clients />
*/
                    <Footer />
                }
            </div>
        </div>
    </div>
);

export default Termofus;
