import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";
import { close, logo, menu } from "../src/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedin
} from "@fortawesome/free-brands-svg-icons";

const legal = () => (
    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Navbar />
            </div>
        </div>

        <div className={`bg-primary ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
                <Hero />
            </div>
        </div>

        <div className='flex'>
            <div className=' w-[345px] h-[640px] ml-[30px] my-[250px] mainpage-box rounded-3xl  bg-black-gradient-2' >
                <div className=''>
                    <img src='/images/enjoyment.png' className='mx-auto pt-10 w-28'></img>
                    <h1 className="font-poppins font-semibold ss:text-[28px] text-center text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
                        Game Enjoyment
                    </h1>
                    <p className={`${styles.paragraph} max-w-[470px] mt-5 text-center mx-4`}>
                        We understand the key levers to create fantastic games due to our passionate gaming experience for over 20 years. Authenticity and usability are always the highest priorities. </p>
                </div>
            </div>
            <div className=' w-[325px] h-[640px] ml-[30px] my-[250px] mainpage-box rounded-3xl  bg-black-gradient-2'  >
                <div className=''>
                    <img src='/images/reward.png' className='mx-auto pt-10 w-28'></img>
                    <h1 className="font-poppins font-semibold ss:text-[28px] text-center text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
                        Rewards
                    </h1>
                    <p className={`${styles.paragraph} max-w-[470px] mt-5 text-center mx-4`}>
                        For certain accomplishments in the game we reward gamers with NFTs, thereby we attract gamers globally and increase the game retention significantly.</p>
                </div>
            </div>
            <div className=' w-[375px] h-[640px] ml-[30px] my-[250px] mainpage-box rounded-3xl  bg-black-gradient-2' >
                <div className='w-full'>
                    <div className="w-full text-center mt-10">
                        <img src='/images/ethereum.png' className='w-20 text inline-block'></img>
                        <img src='/images/unreal.png' className=' w-24 inline-block'></img>
                    </div>
                    <h1 className="font-poppins font-semibold ss:text-[28px] text-center text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
                        Technology
                    </h1>
                    <p className={`${styles.paragraph} max-w-[470px] mt-5 text-center mx-4`}>
                        We are highly committed to finding the game enjoyment on the cutting edge of blockchain technology and web3 primitives. With a deep sense of curiosity and a strong desire to implement innovations, we constantly look for ways to set new gaming standards. We use UE5 and combine it with the blockchain 1 layer to set new heights in the gaming industry.</p>
                </div>
            </div>
            <div className=' w-[275px] h-[640px] ml-[30px] my-[250px] mainpage-box rounded-3xl  bg-black-gradient-2' >
                <div className=''>
                    <img src='/images/playandown.png' className='mx-auto pt-10 w-28'></img>
                    <h1 className="font-poppins font-semibold ss:text-[28px] text-center text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
                        Play and Own
                    </h1>
                    <p className={`${styles.paragraph} max-w-[470px] mt-5 text-center mx-4`}>
                        All our games include gamer oriented Play-and-own concepts which enable gamers to gain crypto in lots of ways and provide valid reasons to keep playing our games.</p>
                </div>
            </div>
            <div className=' w-[275px] h-[640px] ml-[30px] my-[250px] mainpage-box rounded-3xl  bg-black-gradient-2' >
                <div className=''>
                    <img src='/images/controlpanel.png' className='mx-auto pt-10 w-32'></img>
                    <h1 className="font-poppins font-semibold ss:text-[28px] text-center text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
                        Control Panel
                    </h1>
                    <p className={`${styles.paragraph} max-w-[470px] mt-5 text-center mx-4`}>
                        Our web based tool enables gamers to track performance and manage all legally owned NFTs easily. It provides access to the NFT marketplace and enables the collaboration.</p>
                </div>
            </div>

        </div>

        <section id="game" className="mb-48">
            <div className="flex justify-center">
                <div className="mr-28">
                    <h2 className={styles.heading2}>
                        Authentic postapocalyptic <br className="sm:block hidden" /> Open World

                    </h2>
                    <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                        Preservation Instinct introduces players to a stunning open world with lots of different terrains. These terrains include large cities, desert, mountains, villages, mediterrans and many more. All of these environments are perfectly designed for great encounters and battles which guarantee an unique gamer experience that has never seen before.
                    </p>
                </div>
                <div>
                    <img src="images/game1.jpg" width="800px" height="800px" className="mb-8"></img>
                </div>
            </div>


            <div className="flex justify-center mt-[70px]">
                <div className="mr-28">
                    <img src="images/game2.png" width="800px" height="800px" className="mb-8"></img>
                </div>
                <div>
                    <h2 className={styles.heading2}>
                        NFT’s &  <br className="sm:block hidden" /> Play-and-Own Concept

                    </h2>
                    <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                        As a survival-shooter game, there will be lots of different weapons, skins and many other items provided in the game which are considered as NFT’s. All NFT’s consist of key characteristics and fulfill specific purposes in the game and are key values for the gamer to increase the game enjoyment. Additionally, all NFT’s help gamers to earn crypto more efficiently. With an unique Play-and-Own concept that has never seen before in the gaming industry, gamers get rewarded for their play time and playerskill.  </p>
                </div>

            </div>

            <div className="flex justify-center mt-36">
                <div className="mr-28">
                    <h2 className={styles.heading2}>
                        Redefiniton of the  <br className="sm:block hidden" /> Survival-Shooter Genre

                    </h2>
                    <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                        As a survival-shooter game, there will be lots of different weapons, skins and many other items provided in the game which are considered as NFT’s. All NFT’s consist of key characteristics and fulfill specific purposes in the game and are key values for the gamer to increase the game enjoyment. Additionally, all NFT’s help gamers to earn crypto more efficiently. With an unique Play-and-Own concept that has never seen before in the gaming industry, gamers get rewarded for their play time and playerskill.    </p>
                </div>
                <div>
                    <img src="images/game3.png" width="800px" height="800px" className=""></img>
                </div>

            </div>
        </section>

        <div id="team" className="container mx-auto">
            <div className="grid grid-cols-2 gap-6">
                <div
                    className="flex justify-center text-6xl"
                >
                    <div className=" my-10 " style={{width:"30%"}}>
                        <img src='/images/controlpanel.png' className="mx-auto"></img>
                        <h1 className="font-poppins font-semibold ss:text-[28px] text-center text-[52px] text-white w-full">
                            Founder
                        </h1>
                        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-center mx-4`}>
                            Koray Akman
                        </p>
                    </div>
                    <div className=' w-[375px] h-[640px] ml-[30px] mainpage-box rounded-3xl bg-black-gradient-2 ' >
                        <div className='w-full'>

                            <p className={`${styles.paragraph} max-w-[470px] mt-20 text-center mx-4`}>
                                Koray is a passionate gamer for over 20 years.
                                He worked in the M&A department in a well known consulting firm. During his gaming and working period, Koray established an extensive network (esports players, influencers etc.). In the past year, he has fully committed to UE5 development. Accompanied with his industry expertise and his network, Koray wants to create a never seen gaming experience.
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    className="flex justify-center text-6xl"
                >
                    <div className=" my-10 " style={{width:"30%"}}>
                        <img src='/images/controlpanel.png' className="mx-auto"></img>
                        <h1 className="font-poppins font-semibold ss:text-[28px] text-center text-[52px] text-white w-full">
                            CTO
                        </h1>
                        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-center mx-4`}>
                            PhD Daniel Bayer
                        </p>
                    </div>
                    <div className=' w-[375px] h-[640px] ml-[30px] mainpage-box rounded-3xl bg-black-gradient-2 ' >
                        <div className='w-full'>

                            <p className={`${styles.paragraph} max-w-[470px] mt-20 text-center mx-4`}>
                                Daniel Bayer earned his PhD in computer graphics and completed his PhD with summa cum laude. Even after 30 years, Daniel still has the same motivation to play and develop video games. He worked in a software dev. company for over 12 years and six of them as the team lead. He quit his job to purse his passion and advise gaming companies. During his spare time he develops multiplayer online games (fully C++ based).</p>
                        </div>
                    </div>
                </div>
                <div
                    className="flex justify-center text-6xl"
                >
                    <div className=" my-10 " style={{width:"30%"}}>
                        <img src='/images/controlpanel.png' className="mx-auto"></img>
                        <h1 className="font-poppins font-semibold ss:text-[28px] text-center text-[52px] text-white w-full">
                            Emirhan Güven
                        </h1>
                        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-center mx-4`}>
                            Blockchain Lead Engineer
                        </p>
                    </div>
                    <div className=' w-[375px] h-[640px] ml-[30px] mainpage-box rounded-3xl bg-black-gradient-2 ' >
                        <div className='w-full'>

                            <p className={`${styles.paragraph} max-w-[470px] mt-20 text-center mx-4`}>
                                Emirhan is a senior blockchain developer, working over 3,5 years exclusively on blockchain projects. These projects encompass a broad range of industries, primarily focused on gaming, media and the fintech industry. He is an absolute expert in writing smart contracts and customize them according the requirements. His first project was actually creating a mobile NFT game.
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    className="flex justify-center text-6xl"
                >
                    <div className=" my-10 " style={{width:"30%"}}>
                        <img src='/images/controlpanel.png' className="mx-auto"></img>
                        <h1 className="font-poppins font-semibold ss:text-[28px] text-center text-[52px] text-white w-full">
                            Murat Yavuz
                        </h1>
                        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-center mx-4`}>
                            Software Engineer
                        </p>
                    </div>
                    <div className=' w-[375px] h-[640px] ml-[30px] mainpage-box rounded-3xl bg-black-gradient-2 ' >
                        <div className='w-full'>

                            <p className={`${styles.paragraph} max-w-[470px] mt-20 text-center mx-4`}>
                                Murat is a senior software engineer with over 5 years experience. Thereof, 2 years in the development of de-centralized blockchain applications. He worked together with Emirhan on the same NFT project in the media industry. Prior his interest in blockchain, Murat developed video games in Unreal Engine and Unity. He decided to join Redeemer Games to purse his passion of both worlds, blockchain and gaming.  </p>
                        </div>
                    </div>
                </div>
                <div
                    className="flex justify-center text-6xl"
                >
                    <div className=" my-10 " style={{width:"30%"}}>
                        <img src='/images/controlpanel.png' className="mx-auto"></img>
                        <h1 className="font-poppins font-semibold ss:text-[28px] text-center text-[52px] text-white w-full">
                            Waihon Tran
                        </h1>
                        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-center mx-4`}>
                            Business Dev. Manager
                        </p>
                    </div>
                    <div className=' w-[375px] h-[640px] ml-[30px] mainpage-box rounded-3xl bg-black-gradient-2 ' >
                        <div className='w-full'>

                            <p className={`${styles.paragraph} max-w-[470px] mt-20 text-center mx-4`}>
                                Waihon Tran worked several years in a well known consulting firm in Asia, primarily focused on restructuring projects. He decided to found his own startup to support companies across Europe and Asia by sourcing external partners in various subjects. He established lots of lasting partnerships for his clients. Waihon supports Redeemer Games to accelerate the business with his extensive know-how of the Asia market.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>


        <section id="contact" className="mt-[80px]">

            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact
                    Us</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl"></p>
                <form action="#" className="space-y-8">
                    <div>
                        <label htmlFor="email"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your
                            full name</label>
                        <input type="email" id="email"
                               className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                               placeholder=""></input>
                    </div>
                    <div>
                        <label htmlFor="email"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your
                            email</label>
                        <input type="email" id="email"
                               className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                               placeholder=""></input>
                    </div>

                    <div>
                        <label htmlFor="subject"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                        <input type="text" id="subject"
                               className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                               placeholder="Let us know how we can help you" ></input>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your
                            message</label>
                        <textarea id="message" rows="6"
                                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                  placeholder="Leave a comment..."></textarea>
                    </div>
                    <button type="submit"
                            className="py-3 px-5 bg-cyan-900 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send
                        message
                    </button>
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




        <section className="mt-[80px]">

            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold  text-gray-900 dark:text-white">Data Protection</h2>
                <h1 className="text-white hover:text-blue-500"><a className=" hover:border-l-blue-600" href="files/Data_Protection.docx">You can download here</a>
                </h1>


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

export default legal;
