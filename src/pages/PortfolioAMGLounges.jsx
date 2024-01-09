import * as React from "react";
import Header from "../components/Header";
import PortfolioHeader from "../components/portfolio/Header";
import PortfolioWrapper from "../components/portfolio/Wrapper";
import PortfolioTitle from "../components/portfolio/Title";
import PortfolioBody from "../components/portfolio/Body";
import Footer from "../components/Footer";
import iHeader from "../img/portfolio/amg-lounges-header.png";
import iSplash from "../img/portfolio/amg-lounges-splash.jpg";

function PortfolioAMGLoungesPage() {
    return (
        <div>
            <Header />
            <PortfolioWrapper>
                <PortfolioHeader image={iHeader}>
                    <PortfolioTitle title="Creative Objective" />
                    Create social media campaigns for special events, as well as weekly social copy and content, for the Southern and Northern California branches (SoCal and Norcal) of AMG Lounges, the nation’s premier automobile club for Mercedes-Benz AMG enthusiasts.
                    <br/>
                    <br/>
                    <PortfolioTitle title="Deliverables" />
                    Dynamic Social Media Campaign for the 5th Annual AMG Lounges SoCal x Norcal Meet; Weekly Social Media Content Management for Instagram + Facebook.
                </PortfolioHeader>
                <PortfolioBody>
                    <h3 className="italic"><a href="http://www.amgsocallounge.com/" target="_blank">amgsocallounge.com</a></h3>
                    <a href="http://www.amgsocallounge.com/" target="_blank"><img alt="AMG SoCal Lounge website" src={iSplash} /></a>
                </PortfolioBody>
                    {/*<h3>Overview</h3>
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
                    </p>*/}
            </PortfolioWrapper>
            <Footer />
        </div>
    );
}

export default PortfolioAMGLoungesPage;
