import * as React from "react";
import Header from "../components/Header";
import Title from "../components/Title";
import Footer from "../components/Footer";

import ImgBodyVibes from "../img/portfolio/body-vibes-splash.jpg";
import ImgBravo from "../img/portfolio/bravo-splash.jpg";
import ImgJenP from "../img/portfolio/jen-p-splash.jpg";
import ImgKarmaTequila from "../img/portfolio/karma-tequila-splash-square.jpg";
import ImgLindaCollins from "../img/portfolio/linda-collins-splash.jpg";
import ImgMWAC from "../img/portfolio/mwac-splash.png";
import ImgMindBodySpot from "../img/portfolio/mind-body-spot-splash.jpg";
import ImgElliottMintz from "../img/portfolio/elliott-mintz-splash.jpg";
import ImgAMGLounges from "../img/portfolio/amg-lounges-splash.jpg";
import PortfolioEntryImg from "../components/portfolio/EntryImage";

function PortfolioPage() {
    return (
        <div>
            <Header />
            <Title title="Portfolio" />
            <div className="w-screen mt-14">
                <div className="max-w-7xl mx-auto">
                    <div className="relative h-[1280px]">
                        <PortfolioEntryImg
                            divStyle="absolute left-0 top-0 w-[625px] h-[625px]"
                            imgStyle="w-[625px] h-[625px]"
                            image={ImgLindaCollins}
                            client="Linda Collins"
                            work="Professional Bios"
                            url="/portfolio/linda-collins/"
                        />
                        <PortfolioEntryImg
                            divStyle="absolute left-[650px] top-0 w-[630px] h-[315px]"
                            imgStyle="w-[630px] h-[315px]"
                            image={ImgBodyVibes}
                            client="Body Vibes"
                            work="Elevator Pitch + Tagline + About"
                            url="/portfolio/body-vibes/"
                        />
                        <PortfolioEntryImg
                            divStyle="absolute left-[650px] top-[330px] w-[305px] h-[305px]"
                            imgStyle="w-[305px] h-[305px]"
                            image={ImgKarmaTequila}
                            client="Karma Tequila"
                            work="Web Copy + About Us"
                            url="/portfolio/karma-tequila/"
                        />
                        <PortfolioEntryImg
                            divStyle="absolute right-0 top-[330px] w-[310px] h-[625px]"
                            imgStyle="w-[310px] h-[625px]"
                            image={ImgBravo}
                            client="Bravo"
                            work="EP Launch + Artist Profile"
                            url="/portfolio/bravo/"
                        />
                        <PortfolioEntryImg
                            divStyle="absolute left-[650px] top-[650px] w-[305px] h-[305px]"
                            imgStyle="w-[305px] h-[305px]"
                            image={ImgMWAC}
                            client="Models with a Cause"
                            work="360 Strategy"
                            url="/portfolio/mwac/"
                        />
                        <PortfolioEntryImg
                            divStyle="absolute left-0 top-[650px] w-[315px] h-[630px]"
                            imgStyle="w-[315px] h-[630px]"
                            image={ImgMindBodySpot}
                            client="Mind/Body Spot"
                            work="Web Copy"
                            url="/portfolio/body-vibes/"
                        />
                        <PortfolioEntryImg
                            divStyle="absolute left-[330px] top-[650px] w-[305px] h-[305px]"
                            imgStyle="w-[305px] h-[305px]"
                            image={ImgJenP}
                            client="Jen P."
                            work="Brand Strategy"
                            url="/portfolio/jen-p/"
                        />
                        <PortfolioEntryImg
                            divStyle="absolute right-0 top-[970px] w-[310px] h-[310px]"
                            imgStyle="w-[310px] h-[310px]"
                            image={ImgElliottMintz}
                            client="Elliott Mintz"
                            work="Bio"
                            url="/portfolio/elliott-mintz"
                        />
                        <PortfolioEntryImg
                            divStyle="absolute left-[330px] top-[970px] w-[625px] h-[310px]"
                            imgStyle="w-[625px] h-[310px]"
                            image={ImgAMGLounges}
                            client="AMG Lounges"
                            work="Social Media"
                            url="/portfolio/amg-lounges"
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default PortfolioPage;
