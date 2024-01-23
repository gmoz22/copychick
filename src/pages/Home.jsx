import React, { useState } from 'react';
import ReactPageScroller from "react-page-scroller";
import Header from "../components/Header";
import Pager from "../components/Pager";
import HoverOverlay from "../components/HoverOverlay";

import ImgIDoCopy from "../img/home/i-do-copy.jpg";
import ImgJenProfile from "../img/home/splash_jen-profile-pic.jpg";
import ImgOprahQuote from "../img/home/quote-oprah.jpg";
import ImgSuperpowersResearch from "../img/home/superpowers_research.jpg";
import ImgSuperpowersOutOfTheBox from "../img/home/superpowers_out-of-the-box.jpg";
import ImgSuperpowersCommunications from "../img/home/superpowers_communications.jpg";
import ImgSuperpowersSEO from "../img/home/superpowers_seo.jpg";
import ImgSuperpowersEditorial from "../img/home/superpowers_editorial.jpg";
import ImgSuperpowersCreativity from "../img/home/superpowers_creativity.jpg";
import ImgSuperpowersBrandPositioning from "../img/home/superpowers_brand-positioning.jpg";
import ImgSuperpowersCollab from "../img/home/superpowers_collab.jpg";
import ImgAMGLounges from "../img/portfolio/amg-lounges-splash.jpg";

function HomePage() {

    const [pageNumber, setPageNumber] = useState(0);
    const pagerConfig = {
        1: "Welcome",
        2: "Delegate",
        3: "Success",
        4: "I Do...",
        5: "Copy",
        6: "Superpowers",
        7: "Book!"
    }

    const handlePageChange = number => {
        setPageNumber(number);
    };

    const getPagesNumbers = () => {
        const pageNumbers = [];
        for (let i in pagerConfig) {
            pageNumbers.push(
                <Pager.Item key={i} number={i} label={pagerConfig[i]} active={i === pageNumber+1} onClick={handlePageChange} />,
            );
        }
        return [...pageNumbers];
    };

    const pagesNumbers = getPagesNumbers();

    return (
        <div className="main">
            <Header transparent />
            <Pager className="fixed top-center right-0 z-50">
                {pagesNumbers}
            </Pager>
            <ReactPageScroller pageOnChange={handlePageChange} customPageNumber={pageNumber}>

                {/* SECTION 1 */}
                <div className="md:h-screen h-autow-screen md:flex inline-block">
                    <div className="md:hidden mt-32 py-6 h-auto w-full bg-primary text-white text-2xl text-center font-bold">
                        COPY + BRAND STRATEGY for B2B, B2C and People
                    </div>
                    {/*<div className="h-screen w-full hidden md:block md:w-1/2 pt-28 bg-cover bg-home-splash-copy-brand-strategy-2 bg-center"> &nbsp; </div>*/}
                    <div className="h-screen hidden flex md:block md:w-2/5 pt-28 bg-primary text-white font-bold">
                        <div className="mt-48 ml-12">
                            <span className="xl:text-7xl lg:text-5xl text-3xl">
                                COPY +<br/>
                                BRAND<br/>
                                STRATEGY<br/>
                            </span>
                            <br/>
                            <br/>
                            <span className="xl:text-4xl lg:text-3xl text-xl text-black">for B2B, B2C and People</span>
                        </div>
                    </div>
                    <div className="h-screen flex md:w-3/5 w-full">
                        <div className="h-1/2 md:mt-32 w-full md:text-2xl text-md text-gray-600 font-light">
                            <img className="mb-auto" src={ImgJenProfile} />
                            <div className="md:leading-8 md:m-10 m-4">I craft premium copy and brand strategies that deep dive into how people, products and brands bring meaning and value to the world. Hire me for vibrant storytelling that boosts your reputation by illuminating your target messaging and core vision.</div>
                            <div className="md:leading-8 md:m-10 m-4 font-bold">Let's get to work!</div>
                        </div>
                    </div>
                </div>

                {/* SECTION 2 */}
                <div className="h-screen flex">
                    <div className="h-screen w-full">
                        {/*<img src={ImgOprahQuote} className="w-full" />*/}
                        <div className="w-full md:h-[380px] h-[240px] bg-home-oprah-quote bg-center bg-cover"></div>
                        <div className="w-4/5 h-auto m-auto">
                            <div className="xl:text-4xl lg:text-3xl md:text-2xl text-sm mt-12 font-bodoni">
                                Copychick clients are savvy master delegators who can spot a win-win from outer space. They know that entrusting their copy & branding to a pro is a time-saving, stress-busting and value-building grand slam for success!
                            </div>
                            <br/>
                            {/*<div className="lg:grid lg:grid-cols-3 lg:gap-16 text-black md:text-lg text-md">*/}
                            <div className="text-black lg:text-xl md:text-lg text-xs font-bodoni leading-relaxed">
                                <div>Writing pros spend years and thousands on keyboards and coffee in hot pursuit of perfecting our craft. Some of us even cut our teeth on Master of English degrees, magazine bylines, and working in-house with international PR agencies (wink-wink). Copywriters are experts at distilling long-winded jargon into provocative calls to action. Masters of transforming flickers of an idea into moving manifestos that persuade and sell. We're strategy ninjas, visual storytellers and human dictionaries bursting at the seams with BIG ideas on how to turn the messiest messaging into the viral stuff of booming brands.</div>
                                <br/>
                                <div className="font-bold">The bottom line? Delegating your project to a results-driven, copy virtuoso is a seriously smart investment. Sparkling and strategic copy builds value that takes your business to the next level.</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SECTION 3 */}
                <div className="h-screen flex">
                    <div className="h-screen w-full flex">
                        <div className="h-full md:w-1/2 md:block hidden flex bg-home-splash-hire-copychick bg-center bg-cover"></div>
                        <div className="h-full md:w-1/2 w-full flex-1 text-black">
                            <div className="md:hidden block mt-32 h-20 w-full bg-home-splash-hire-copychick-mobile bg-center bg-cover"></div>
                            <div className="md:pt-40 pt-6 xl:text-4xl lg:text-3xl text-2xl text-center font-bodoni">
                                <div className="md:block hidden py-8 bg-gold">
                                    Delegate & De-Stress for Success
                                </div>
                            </div>
                            <ul className="md:p-12 p-4 md:pt-10 pt-16 list-outside ml-6 list-disc lg:text-lg md:text-md text-sm md:leading-loose">
                                <li className="md:hidden"><span className="text-primary font-bold">DELEGATE & DE-STRESS FOR SUCCESS</span><span className="font-semibold"> by trusting a writing pro to take your business to the next level.</span><br/>&nbsp;</li>
                                <li><span className="text-primary font-bold">INCREASE YOUR BOTTOM LINE</span><span className="font-semibold"> with compelling copy that resonates with consumers.</span><br/>&nbsp;</li>
                                <li><span className="text-primary font-bold">SELL, EDUCATE, and CONVERT</span><span className="font-semibold"> with sharp brand strategies that motivate your target audience.</span><br/>&nbsp;</li>
                                <li><span className="text-primary font-bold">ENHANCE YOUR UI + UX IMPACT</span><span className="font-semibold"> with glowing copy that's visually tailored to your website design.</span> <br/>&nbsp;</li>
                                <li><span className="text-primary font-bold">OWN YOUR MARKETPLACE</span><span className="font-semibold"> with incisive brand positioning and clever calls to action that steal the spotlight.</span><br/>&nbsp;</li>
                                <li><span className="text-primary font-bold">WOW + INSPIRE</span><span className="font-semibold"> by partnering with a pro who's got the words, strategy and insight to develop your brightest ideas into powerful messaging.</span><br/>&nbsp;</li>
                                <li><span className="text-primary font-bold">FREE UP YOUR TIME</span><span className="font-semibold"> for the people and things you love when you delegate your project to an expert.</span><br/>&nbsp;</li>
                                <li><span className="text-primary font-bold">KISS STRESS and TIME WASTED GOODBYE</span><span className="font-semibold"> without agonizing over another DIY project.</span><br/>&nbsp;</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* SECTION 4 */}
                <div className="h-screen bg-blue_home_i_do_copy">
                    <div className="flex h-screen">
                        <img className="max-h-screen m-auto" src={ImgIDoCopy} />
                    </div>
                </div>

                {/* SECTION 5 */}
                <div className="h-screen flex bg-blue_home_i_do_copy">
                    <div className="h-screen w-full">
                        <div className="h-screen mx-auto mt-40">
                            <div className="m-auto max-w-5xl flex">
                                <div class="grid mt-10 grid-cols-2 gap-10 text-black text-xl">
                                    <div>
                                        <div className="text-3xl text-black font-bold">
                                            For 15 years I've flexed my copywriting muscles helping people and brands steal the spotlight, scale up and achieve significant goals.
                                        </div>
                                        <br/>
                                        <div>
                                            Name the asset and I've penned it. Press releases, 360-marketing campaigns, and web and social copy for entrepreneurs, businesses and brands, big and small. Professional bios for celebrities and prominent American business leaders. Brand strategies and marketing collateral for everyone from freshly-launched nonprofits to buzzy lifestyle brands. Diverse and high-profile assignments, including advertorials for Architectural Digest and Interior Design, audio scripts for the Vatican Museums, and feature travel articles and blogs for Budget Travel, The American, Barcelona Metropolitan, and more.
                                        </div>
                                    </div>
                                    <div>
                                        My versatility, as well as my knack for distilling broad ideas into sleek strategies that maximize brand story, is reflected in my work across a wide swath of fields. Health and wellness, lifestyle, tech, real estate, nonprofit, automotive, start-up, education, hospitality, luxury, interior design, art and culture, and travel and tourism, to name a few. This depth of experience empowers my work, making me a quick study to learn and finesse new industries and subjects.
                                        <br/>
                                        <br/>
                                        I approach every project with strategy and aplomb, leveraging my communications expertise and meticulous research skills to elevate people, products and brands through the power of vibrant storytelling. From punchy taglines to elaborate brand strategies, I work in the spirit of bringing value to my clients and wowing with premium results!<br/>
                                        <br/>
                                        <br/>
                                        <hr className="w-full m-auto border-white border-4"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SECTION 6 */}
                <div className="h-screen w-screen flex-0 bg-blue_home_i_do_copy">
                    <div className="flex w-full h-2/5 bg-blue_home_i_do_copy bg-home-splash-superpowers bg-center bg-cover">
                        {/*
                        <div className="flex w-full h-2/5 bg-blue_home_i_do_copy text-5xl font-bold text-white text-center">
                            <div className="m-auto">
                                COPYCHICK<br/>
                                <span className="text-7xl">SUPERPOWERS</span>
                                <span className="text-7xl font-luckiestguy">SUPERPOWERS</span>
                            </div>
                        </div>*/}
                    </div>
                    <div className="w-full h-2/5">
                        <div className="w-full flex">
                            <HoverOverlay
                                divStyle="relative w-1/4"
                                imgStyle="w-full h-full"
                                overlayStyle="text-white bg-primary_70"
                                overlayHeaderStyle="text-3xl font-bold"
                                image={ImgSuperpowersEditorial}
                                header="editorial-quality copywriting"
                            />
                            <HoverOverlay
                                divStyle="relative w-1/4"
                                imgStyle="w-full h-full"
                                overlayStyle="text-white bg-primary_70"
                                overlayHeaderStyle="text-3xl font-bold"
                                image={ImgSuperpowersResearch}
                                header="meticulous research"
                            />
                            <HoverOverlay
                                divStyle="relative w-1/4"
                                imgStyle="w-full h-full"
                                overlayStyle="text-white bg-primary_70"
                                overlayHeaderStyle="text-3xl font-bold"
                                image={ImgSuperpowersOutOfTheBox}
                                header="an outside-the-box approach"
                            />
                            <HoverOverlay
                                divStyle="relative w-1/4"
                                imgStyle="w-full h-full"
                                overlayStyle="text-white bg-primary_70"
                                overlayHeaderStyle="text-3xl font-bold"
                                image={ImgSuperpowersCommunications}
                                header="expert communications"
                            />
                        </div>
                        <div className="w-full flex">
                            <HoverOverlay
                                divStyle="relative w-1/4"
                                imgStyle="w-full h-full"
                                overlayStyle="text-white bg-primary_70"
                                overlayHeaderStyle="text-3xl font-bold"
                                image={ImgSuperpowersSEO}
                                header="meaningful SEO"
                            />
                            <HoverOverlay
                                divStyle="relative w-1/4"
                                imgStyle="w-full h-full"
                                overlayStyle="text-white bg-primary_70"
                                overlayHeaderStyle="text-3xl font-bold"
                                image={ImgSuperpowersCreativity}
                                header="creativity and polish"
                            />
                            <HoverOverlay
                                divStyle="relative w-1/4"
                                imgStyle="w-full h-full"
                                overlayStyle="text-white bg-primary_70"
                                overlayHeaderStyle="text-3xl font-bold"
                                image={ImgSuperpowersBrandPositioning}
                                header="incisive brand positioning"
                            />
                            <HoverOverlay
                                divStyle="relative w-1/4"
                                imgStyle="w-full h-full"
                                overlayStyle="text-white bg-primary_70"
                                overlayHeaderStyle="text-3xl font-bold"
                                image={ImgSuperpowersCollab}
                                header="smooth collaboration"
                            />
                        </div>
                    </div>
                </div>

                {/* SECTION 7 */}
                <div className="h-screen flex">
                    <div className="h-screen w-full flex-1 text-2xl">
                        <div className="w-full h-4/5 m-auto flex">
                            <div className="w-1/2 h-full m-auto px-10 bg-home-copychick-perks bg-cover flex">
                                <div className="m-auto">
                                    <h2 className="text-5xl font-bold text-center text-primary uppercase">Copychick Perks</h2>
                                    <br/>
                                    <br/>
                                    <ul className="list-disc list-outside mx-10">
                                        <li>Pristine copywriting by a published journalist and communications lead with a Master of English.</li>
                                        <br/>
                                        <li>Work with a versatile, ideas-driven professional always striving for results.</li>
                                        <br/>
                                        <li>Compelling brand strategies and thoughtful brand positioning.</li>
                                        <br/>
                                        <li>Copy tailored to maximize the impact of your social media feed and beautiful website design.</li>
                                        <br/>
                                        <li>Sleep like a baby with your project in the hands of a trusted pro!</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="w-1/2 h-full m-auto flex px-10 bg-home-diy-hurts bg-cover flex">
                                <div className="m-auto">
                                    <h2 className="text-5xl font-bold text-center text-primary uppercase">DIY Hurts</h2>
                                    <br/>
                                    <br/>
                                    <ul className="list-disc list-outside mx-10">
                                        <li>Excellent. Another dreaded project you have zero time for.</li>
                                        <br/>
                                        <li>Where to begin? When the #!*% does it end?</li>
                                        <br/>
                                        <li>Averaging 32 visits an hour to Thesaurus.com.</li>
                                        <br/>
                                        <li>There-their-they're, to-too, lead-led, who's-whose, your-you're…</li>
                                        <br/>
                                        <li>Soul-crushing content mill search when your hair starts falling out. <span className="italic">YIKES!</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-1/5 m-auto flex bg-primary ">
                            <div className="m-auto text-4xl font-bold text-center text-white">
                                SAVE TIME and DON'T STRESS!<br/>
                                <br/>
                                <a href="/contact/" className="!text-black hover:!text-white !underline">HIRE COPYCHICK</a> for PREMIUM WORDSMITHING TODAY!
                            </div>
                        </div>
                    </div>
                </div>

            </ReactPageScroller>
        </div>
    );
}

export default HomePage;
