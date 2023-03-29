import * as React from "react";
import Header from "../components/Header";
import PortfolioHeader from "../components/portfolio/Header";
import PortfolioWrapper from "../components/portfolio/Wrapper";
import PortfolioTitle from "../components/portfolio/Title";
import PortfolioBody from "../components/portfolio/Body";
import PortfolioTagline from "../components/portfolio/Tagline";
import Footer from "../components/Footer";

function PortfolioLindaCollinsPage() {
    return (
        <div>
            <Header />
            <PortfolioHeader title="Linda Collins" />
            <PortfolioWrapper>
                <div>
                    <img className="w-full" src="https://media.licdn.com/dms/image/C5616AQEGwzUr9bN-sA/profile-displaybackgroundimage-shrink_200_800/0/1642558428332?e=2147483647&v=beta&t=L5KHz3BMpjAC3czHVD2CQAXfMohKrk3J-9b5sO3Swqw" />
                </div>
                <br/>
                <br/>
                <PortfolioTitle title="Linda Collins" />
                <PortfolioBody type="Professional Bio" industry="Businesswoman and Philanthropist">
                    <PortfolioTagline title="Distill and Chill / From Farm to Fruition" />
                    <br/>
                    <h3>Overview</h3>
                    <div>
                        Linda Collins is an international top model, actress, producer, and philanthropist who is also the Co-Founder and Chief Sustainability Officer of ZENWTR, CORE FOODS and MUSE Organic, as well as the Co-Founder of Core Hydration, a line of ph-balanced water and organic beverages bought by Dr. Pepper Snapple Group for $525 million in 2014.
                    </div>
                    <br/>
                    <h3>Challenge</h3>
                    <div className="font-bold">
                        Create a standout-from-the-crowd philanthropy bio for a business mogul who dons many hats.
                    </div>
                    <br/>
                    <p>
                        Because there are so many facets to Linda’s life and career, a one-size-fits-all approach to her bio doesn’t work. Her bios must be tailored to the organization they represent. In this case, Linda  required a philanthropic profile for Visionary Women, a Los Angeles-based nonprofit focused on funding “high impact initiatives for women and girls.” Linda being a high-level Leadership Member meant bringing the panache was a must, as her bio would feature prominently on the Visionary Women website alongside a host of bios from fellow influencers.
                    </p>
                    <br/>
                    <h3>Deliverables</h3>
                    <ul className="list-inside list-disc">
                        <li>Professional Bio</li>
                    </ul>
                    <br/>
                    <h3>Solution</h3>
                    <p>
                        As Linda’s personal copywriter for years, I know how to craft sharp bios spotlighting her industry-specific achievements. For Visionary Women, I crafted a 500-word profile in a warm and concise voice that focuses on her charitable and humanitarian endeavors. Each of the four paragraphs groups together meaningful aspects of Linda’s philanthropy work, including establishing her own nonprofit, producing documentaries that promote awareness of important causes, recognition by two U.S. Presidents, and what it means to Linda to be part of Visionary Women.
                    </p>
                    <br/>
                    <p>
                        <a href="https://www.visionarywomen.com/leadership/linda-collins/" target="_blank">https://www.visionarywomen.com/leadership/linda-collins/</a>
                    </p>
                </PortfolioBody>
            </PortfolioWrapper>
            <Footer />
        </div>
    );
}

export default PortfolioLindaCollinsPage;
