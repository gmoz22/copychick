import React, { useState } from 'react';
import ReactPageScroller from "react-page-scroller";
import Header from "../components/Header";
import Pager from "../components/Pager";
import HoverOverlay from "../components/HoverOverlay";

import ImgIDoCopy from "../img/home/i-do-copy.jpg";
import ImgJenProfile from "../img/home/splash_jen-profile-pic.jpg";
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

                <div className="h-screen w-screen md:flex inline-block">
                    <div className="h-screen w-full hidden md:block md:w-1/2 pt-28 bg-cover bg-home-splash-copy-brand-strategy bg-center"> &nbsp; </div>
                    <div className="h-screen flex w-1/2">
                        <div className="h-1/2 mt-32 w-full text-[1.7em] text-gray-600 font-light">
                            <img className="mb-auto" src={ImgJenProfile} />
                            <div className="leading-8 m-10">I craft premium copy and brand strategies that deep dive into how people, products and brands bring meaning and value to the world. Collab with me for vibrant storytelling that boosts your sales, reputation and following while spotlighting your core message and vision.</div>
                            <div className="leading-8 m-10 font-bold">Let's get to work!</div>
                        </div>
                    </div>
                </div>

                <div className="h-screen flex">
                    <div className="h-screen w-full">
                        <div className="w-full h-1/2 bg-home-oprah-quote bg-center bg-cover"></div>
                        <div className="w-4/5 h-1/2 flex m-auto">
                            <div className="grid m-10 grid-cols-2 gap-10 text-black text-xl">
                                <div className="text-3xl">
                                    Of course not, Venerable Queen of the Planet Oprah.<br/>
                                    <br/>
                                    Copychick clients are savvy master delegators who can spot a win-win from outer space. They know entrusting their copy & branding to a pro is a time-saving, stress-busting grand slam for success!
                                </div>
                                <div className="text-[0.8em]">
                                    <div>How so, you inquire?</div>
                                    <br/>
                                    <div>Us writing pros have spent years and thousands on keyboards and coffee perfecting our craft. Some of us even boast magazine bylines and Master of English degrees (wink-wink). We're experts at distilling long-winded jargon into provocative calls to action. Masters of transforming flickers of an idea into moving manifestos that persuade and sell. We're strategy ninjas, visual storytellers and human dictionaries bursting at the seams with BIG ideas on how to turn the messiest messaging into the viral stuff of booming brands.</div>
                                    <br/>
                                    <div className="font-bold">Delegating your project to a results-driven, copy virtuoso is a smart investment that will help take your brand to the next level.</div>
                                    <br/>
                                    <div>You bring the brief and Copychick brings the value! If you're ready to reach your full potential – duh, of course you are -- let's get to work!</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="h-screen flex">
                    <div className="h-screen w-full flex">
                        <div className="h-full w-1/2 flex bg-home-splash-hire-copychick bg-center bg-cover"></div>
                        <div className="h-full w-1/2 flex bg-home-splash-hire-copychick-bullets bg-center bg-cover"></div>
                    </div>
                </div>

                <div className="h-screen bg-blue_home_i_do_copy">
                    <div className="flex h-screen">
                        <img className="max-h-screen m-auto" src={ImgIDoCopy} />
                    </div>
                </div>

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
                                        Name the asset and I've penned it. Professional bios for celebrities and prominent American business leaders. Advertorials featured in Architectural Digest and Interior Design. Audio guide scripts for the Sistine Chapel and Vatican Museums. Social campaigns for one of the nation's premier automotive communities. Digital copy for an award-winning spirits brand. Feature articles and blogs for Budget Travel, The American and Barcelona Metropolitan. Brand strategies for nonprofits, lifestyle and health and wellness brands. Web and social copy, press releases and 360-marketing campaigns for businesses, brands and entrepreneurs big and small.
                                        </div>
                                    </div>
                                    <div>
                                    My versatility and knack for distilling broad ideas into sleek strategies that maximize brand story is reflected in my work across a wide swath of industries. Health and wellness, lifestyle, tech, real estate, nonprofit, automotive, start-up, education, hospitality, luxury, interior design, art and culture, and travel and tourism (phew!) all fall in my wheelhouse. This deep experience empowers my incisive brand positioning, and makes me a quick study to learn and finesse new topics.<br/>
                                        <br/>
                                        I approach every project with strategy and aplomb, leveraging my communications expertise and meticulous research skills to elevate people, products and brands through the power of vibrant storytelling. From punchy taglines to elaborate brand strategies, I work in the spirit of wowing clients with premium results!<br/>
                                        <br/>
                                        <br/>
                                        <hr className="w-full m-auto border-white border-4"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="h-screen w-screen flex-0 bg-blue_home_i_do_copy">
                    <div className="flex w-full h-2/5 bg-blue_home_i_do_copy text-5xl font-bold text-white text-center">
                        <div className="m-auto">
                            COPYCHICK SUPERPOWERS
                        </div>
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

                <div className="h-screen flex">
                    <div className="h-screen w-full flex-1 text-2xl font-bold">
                        <div className="w-full h-4/5 m-auto flex">
                            <div className="w-1/2 h-full m-auto px-10 bg-home-copychick-perks bg-cover flex">
                                <div className="m-auto">
                                    <h2 className="text-5xl font-bold text-center text-primary">COPYCHICK PERKS</h2>
                                    <br/>
                                    <br/>
                                    <ul className="list-disc list-inside mx-10">
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
                                    <h2 className="text-5xl font-bold text-center text-primary">DIY HURTS</h2>
                                    <br/>
                                    <br/>
                                    <ul className="list-disc list-inside mx-10">
                                        <li>Great. Another dreaded project you have no time for.</li>
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
                                <a href="/contact/" className="!text-lightest hover:!text-white !underline">BOOK COPYCHICK</a> for PREMIUM WORDSMITHING TODAY!
                            </div>
                        </div>
                    </div>
                </div>

            </ReactPageScroller>
        </div>
    );
}

export default HomePage;
