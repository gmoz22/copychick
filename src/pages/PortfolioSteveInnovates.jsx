import * as React from "react";
import Header from "../components/Header";
import PortfolioHeader from "../components/portfolio/Header";
import PortfolioWrapper from "../components/portfolio/Wrapper";
import PortfolioTitle from "../components/portfolio/Title";
import PortfolioBody from "../components/portfolio/Body";
import PortfolioTagline from "../components/portfolio/Tagline";
import Footer from "../components/Footer";

function PortfolioSteveInnovatesPage() {
    return (
        <div>
            <Header />
            <PortfolioHeader title="Steve Innovates" />
            <PortfolioWrapper>
                <div>
                    <img className="w-full" src="https://images.placeholders.dev/?width=1280&height=400&text=Steve%20Innovates&bgColor=%23f7f6f6&textColor=%236d6e71" />
                </div>
                <br/>
                <br/>
                <PortfolioTitle title="Steve Innovates" />
                <PortfolioBody type="Web Copy" industry="Tech Entrepreneur">
                    <PortfolioTagline title="Minimum Copy, Maximum Impact" />
                    <br/>
                    <h3>Overview</h3>
                    <div>
                        Steve is a 20-year tech industry veteran and entrepreneur who's developed innovative digital products for some of the world's biggest brands, including Audi, Marvel, Mercedes-Benz, Charter Telecommunications, Sega, Heineken, Nissan, Mastercard, Elle, and many more.
                    </div>
                    <br/>
                    <h3>Challenge</h3>
                    <p>
                        While busy building big products for a crush of legacy brands, Steve had neglected to keep up his personal website. Building it was easy. Finding the right words to convey his competencies and ethos was the real challenge. Known for building products that are as lean and as they are robust, Steve wanted minimal web copy with maximum impact to mirror this principle.
                    </p>
                    <br/>
                    <h3>Solution</h3>
                    <p>
                        Steve came to me to write clean, uber-minimalist web copy for his website that mimicked the ethos of his clean, uber-minimalist development. I also collaborated with him on the site's design.
                    </p>
                </PortfolioBody>
            </PortfolioWrapper>
            <Footer />
        </div>
    );
}

export default PortfolioSteveInnovatesPage;
