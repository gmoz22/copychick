import * as React from "react";
import Header from "../components/Header";
import PortfolioWrapper from "../components/portfolio/Wrapper";
import PortfolioHeader from "../components/portfolio/Header";
import PortfolioTitle from "../components/portfolio/Title";
import PortfolioBody from "../components/portfolio/Body";
import Footer from "../components/Footer";
import iHeader from "../img/portfolio/elliott-mintz-header.png";
import iBio from "../img/portfolio/elliott-mintz-bio-mwac.jpg";
import iProfile from "../img/portfolio/bravo-profile.jpg";

function PortfolioElliotMintzPage() {
    return (
        <div>
            <Header />
            <PortfolioWrapper>
                <PortfolioHeader image={iHeader}>
                    <PortfolioTitle title="Creative Objective" />
                    Craft two bios – one philanthropy-focused, one professionally all-encompassing - for the legendary media personality and celebrity publicist, Elliot Mintz.
                    <br/>
                    <br/>
                    <PortfolioTitle title="Deliverables" />
                    Two Professional Bios.
                </PortfolioHeader>
                <PortfolioBody>
                    <img alt="Elliot Mintz Bio" src={iBio} />
                </PortfolioBody>
            </PortfolioWrapper>
            <Footer />
        </div>
    );
}

export default PortfolioElliotMintzPage;
