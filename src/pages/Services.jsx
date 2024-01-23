import * as React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import iServicesHeader from "../img/services/header.jpg"
import iServicesBrandInvestment from "../img/services/brand_investment.jpg"
import iServicesCopyConsumer from "../img/services/copy_consumer.jpg"

function ServicesPage() {
    return (
        <div>
            <Header/>
            <div className="text-md lg:text-lg">
                <div className="w-screen mt-28">
                    <img src={iServicesHeader} className="w-full" />
                </div>
                <div className="flex-none inline-block">
                    <div className="w-full">
                        <div className="w-3/5 m-auto px-8 pb-8 pt-24">
                            <h3 className="w-full text-center uppercase md:text-5xl">Copywriting Services</h3>
                            <br/>
                            <img src={iServicesCopyConsumer} className="w-full" />
                            <br/>
                            <div>Sparking the right conversation with your audience inspires emotions and drives behavior. What you put out there guides people to take certain actions, like buy and believe, subscribe and share, support and invest. Ultimately, the art of convo is the very cornerstone of your business, directly impacting your bottom line.</div>
                            <br/>
                            <div>With a range of high-quality services, Copychick makes it easy to invest in premium copy that appeals to the needs and soul of your audience.</div>
                            <br/>
                            <div>
                                <ul className="mt-4 list-disc list-outside mx-10">
                                    <li className="mb-2"><span className="font-bold text-primary">Website Copy.</span> Sparkling, on-brand copy for your entire website or select pages. Copy for new websites or existing websites that need a refresh. Churned out with your critical messaging in-tact and born to run with your website design. Copychick's sweet spot!</li>
                                    <li className="mb-2"><span className="font-bold text-primary">Social Copy.</span> Click-inciting, share-worthy, heart-tapping, customer-converting copy to uplevel your social campaigns.</li>
                                    <li className="mb-2"><span className="font-bold text-primary">Sales - Advertising - Marketing - Promotional Copy.</span> Punchy and persuasive prose that spotlights, sparks convos and sells.</li>
                                    <li className="mb-2"><span className="font-bold text-primary">Professional Bio - About Us - Brand Story.</span> Copychick's fave - telling the story of YOU! Bring on the bragging rights.</li>
                                    <li className="mb-2"><span className="font-bold text-primary">Emails + Newsletters.</span> Info-packed tidings customized for your subscribers' inbox.</li>
                                    <li className="mb-2"><span className="font-bold text-primary">Press Releases.</span> Headline-grabbing spin on newsworthy aspects of your brand written for media placement. (I do NOT submit or distribute press releases).</li>
                                    <li className="mb-2"><span className="font-bold text-primary">Articles + Blog Posts.</span> Expertly-written pieces tailored to your niche with a healthy dose of high-quality SEO.</li>
                                    <li className="mb-2"><span className="font-bold text-primary">Taglines.</span> A catchy, minimalist nugget of copy bursting with maximum impact.</li>
                                    <li className="mb-2"><span className="font-bold text-primary">Elevator Pitches.</span> Know how to WOW in 60 seconds or less? I do!</li>
                                    <li className="mb-2"><span className="font-bold text-primary">And More.</span> Don't see what you need? Holler. Chances are I can make it happen. Unless it's an article on where crypto and chemtrails meet, or a social campaign for your solar-powered Airbnb on the moon. Hard pass.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <div className="w-full">
                        <div className="w-3/5 m-auto px-8 pb-8 pt-12">
                            <h3 className="w-full text-center uppercase md:text-5xl">Branding Services</h3>
                            <br/>
                            <img src={iServicesBrandInvestment} className="w-full" />
                            <br/>
                            <div>Branding is the consistent, finely-tuned messaging that underpins your direct conversation with consumers. Great branding strikes a visceral chord by declaring what you're about and what you believe in, compelling audiences who vibe with your story, values and vision to pledge their allegiance.</div>
                            <br/>
                            <div>Copychick strives to set you apart from the competition with top-shelf branding solutions.</div>
                            <br/>
                            <div>
                                <span className="font-bold text-primary">Brand Strategy</span>: A strategically-crafted, multi-page blueprint outlining the variety of powerful elements that underpin your brand communications. These typically include:
                                <ul className="mt-4 list-disc list-outside mx-10">
                                    <li><span>Mission Statement</span></li>
                                    <li><span>Vision Statement</span></li>
                                    <li><span>Brand Voice</span></li>
                                    <li><span>Brand Values</span></li>
                                    <li><span>Value Proposition</span></li>
                                    <li><span>Brand Story</span></li>
                                    <li><span>Brand Positioning Statement</span></li>
                                    <li><span>And more</span></li>
                                </ul>
                            </div>
                            <br/>
                            <div>
                                <span className="font-bold text-primary">Brand Strategy – Individual Elements</span>: Copychick delivers any of the above Brand Strategy elements to stand alone.
                            </div>
                            <br/>
                            <div>
                                <span className="font-bold text-primary">Brand Revamp</span>: A refresh of old branding that's in need of innovative updates.
                            </div>
                            <br/>
                            <div>
                                <span className="font-bold text-primary">Brand Positioning</span>: Copychick defines the unique angle for positioning your brand as the essential go-to within your marketplace.
                            </div>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <div className="w-full">
                        <div className="w-3/5 m-auto px-8 pb-8 pt-12">
                            <h3 className="w-full text-center uppercase md:text-5xl">Consulting</h3>
                            <br/>
                            Need a fresh-eyed audit of your copy or branding? I’m happy to share my expertise consulting with you about any of your communications assets. From web and social copy to branding decks, press releases and more, Copychick’s got your back. I do everything from helping you brainstorm new ideas to collabing on how to build a better mouse trap.
                        </div>
                    </div>
                </div>
{/*
                <div className="mt-12 font-bold underline">COPYWRITING</div>
                <div className="mt-4 italic">“Copy is a direct conversation with the consumer.” – Shirley Polykoff, pioneering advertising Executive</div>
                <div className="mt-8">Sparking the right conversation with your audience is the very cornerstone of your business. How so? Wowing your people has the power to inspire emotions and behavior that drives their decisions, which directly impacts your bottom line.</div>
                <div className="mt-4">Do your business a solid and invest in premium copy that speaks directly to the needs and soul of your audience.</div>
                <div className="mt-4">All the awesome COPYCHICK can do for you:</div>
                <ul className="mt-4 list-disc list-inside mx-10">
                    <li><span className="text-primary font-bold">Website Copy.</span> Sparkling, on-brand copy for your entire website or select pages. Copy for new websites or existing websites that need a refresh. Churned out with your critical messaging in-tact and born to run with your website design. Copychick's sweet spot!</li>
                    <li><span className="text-primary font-bold leading-10">Social Copy.</span> Click-inciting, share-worthy, heart-tapping, customer-converting copy to uplevel your social campaigns.</li>
                    <li><span className="text-primary font-bold leading-10">Sales - Advertising - Marketing - Promotional Copy.</span> Punchy and persuasive prose that spotlights, sparks convos and sells.</li>
                    <li><span className="text-primary font-bold leading-10">Professional Bio - About Us - Brand Story.</span> Copychick's fave project - telling the story of YOU. Bring on the bragging rights!</li>
                    <li><span className="text-primary font-bold leading-10">Emails + Newsletters.</span> Info-packed tidings customized for your subscribers' inbox.</li>
                    <li><span className="text-primary font-bold leading-10">Press Releases.</span> Headline-grabbing spin on newsworthy aspects of your brand written for media placement. (I do NOT submit or distribute press releases).</li>
                    <li><span className="text-primary font-bold leading-10">Articles + Blog Posts.</span> Expertly-written pieces tailored to your niche with a healthy dose of high-quality SEO.</li>
                    <li><span className="text-primary font-bold leading-10">Taglines.</span> A catchy, minimalist nugget of copy bursting with maximum impact.</li>
                    <li><span className="text-primary font-bold leading-10">Elevator Pitches.</span> Know how to WOW in 60 seconds or less? I do!</li>
                    <li><span className="text-primary font-bold leading-10">And More:</span> Don't see what you need? Holler. Chances are I can make it happen. Unless it's an article on where crypto and chemtrails meet, or a social campaign for your solar-powered Airbnb on the moon. Hard pass.</li>
                </ul>

                <div className="mt-12 font-bold underline">BRANDING</div>
                <div className="mt-4">Branding is the consistent, fine-tuned messaging that underpins your big conversation with consumers. Great branding wins audience loyalty by striking a visceral chord, while at the same time staying true to your mission, vision and values.</div>
                <div className="mt-4">Invest in a top-shelf brand strategy that positions you to command your marketplace spotlight. You can't go wrong with Copychick leading the way!</div>
                <ul className="mt-4 list-disc list-inside mx-10">
                    <li><span className="text-primary font-bold">Brand Strategy:</span> A strategically crafted, multi-page blueprint that spells out the position, message, voice, tone, and more embedded in your brand communications.<br/>
                        <br/>
                        A Brand Strategy is a whole enchilada kinda thing, but I also craft individual elements. Typical elements of a Brand Strategy include Mission Statement, Vision Statement, Brand Voice, Brand Values, Brand Story, Brand Positioning Statement, and more.</li>
                    <li><span className="text-primary font-bold leading-10">Brand Revamp:</span> An injection of new life into old branding that's begging for some innovative updates.</li>
                    <li><span className="text-primary font-bold leading-10">Brand Positioning:</span> Who are you? What's your value proposition? What sets you apart from your peers and competition? Prepare to get existential as we position your brand as the unique and essential go-to within your marketplace.</li>
                </ul>*/}

                {/*<div className="w-4/5 m-auto bg-primary flex mt-24">
                    <div className="m-auto flex-1 bg-white m-12 p-8 border-solid border-20 border-primary">
                        <div className="w-full text-center text-primary text-2xl font-bold">CONSULTING</div>
                        <div className="mt-8 text-sm sm:text-lg md:text-xl">
                            Need a fresh-eyed audit of your copy or branding? Copychick's got your back. I'm happy to consult with you on any of your communications assets. <br className="hidden lg:inline-block" />
                            <br className="hidden lg:inline-block" />
                            I can help you do everything from brainstorm new ideas to devising how to build a better mouse trap.</div>
                    </div>
                </div>*/}

                <div className="mt-24 m-auto text-3xl text-center font-bold">
                    Do your bottom line a solid.<br/>
                    <a href="/contact/">Hire Copychick</a> for all of your copy + branding needs!
                </div>

            </div>
            <Footer />
        </div>
    );
}

export default ServicesPage;
