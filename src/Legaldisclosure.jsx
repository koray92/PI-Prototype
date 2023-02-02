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

const Legaldisclosure = () => (
    <div className="bg-primary w-full overflow-hidden">

        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Navbar />

            </div>
        </div>



        <section className="mt-[80px]">

            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4  text-4xl mx-5 tracking-tight font-extrabold text-center  text-gray-900 dark:text-white">Data Protection</h2>
                <div className=''>

                    <p className={`${styles.paragraph}  mt-5 text-center mx-4`}>
                        General notice and mandatory information
                        Designation of the responsible body
                        The responsible body for data processing on this website is:
                        Redeemer Games UG Koray Anil Akman Ludwigstr. 2 63067 Offenbach am Main

                        The responsible body decides alone or jointly with others on the purposes and means of processing personal data (e.g. names, contact details, etc.).

                        We hereby expressly object to the use of the contact data published in the context of the imprint obligation by third parties to send advertising and information materials that have not been expressly requested. The operators of the pages expressly reserve the right to take legal action in the event of unsolicited sending of advertising information, such as spam emails.


                        Revocation of your consent to data processing
                        Some data processing operations are only possible with your express consent. You can revoke your already given consent at any time. An informal e-mail notification is sufficient for the revocation. The legality of the data processing carried out before the revocation remains unaffected by the revocation.
                        Right to lodge a complaint with the competent supervisory authority
                        As a data subject, you have the right to lodge a complaint with the competent supervisory authority in the event of a breach of data protection law. The competent supervisory authority with regard to data protection issues is the state data protection officer of the federal state in which our company is based. The following link provides a list of data protection officers and their contact details: https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html .


                        Right to data portability
                        You have the right to have data that we process automatically on the basis of your consent or in fulfillment of a contract handed over to you or to third parties. It is made available in a machine-readable format. If you request the direct transfer of the data to another person responsible, this will only be done if it is technically feasible.
                        Right to information, correction, blocking, deletion

                        You have the right to free information about your stored personal data, the origin of the data, their recipients and the purpose of the data processing and, if necessary, the right to correct, block or delete this data at any time within the framework of the applicable legal provisions. You can contact us at any time using the contact options listed in the legal notice if you have any further questions on the subject of personal data.


                        SSL or TLS encryption
                        For security reasons and to protect the transmission of confidential content that you send to us as the site operator, our website uses an SSL or. TLS encryption. This means that data that you transmit via this website cannot be read by third parties. You can recognize an encrypted connection by the "https: //" address line of your browser and by the lock symbol in the browser line.


                        Cookies
                        Our website uses cookies. These are small text files that your web browser saves on your device. Cookies help us to make our offer more user-friendly, more effective and safer.
                        Some cookies are "session cookies." Such cookies are automatically deleted at the end of your browser session. However, other cookies remain on your device until you delete them yourself. Such cookies help us to recognize you when you return to our website.
                        With a modern web browser you can monitor, restrict or prevent the setting of cookies. Many web browsers can be configured so that cookies are automatically deleted when the program is closed. Deactivating cookies can limit the functionality of our website.

                        The setting of cookies, which are necessary to carry out electronic communication processes or to provide certain functions you wish to use (e.g. shopping cart), is based on Article 6 (1) (f) GDPR. As the operator of this website, we have a legitimate interest in storing cookies for the technically error-free and smooth provision of our services. If other cookies are set (e.g. for analysis functions), these will be treated separately in this data protection declaration.


                        Google Analytics
                        Our website uses functions of the web analysis service Google Analytics. The provider of the web analysis service is Google Inc., 1600 Amphitheater Parkway, Mountain View, CA 94043, USA.
                        Google Analytics uses "cookies." These are small text files that your web browser saves on your device and that enable website usage to be analyzed. Information generated by cookies about your use of our website is transmitted to a Google server and stored there. The server location is usually the USA.

                        Google Analytics cookies are set on the basis of Art. 6 Para. 1 lit.f GDPR. As the operator of this website, we have a legitimate interest in analyzing user behavior in order to optimize our website and, if necessary, advertising.


                        IP anonymization
                        We use Google Analytics in conjunction with the IP anonymization function. It ensures that Google shortens your IP address within member states of the European Union or in other contracting states of the Agreement on the European Economic Area before it is transmitted to the USA. There may be exceptional cases in which Google transmits the full IP address to a server in the USA and abbreviates it there. On our behalf, Google will use this information to evaluate your use of the website, to create reports on website activity and to provide us with other services related to website activity and internet usage. The IP address transmitted by Google Analytics is not merged with other Google data.


                        Browser plugin
                        The setting of cookies by your web browser can be prevented. However, this could limit some functions of our website. You can also prevent the collection of data relating to your website usage including your IP address and subsequent processing by Google. You can do this by downloading and installing the browser plug-in available via the following link: https://tools.google.com/dlpage/gaoptout?hl=de .


                        Objection to data collection
                        You can prevent Google Analytics from collecting your data by clicking on the following link. An opt-out cookie will be set which prevents the collection of your data on future visits to our website: Deactivate Google Analytics.
                        You can find details on how user data is handled by Google Analytics in Google's data protection declaration: https://support.google.com/analytics/answer/6004245?hl=de .


                        Order processing
                        In order to fully comply with the statutory data protection requirements, we have concluded an order processing contract with Google.


                        Demographic characteristics in Google Analytics
                        Our website uses the “demographic characteristics” function of Google Analytics. It can be used to create reports that contain statements on the age, gender and interests of the site visitors. This data comes from interest-based advertising from Google as well as from visitor data from third-party providers. It is not possible to assign the data to a specific person. You can deactivate this function at any time. You can do this via the ad settings in your Google account or by generally prohibiting the collection of your data by Google Analytics, as explained in the section “Objection to data collection”.
                        Source: data protection configurator from mein-datenschutzbeauftragter.de


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

export default Legaldisclosure;
