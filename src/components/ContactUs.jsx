import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import CardDeal from "./Game.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram, faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ContactUs = () => {
    const form = useRef();
    const notify = () => toast("Message sent");
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_q56tpm7', 'template_w70x6zj', form.current, 'Y6VIc61zkn3EBVkn1')
            .then((result) => {
                console.log(result.text);
                notify();
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <section className={'bg-black-gradient-2 rounded-[20px] box-shadow mx-10 mx-auto'}>
            <section id="contact" className="mt-[80px]">
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact
                        Us</h2>
                    <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl"></p>
                    <form ref={form} onSubmit={sendEmail} className="space-y-8">
                        <div>
                            <label htmlFor="email"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your
                                full name</label>
                            <input type="text" name="user_name"
                                   className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                   placeholder=""></input>
                        </div>
                        <div>
                            <label htmlFor="email"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your
                                email</label>
                            <input type="email" name="user_email"
                                   className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                   placeholder=""></input>
                        </div>
                        <div>
                            <label htmlFor="subject"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                            <input type="text" name="subject"
                                   className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                   placeholder="Let us know how we can help you" ></input>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor=""
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your
                                message</label>
                            <textarea name="message" rows="6"
                                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                      placeholder="Leave a comment..."
                              ></textarea>
                        </div>
                        <button type="submit" className="py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none">
                            Send Message
                        </button>
                        <ToastContainer />
                    </form>
                    <div className="text-center mt-16">
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
                    </div>
                </div>
            </section>

        </section>
    );
};
export default ContactUs;
