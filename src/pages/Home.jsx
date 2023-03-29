import * as React from "react";
import Header from "../components/Header";
import ReactPageScroller from "react-page-scroller";

import ImgIDoCopy from "../img/home/i-do-copy.png";
import ImgSecretSauceActionableLanguage from "../img/home/secret-sauce_actionable-language.jpg";
import ImgSecretSauceBrandPositioning from "../img/home/secret-sauce_brand-positioning.jpg";
import ImgSecretSauceCoffee from "../img/home/secret-sauce_coffee.jpg";
import ImgSecretSauceDeepResearch from "../img/home/secret-sauce_deep-research.jpg";
import ImgCopychickPerks from "../img/home/copychick-perks.jpg";
import ImgDiyHurts from "../img/home/diy-hurts.jpg";
import Footer from "../components/Footer";

// scroll page tracker: https://github.com/VikLiegostaiev/react-page-scroller/blob/master/demo/src/FullPage.js

function HomePage() {
    return (
        <div className="main">
            <Header transparent />
            <ReactPageScroller>

                <div className="h-screen w-screen md:flex inline-block">
                    <div className="h-screen w-full hidden md:block md:w-1/2 pt-28 bg-cover bg-home-splash-copy-brand-strategy bg-center"> &nbsp; </div>
                    <div className="h-screen w-full md:w-1/2 bg-white">
                        <div className="flex h-screen">
                            <div className="m-auto">
                                <ul className="list-disc list-inside text-5xl">
                                    <li>Website Copy</li>
                                    <li>Sales Copy</li>
                                    <li>Marketing Copy</li>
                                    <li>Social Media Campaigns</li>
                                    <li>Brand Story</li>
                                    <li><a href="/services">And More!</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="h-screen w-screen flex">
                    <div className="h-screen w-1/2 bg-white">
                        <div className="flex h-screen">
                            <div className="m-auto w-4/5">
                                <h2 className="text-5xl font-bold">
                                    I’m Jen, the <span className="text-primary">COPYCHICK</span>
                                </h2>
                                <br/>
                                <div className="text-[1.7em] leading-8 text-gray-400 font-light">
                                    I serve up sharp, impactful copy about how people, products and brands bring meaning and value to the world. I do this with precision, insight and a whole lotta coffee + love.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-screen w-1/2 pt-28 bg-cover bg-home-splash-jen-pic bg-center"> &nbsp; </div>
                </div>

                <div className="h-screen w-screen flex">
                    <div className="h-screen w-1/2 pt-28 bg-cover bg-home-splash-hire-copychick bg-center"> &nbsp; </div>
                    <div className="h-screen w-1/2 bg-white">
                        <div className="flex h-screen">
                            <div className="m-auto w-4/5 text-center">
                                <h3 className="text-[2.6em]">
                                    WHAT DO <span className="text-primary">RESULTS</span> LOOK LIKE?
                                </h3>
                                <br/>
                                <div className="text-[29px] leading-8 text-gray-400">
                                    All the <span className="text-primary">#clicks</span>, <span className="text-primary">#conversions</span>, <span className="text-primary">#sales</span>, and <br/>
                                    <span className="text-primary">#loyalty</span> your brand deserves!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="h-screen w-screen flex">
                    <div className="h-screen w-1/2">
                        <div className="flex h-screen">
                            <div className="m-auto w-3/5">
                                <div className="text-xl text-uppercase">
                                    MAJOR UNIVERSAL TRUTH
                                </div>
                                <h3 className="text-3xl font-bold">
                                    Professional writers rock!
                                </h3>
                                <br/>
                                <div className="text-[1.9em] leading-8">
                                    Not only have we spent years and thousands at Starbucks perfecting our craft, but some of us even boast bylines and advanced English degrees (wink-wink).
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-screen w-1/2 bg-primary">
                        <div className="flex h-screen">
                            <div className="m-auto w-[40vw] pr-[100px]">
                                <div className="text-2xl leading-9 font-light text-white">
                                    Writing pros are experts at distilling long-winded jargon into succinct, rousing calls to action. Masters of developing the flicker of an idea into moving manifestos that persuade and sell (ka-ching!). Strategy ninjas who transform messy messaging into booming, viral brands.<br/>
                                    <br/>
                                    We’re human dictionaries and visual storytellers. Critical thinkers and research junkies. Detail-crazed grammar nerds polarized by usage of the frigging Oxford comma.<br/>
                                    <br/>
                                    With creative perfectionists like us, why would you ever dream of trusting your precious copy to an amateur? Or worse – doing it yourself? EGADS!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="h-screen bg-blue_home_i_do_copy">
                    <div className="flex h-screen">
                        <img className="max-h-screen m-auto" src={ImgIDoCopy} />
                    </div>
                </div>

                <div className="h-screen flex bg-blue_home_i_do_copy">
                    <div className="h-screen w-full">
                        <div className="flex h-screen max-w-7xl mx-auto">
                            <div className="m-auto max-w-5xl mx-20 text-white text-3xl leading-10">
                                <div>
                                    For 15 years I’ve flexed my copywriting muscles helping brands and entrepreneurs steal the spotlight, scale up and achieve their goals.
                                </div>
                                <br/>
                                <div>
                                    My copy catapults clients beyond the competition through creative storytelling that resonates with the masses. I’ve got a knack for knowing the right words to capture your voice, message and spirit. A lust for language that keeps my grammar pristine and my creativity inspired and fresh. A flair for crafting savvy, energetic copy peppered with meaningful calls-to-action that spark behavior.
                                </div>
                                <br/>
                                <div>
                                    From website content to branding, from sales copy to social media campaigns, my copy and brand strategies are tailored to your needs, tapped-in to your audience, and triumph at making you stand out.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="h-screen flex">
                    <div className="h-screen w-full">
                        <div className="flex h-screen">
                            <div className="m-auto">
                                <h2 className="text-5xl font-bold text-primary text-center">
                                    The COPYCHICK Secret Sauce
                                </h2>
                                <br/>
                                <div className=" w-screen">
                                    <img className="w-1/4 inline-block" src={ImgSecretSauceActionableLanguage} />
                                    <img className="w-1/4 inline-block" src={ImgSecretSauceBrandPositioning} />
                                    <img className="w-1/4 inline-block" src={ImgSecretSauceCoffee} />
                                    <img className="w-1/4 inline-block" src={ImgSecretSauceDeepResearch} />
                                    <img className="w-1/4 inline-block" src={ImgSecretSauceDeepResearch} />
                                    <img className="w-1/4 inline-block" src={ImgSecretSauceCoffee} />
                                    <img className="w-1/4 inline-block" src={ImgSecretSauceBrandPositioning} />
                                    <img className="w-1/4 inline-block" src={ImgSecretSauceActionableLanguage} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="h-screen flex">
                    <div className="h-screen w-full">
                        <div className="w-full h-1/2 bg-home-oprah-quote bg-center bg-cover"></div>
                        <div className="w-full h-1/2 flex">
                            <div className="w-3/5 px-20 flex">
                                <h3 className="m-auto text-3xl text-primary text-center font-light leading-10">
                                    Of course not, Venerable Queen of the Planet, Oprah. Copychick clients are savvy master delegators who can spot a win-win from outer space. They know that trusting their copy in the hands of a pro is a time-saving and stress-free slam dunk for success.
                                </h3>
                            </div>
                            <div className="w-2/5 flex bg-home-delegate-for-success bg-right bg-contain bg-no-repeat"></div>
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
                                        <li>#<span className="text-primary">clicks</span> + #<span className="text-primary">conversions</span> + #<span className="text-primary">sales</span> + #<span className="text-primary">loyalty</span> = #<span className="text-primary">GOALS</span></li>
                                        <br/>
                                        <li>Sparkling, triple-checked grammar from a published journalist with a Master’s in English.</li>
                                        <br/>
                                        <li>Meaningful, never-overstuffed SEO.</li>
                                        <br/>
                                        <li>Copy born to run with your with your beautiful website design.</li>
                                        <br/>
                                        <li>Brand Story</li>
                                        <br/>
                                        <li>Sleep like a baby + radiant smile + spring in your step = winning!</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="w-1/2 h-full m-auto flex px-10 bg-home-diy-hurts bg-cover flex">
                                <div className="m-auto">
                                    <h2 className="text-5xl font-bold text-center text-primary">DIY HURTS</h2>
                                    <br/>
                                    <br/>
                                    <ul className="list-disc list-inside mx-10">
                                        <li>#<span className="text-primary">lostclicks</span> - #<span className="text-primary">lostconversions</span> - #<span className="text-primary">lostsales</span> - #<span className="text-primary">lostloyalty</span> = #<span className="text-primary">ZEROGOALS</span></li>
                                        <br/>
                                        <li>Friends and family sad and mystified that you’ve taken on another time-sucking project.</li>
                                        <br/>
                                        <li>Yes, this is the 18thth time you’ve visited Thesaurus.com this hour.</li>
                                        <br/>
                                        <li>There/their/they’re, to/too, lead/led, here/hear, bear/bare, your/you’re, see/sea...</li>
                                        <br/>
                                        <li>Soul-crushing, content mill search when your hair starts falling out. YIKES!</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-1/5 m-auto flex bg-primary ">
                            <div className="m-auto text-4xl font-bold text-center text-white">
                                SAVE YOUR TIME and SANITY!<br/>
                                <br/>
                                <a href="/contact/" className="!text-lightest hover:!text-white !underline">BOOK COPYCHICK</a> AND GET CERTIFIED PLATINUM COPY TODAY!
                            </div>
                        </div>
                    </div>
                </div>

            </ReactPageScroller>
        </div>
    );
}

export default HomePage;
