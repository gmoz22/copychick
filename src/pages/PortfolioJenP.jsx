import * as React from "react";
import Header from "../components/Header";
import PortfolioHeader from "../components/portfolio/Header";
import PortfolioWrapper from "../components/portfolio/Wrapper";
import PortfolioTitle from "../components/portfolio/Title";
import PortfolioBody from "../components/portfolio/Body";
import PortfolioTagline from "../components/portfolio/Tagline";
import ImgJenP1 from '../img/portfolio/jen-p-1.jpg';
import Footer from "../components/Footer";

function PortfolioJenPPage() {
    return (
        <div>
            <Header />
            <PortfolioHeader title="Jen P." />
            <PortfolioWrapper>
                <div>
                    <img className="w-full" src={ImgJenP1} />
                </div>
                <br/>
                <br/>
                <PortfolioTitle title="Jen P." />
                <PortfolioBody type="Brand Strategy" industry="Lifestyle Entrepreneur">
                    <PortfolioTagline title="Where Soul Meets Goal" />
                    <br/>
                    <h3>Overview</h3>
                    <div>
                        Life coach Jen P. empowers women entrepreneurs to live out loud building businesses they love.
                    </div>
                    <br/>
                    <h3>Challenge</h3>
                    <p>
                        After three years of explosive growth without any significant marketing investment, Jen needed a one-of-a-kind Brand Strategy to anchor and drive her business. Verbally, Jen was crystal clear about what she wanted her brand to look and feel like, but she lacked any brand identity and marketing materials (not even business cards!) to better share her vision. The life coaching space tends to be a saturated industry in which its difficult to stand out. Jen needed fresh positioning and a value proposition to really make her standout.
                    </p>
                    <br/>
                    <h3>Deliverables</h3>
                    <ul className="list-inside list-disc">
                        <li>Artist/EP/Digital Project Profile</li>
                    </ul>
                    <br/>
                    <h3>Solution</h3>
                    <p>
                        Discovery was heavy! Jen presented me with an endless selection of competitors to research, much of her written work which she was planning on turning into an online course, and I invested significant time discussing the overall vision she had for her business.
                    </p>
                    <br/>
                    <p>
                        I channeled all of this into a one-of-a-kind Brand Strategy capturing the sassy vibe and savvy ladypreneur spirit of the Jen P. brand. Chief among the brand strategy was positioning Jen in a class of her own. Since she had a long track record of coaching aspiring life coaches on how to launch their business, and because the course she was writing focused on this, it was a no-brainer to position her as “the coaches coach.”
                    </p>
                </PortfolioBody>
            </PortfolioWrapper>
            <Footer />
        </div>
    );
}

export default PortfolioJenPPage;
