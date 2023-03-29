import * as React from "react";
import Header from "../components/Header";
import PortfolioHeader from "../components/portfolio/Header";
import PortfolioWrapper from "../components/portfolio/Wrapper";
import PortfolioTitle from "../components/portfolio/Title";
import PortfolioBody from "../components/portfolio/Body";
import PortfolioTagline from "../components/portfolio/Tagline";
import Footer from "../components/Footer";

function PortfolioAMGLoungesPage() {
    return (
        <div>
            <Header />
            <PortfolioHeader title="AMG Lounges" />
            <PortfolioWrapper>
                <div>
                    <img className="w-full" src="https://images.placeholders.dev/?width=1280&height=400&text=AMG%20Lounges&bgColor=%23f7f6f6&textColor=%236d6e71" />
                </div>
                <br/>
                <br/>
                <PortfolioTitle title="AMG Lounges" />
                <PortfolioBody type="Social Campaigns" industry="Automobile Club">
                    <PortfolioTagline title="The premier community for Mercedes-AMG owners." />
                    <br/>
                    <h3>Overview</h3>
                    <div>
                        AMG Lounges is a national network of local car communities for Mercedes-Benz AMG enthusiasts. The AMG SoCal Lounge is the first and most active of these communities, launched in Los Angeles in 2014.
                    </div>
                    <br/>
                    <h3>Challenge</h3>
                    <p>
                        With over 2,800 members and 10,000 followers on IG, the AMG SoCal Lounge boasts a solid and loyal following that continues to grow year-over-year. This growth is impressive considering it’s all organic -- the community has never had a dedicated social media manager, nor launched a concrete social media campaign. Much of the community’s IG content was either posted by the founder, or by group members who took on the role for a while. Once the founder of SoCal Lounge moved outside of Los Angeles, he was no longer able to personally promote the community at local car shows and group events. This meant it was time to invest in social marketing aimed at continuing the group’s dynamic growth.
                    </p>
                    <br/>
                    <h3>Solution</h3>
                    <p>
                        As of February 2022, I’m...
                    </p>
                </PortfolioBody>
            </PortfolioWrapper>
            <Footer />
        </div>
    );
}

export default PortfolioAMGLoungesPage;
