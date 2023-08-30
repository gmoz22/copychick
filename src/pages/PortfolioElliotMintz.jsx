import * as React from "react";
import Header from "../components/Header";
import PortfolioWrapper from "../components/portfolio/Wrapper";
import PortfolioHeader from "../components/portfolio/Header";
import PortfolioTitle from "../components/portfolio/Title";
import PortfolioBody from "../components/portfolio/Body";
import Footer from "../components/Footer";
import iHeader from "../img/portfolio/elliott-mintz-header.png";

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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium assumenda blanditiis consequatur deleniti deserunt, eligendi eum facilis fuga fugiat hic illo in nostrum quam quia reiciendis totam unde veniam vitae?
                </PortfolioBody>
            </PortfolioWrapper>
            <Footer />
        </div>
    );
}

export default PortfolioElliotMintzPage;
