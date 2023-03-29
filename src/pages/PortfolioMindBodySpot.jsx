import * as React from "react";
import Header from "../components/Header";
import PortfolioHeader from "../components/portfolio/Header";
import PortfolioWrapper from "../components/portfolio/Wrapper";
import PortfolioTitle from "../components/portfolio/Title";
import PortfolioBody from "../components/portfolio/Body";
import PortfolioTagline from "../components/portfolio/Tagline";
import ImgMBS1 from '../img/portfolio/mind-body-spot-home-1.jpg';
import Footer from "../components/Footer";

function PortfolioMindBodySpotPage() {
    return (
        <div>
            <Header />
            <PortfolioHeader title="Mind/Body Spot" />
            <PortfolioWrapper>
                <div>
                    <img className="w-full" src={ImgMBS1} />
                </div>
                <br/>
                <br/>
                <PortfolioTitle title="Mind/Body Spot" />
                <PortfolioBody type="Web Copy" industry="Health + Wellness">
                    <PortfolioTagline title="Vibrant and Purposeful Living" />
                    <br/>
                    <h3>Overview</h3>
                    <div>
                        Mind/Body Spot is a health and wellness community that celebrates vibrant and purposeful living through the embrace of mindfulness, movement and ancestral nutrition.
                    </div>
                    <br/>
                    <h3>Challenge</h3>
                    <div className="font-bold">
                        Position a new health coach as an industry expert and launch her fledgling business with first-person web copy establishing her as the leader of a health and wellness collective.
                    </div>
                    <br/>
                    <p>
                        Mind/Body Spot entrepreneur and freshly-certified health coach Ana Levine hired me to craft web copy for her fledgling health coaching and consultation business. Being new to the field made it imperative for Ana’s web copy to strike the authoritative tone of an industry expert. The copy also needed to be empathetic to the complex health issues of the website’s target audience, convey Ana’s authentic, no-nonsense voice and feature plentiful calls to action.
                    </p>
                    <br/>
                    <h3>Deliverables</h3>
                    <ul className="list-inside list-disc">
                        <li>Brand Positioning</li>
                        <li>Website Copy</li>
                    </ul>
                    <br/>
                    <h3>Solution</h3>
                    <p>
                        To undertake brand positioning, I conducted targeted research of Ana’s competitors and target audience, as well as the larger functional medicine and health coaching industries. Whereas a great deal of health coaches run a solo practice, Ana was in the process of hiring employees, envisioned growing a large company in the future, and already had a burgeoning clientele. This information inspired me to position Mind/Body Spot as a health and wellness collective with Ana as its leader. The main benefits of this positioning were minimized attention to Ana’s new certification, and cementing her position as an industry expert.
                    </p>
                    <br/>
                    <p>
                        I approached the web copy with the mindset of appealing to an audience in need of nurturing and self-care. I crafted SEO web copy in a relatable, first-person voice that is peppered with Ana’s personal, health journey anecdotes. This lends the copy and calls to action an authentic and empathetic tone that draws in visitors and sparks them to take action.
                    </p>
                </PortfolioBody>
            </PortfolioWrapper>
            <Footer />
        </div>
    );
}

export default PortfolioMindBodySpotPage;
