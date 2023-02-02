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

const Home = () => (
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


        <div className='grid justify-center md:flex md:justify-center md:ml-5 my-[150px]  '>

            <div className='w-[325px] h-[640px] ml-[30px] mainpage-box rounded-3xl  bg-black-gradient-2 my-10 ' >
                <div className=''>
                    <img src='/images/icons/icon1.png' className='mx-auto pt-10 w-28'></img>
                    <h1 className="font-poppins font-semibold ss:text-[28px] text-center text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
                        Game Enjoyment
                    </h1>
                    <p className={`${styles.paragraph} max-w-[470px] mt-5 text-center mx-4`}>
                        We understand the key levers to create fantastic games due to our passionate gaming experience for over 20 years. Authenticity and usability are always the highest priorities. </p>
                </div>
            </div>
            <div className=' w-[325px] h-[640px] ml-[30px] mainpage-box rounded-3xl  bg-black-gradient-2 my-10'  >
                <div className=''>
                    <img src='/images/icons/icon2.png' className='mx-auto pt-10 w-28'></img>
                    <h1 className="font-poppins font-semibold ss:text-[28px] text-center text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
                        Rewards
                    </h1>
                    <p className={`${styles.paragraph} max-w-[470px] mt-5 text-center mx-4`}>
                        For certain accomplishments in the game we reward gamers with NFTs, thereby we attract gamers globally and increase the game retention significantly.</p>
                </div>
            </div>
            <div className=' w-[375px] h-[640px] ml-[30px]  mainpage-box rounded-3xl  bg-black-gradient-2 my-10' >
                <div className=''>
                    <div className="w-full text-center mt-10">
                        <img src='/images/icons/icon3.png' className='w-28 text inline-block'></img>
                        <img src='/images/icons/icon4.png' className=' w-28 inline-block'></img>
                    </div>
                    <h1 className="font-poppins font-semibold ss:text-[28px] text-center text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
                        Technology
                    </h1>
                    <p className={`${styles.paragraph} max-w-[470px] mt-5 text-center mx-4`}>
                        We are highly committed to finding the game enjoyment on the cutting edge of blockchain technology and web3 primitives. With a deep sense of curiosity and a strong desire to implement innovations, we constantly look for ways to set new gaming standards. We use UE5 and combine it with the blockchain 1 layer to set new heights in the gaming industry.</p>
                </div>
            </div>
            <div className=' w-[275px] h-[640px] ml-[30px] mainpage-box rounded-3xl  bg-black-gradient-2 my-10' >
                <div className='w-full'>
                    <img src='/images/icons/icon5.png' className='mx-auto pt-10 w-28'></img>
                    <h1 className="font-poppins font-semibold ss:text-[28px] text-center text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
                        Play and Own
                    </h1>
                    <p className={`${styles.paragraph} max-w-[470px] mt-5 text-center mx-4`}>
                        All our games include gamer oriented Play-and-own concepts which enable gamers to gain crypto in lots of ways and provide valid reasons to keep playing our games.</p>
                </div>
            </div>
            <div className=' w-[275px] h-[640px] ml-[30px]  mainpage-box rounded-3xl  bg-black-gradient-2 my-10' >
                <div className='w-full'>
                    <img src='/images/icons/icon6.png' className='mx-auto pt-10 w-28'></img>
                    <h1 className="font-poppins font-semibold ss:text-[28px] text-center text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
                        Control Panel
                    </h1>
                    <p className={`${styles.paragraph} max-w-[470px] mt-5 text-center mx-4`}>
                        Our web based tool enables gamers to track performance and manage all legally owned NFTs easily. It provides access to the NFT marketplace and enables the collaboration.</p>
                </div>
            </div>

        </div>
<div id="game" className="h-14"></div>
        <section id="game" className="mb-48">
            <div className="grid md:flex justify-center">
                <div className="md:mr-28">
                    <h2 className={` ${styles.heading2} gametext`}>
                        Authentic postapocalyptic <br className="sm:block hidden" /> Open World

                    </h2>
                    <p className={`${styles.paragraph} gametext  max-w-[470px] mt-5`}>
                        Preservation Instinct introduces players to a stunning open world with lots of different terrains. These terrains include large cities, desert, mountains, villages, mediterrans and many more. All of these environments are perfectly designed for great encounters and battles which guarantee an unique gamer experience that has never seen before.
                    </p>
                </div>
                <div>
                    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
                        <img src="images/game1.jpg" width="800px" height="800px" className="mb-8 game-image-size"></img>

                        {/* gradient start */}
                        <div className="absolute z-[0] w-[60%] h-[55%] top-0 pink__gradient" />
                        <div className="absolute z-[1] w-[60%] h-[30%] rounded-full white__gradient bottom-40" />
                        <div className="absolute z-[0] w-[30%] h-[20%] right-20 bottom-20 blue__gradient" />
                        {/* gradient end */}
                    </div>

                </div>
            </div>

            <div className="grid md:flex justify-center mt-[150px]">
                <div className="md:mr-28">
                    <div className={`flex-1 flex ${styles.flexCenter}  relative`}>
                        <img src="images/game2.png" width="800px" height="800px" className="mb-8 game-image-size"></img>
                        {/* gradient start */}
                        <div className="absolute z-[0] w-[30%] h-[35%] top-0 pink__gradient" />
                        <div className="absolute z-[1] w-[30%] h-[30%] rounded-full white__gradient bottom-40" />
                        <div className="absolute z-[0] w-[30%] h-[20%] right-20 bottom-20 blue__gradient" />
                        {/* gradient end */}
                    </div>
                </div>
                <div>
                    <h2 className={`${styles.heading2} gametext`}>
                        NFT’s &  <br className="sm:block hidden" /> Play-and-Own Concept

                    </h2>
                    <p className={`${styles.paragraph} max-w-[470px] mt-5 gametext`}>
                        As a survival-shooter game, there will be lots of different weapons, skins and many other items provided in the game which are considered as NFT’s. All NFT’s consist of key characteristics and fulfill specific purposes in the game and are key values for the gamer to increase the game enjoyment. Additionally, all NFT’s help gamers to earn crypto more efficiently. With an unique Play-and-Own concept that has never seen before in the gaming industry, gamers get rewarded for their play time and playerskill.  </p>
                </div>

            </div>

            <div className="sm:flex md: grid justify-center mt-36 ">
                <div className="md:mr-28">
                    <h2 className={`md:${styles.heading2} gametext`}>
                        Redefiniton of the  <br className="sm:block hidden" /> Survival-Shooter Genre

                    </h2>
                    <p className={`${styles.paragraph} max-w-[470px] mt-5 gametext`}>
                        As a survival-shooter game, there will be lots of different weapons, skins and many other items provided in the game which are considered as NFT’s. All NFT’s consist of key characteristics and fulfill specific purposes in the game and are key values for the gamer to increase the game enjoyment. Additionally, all NFT’s help gamers to earn crypto more efficiently. With an unique Play-and-Own concept that has never seen before in the gaming industry, gamers get rewarded for their play time and playerskill.    </p>
                </div>

                <div>
                    <div className={`flex-1 flex ${styles.flexCenter}  relative`}>
                        <img src="images/game3.png"  className="my-10 mx-10 w-[800px] game-image-size "></img>

                        {/* gradient start */}
                        <div className="absolute z-[0] w-[60%] h-[35%] top-0 pink__gradient" />
                        <div className="absolute z-[1] w-[60%] h-[30%] rounded-full white__gradient bottom-40" />
                        <div className="absolute z-[0] w-[30%] h-[20%] right-20 bottom-20 blue__gradient" />
                        {/* gradient end */}
                    </div>
                </div>

            </div>
        </section>

        <div id="team" className="container mx-auto">
            <div className="md:grid grid-cols-2 gap-6">

                <div
                    className="md:flex justify-center text-6xl"
                >
                    <div className=" md:my-10 md:w-1/3" >
                        <div className={`sm: mt-10 flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
                            <img src={"/images/team/Koray.jpg"} alt="billing" className="w-[60%] h-[60%] relative z-[5] rounded-3xl mb-6" />

                            {/* gradient start */}
                            <div className="absolute z-[0] w-[90%] h-[95%] top-0 pink__gradient" />
                            <div className="absolute z-[1] w-[90%] h-[80%] rounded-full white__gradient bottom-40" />
                            <div className="absolute z-[0] w-[90%] h-[90%] right-20 bottom-20 blue__gradient" />
                            {/* gradient end */}
                        </div>


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
                    className="md:flex justify-center text-6xl"
                >
                    <div className=" md:my-10 md:w-1/3" >
                        <div className={`sm: mt-10 flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>

                        <img src={"/images/team/DBayer.png"} alt="billing" className="w-[60%] h-[60%] relative z-[5] rounded-3xl mb-6" />

                            {/* gradient start */}
                            <div className="absolute z-[0] w-[90%] h-[95%] top-0 pink__gradient" />
                            <div className="absolute z-[1] w-[90%] h-[80%] rounded-full white__gradient bottom-40" />
                            <div className="absolute z-[0] w-[90%] h-[90%] right-20 bottom-20 blue__gradient" />
                            {/* gradient end */}
                        </div>
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
                    className="md:flex justify-center text-6xl"
                >
                    <div className=" md:my-10 md:w-1/3" >
                        <div className={`sm: mt-10 flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>

                        <img src={"/images/team/Emir.png"} alt="billing" className="w-[60%] h-[60%] relative z-[5] rounded-3xl mb-6" />

                            {/* gradient start */}
                            <div className="absolute z-[0] w-[90%] h-[95%] top-0 pink__gradient" />
                            <div className="absolute z-[1] w-[90%] h-[80%] rounded-full white__gradient bottom-40" />
                            <div className="absolute z-[0] w-[90%] h-[90%] right-20 bottom-20 blue__gradient" />
                            {/* gradient end */}
                        </div>
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
                    className="md:flex justify-center text-6xl"
                >
                    <div className=" md:my-10 md:w-1/3" >
                        <div className={`sm: mt-10 flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>

                        <img src={"/images/team/Murat.png"} alt="billing" className="w-[60%] h-[60%] relative z-[5] rounded-3xl mb-6" />

                            {/* gradient start */}
                            <div className="absolute z-[0] w-[90%] h-[95%] top-0 pink__gradient" />
                            <div className="absolute z-[1] w-[90%] h-[80%] rounded-full white__gradient bottom-40" />
                            <div className="absolute z-[0] w-[90%] h-[90%] right-20 bottom-20 blue__gradient" />
                            {/* gradient end */}
                        </div>
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
                    className="md:flex justify-center text-6xl"
                >
                    <div className=" md:my-10 md:w-1/3" >
                        <div className={`sm: mt-10 flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
                        <img src={"/images/team/Waihon.jpg"} alt="billing" className="w-[80%] h-[80%] relative z-[5] rounded-3xl mb-6" />

                            {/* gradient start */}
                            <div className="absolute z-[0] w-[90%] h-[95%] top-0 pink__gradient" />
                            <div className="absolute z-[1] w-[90%] h-[80%] rounded-full white__gradient bottom-40" />
                            <div className="absolute z-[0] w-[90%] h-[90%] right-20 bottom-20 blue__gradient" />
                            {/* gradient end */}
                        </div>
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




        <div className={"md:px-10"}>
            <ContactUs />

        </div>

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

export default Home;
