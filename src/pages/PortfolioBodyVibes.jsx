import * as React from "react";
import Header from "../components/Header";
import PortfolioHeader from "../components/portfolio/Header";
import PortfolioWrapper from "../components/portfolio/Wrapper";
import PortfolioTitle from "../components/portfolio/Title";
import PortfolioBody from "../components/portfolio/Body";
import PortfolioTagline from "../components/portfolio/Tagline";
import Footer from "../components/Footer";

function PortfolioBodyVibesPage() {
    return (
        <div>
            <Header />
            <PortfolioHeader title="Body Vibes" />
            <PortfolioWrapper>
                <div>
                    <img className="w-full" src="https://content.api.news/v3/images/bin/0699321e1158202e8593d239859642f5" />
                </div>
                <br/>
                <br/>
                <PortfolioTitle title="Body Vibes" />
                <PortfolioBody type="Elevator Pitch + Tagline + About" industry="Lifestyle">
                    <PortfolioTagline title="Life in Perfect Frequency" />
                    <br/>
                    <h3>Overview</h3>
                    <div>
                        Body Vibes is a line of wearable “smart” stickers that claim to stabilize mood by balancing the body’s natural energy frequencies.
                    </div>
                    <br/>
                    <h3>Challenge</h3>
                    <div className="font-bold">
                        Transform technical into digestible a succinct, on-brand description of how Body Vibes work for multiple touchpoints.
                    </div>
                    <br/>
                    <p>
                        The founder of Body Vibes approached me with a curveball. The product, which targeted the millennial health-and-wellness set, owed its mood-balancing capabilities to an embedded material produced by Raytheon Technologies, a leading aerospace and defense manufacturer, and the world’s largest producer of guided missiles. Yikes!
                    </p>
                    <br/>
                    <p>
                        Body Vibes had considerable buzz on social media, despite lacking marketing collateral clearly explaining how the product worked. To remedy this, I was contracted to produce three deliverables that broke down how Body Vibes functioned in hip, cool terms while minimizing the Raytheon angle.
                    </p>
                    <br/>
                    <h3>Deliverables</h3>
                    <ul className="list-inside list-disc">
                        <li>ABOUT page</li>
                        <li>Elevator pitch</li>
                        <li>Tagline</li>
                    </ul>
                    <br/>
                    <h3>Solution</h3>
                    <p>
                        I dove into discovery. I interviewed the senior scientist at Raytheon Technologies who helped implement their bio-frequency technology into the stickers. I spoke with customers of Body Vibes and reviewed testimonials to glean how the product impacted lives, and I poured over comments on its heavily-followed Instagram page.
                    </p>
                    <br/>
                    <p>
                        Research helped me to position Body Vibes as a pioneering lifestyle product within the holistic health and wellness space because it claimed to be a chemical-free mood enhancer. With this angle driving my creative process, I authored an ABOUT page optimized with health and wellness-related, SEO-friendly keywords.  The ABOUT provided a sassy and simplified explanation of how the stickers stabilized mood, explaining that the material used to make them comes pre-programmed with bio-frequencies that identify which of the body’s natural energy frequencies is depleted, <span className="text-primary">and “downloading” the missing bio-frequencies</span>. I gave Raytheon a shout-out for inventing the technology, but eschewed mentioning their involvement with the defense industry in favor of mentioning that NASA is their client.
                    </p>
                </PortfolioBody>
            </PortfolioWrapper>
            <Footer />
        </div>
    );
}

export default PortfolioBodyVibesPage;
