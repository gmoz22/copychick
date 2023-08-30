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
import HoverOverlay from "../components/HoverOverlay";

function PortfolioPage() {
    return (
        <div>
            <Header />
            <Title title="Portfolio" />
            <div className="w-screen mt-14">
                <div className="w-full xl:max-w-7xl mx-auto">
                    <div className="md:flex-none relative xl:h-[1280px]">
                        <HoverOverlay
                            divStyle="w-4/5 mx-auto my-14 xl:m-0 relative xl:absolute xl:left-0 xl:top-0 xl:w-[635px] xl:h-[635px]"
                            imgStyle="w-full xl:w-[635px] xl:h-[635px]"
                            overlayStyle="text-white bg-primary_70"
                            overlayHeaderStyle="text-4xl font-bold"
                            image={ImgLindaCollins}
                            showHR={true}
                            header="Linda Collins"
                            caption="Professional Bios"
                            url="/portfolio/linda-collins/"
                        />
                        <HoverOverlay
                            divStyle="w-4/5 mx-auto my-14 xl:m-0 relative xl:absolute xl:left-[650px] xl:top-0 xl:w-[630px] xl:h-[315px]"
                            imgStyle="w-full xl:w-[630px] xl:h-[315px]"
                            overlayStyle="text-white bg-primary_70"
                            overlayHeaderStyle="text-4xl font-bold"
                            image={ImgBodyVibes}
                            showHR={true}
                            header="Body Vibes"
                            caption="Elevator Pitch + Tagline + About"
                            url="/portfolio/body-vibes/"
                        />
                        <HoverOverlay
                            divStyle="w-4/5 mx-auto my-14 xl:m-0 relative xl:absolute xl:left-[650px] xl:top-[330px] xl:w-[305px] xl:h-[305px]"
                            imgStyle="w-full xl:w-[305px] xl:h-[305px]"
                            overlayStyle="text-white bg-primary_70"
                            overlayHeaderStyle="text-4xl font-bold"
                            image={ImgKarmaTequila}
                            showHR={true}
                            header="Karma Tequila"
                            caption="Web Copy + About Us"
                            url="/portfolio/karma-tequila/"
                        /><HoverOverlay
                            divStyle="w-4/5 mx-auto my-14 xl:m-0 relative xl:absolute xl:right-0 xl:top-[330px] xl:w-[310px] xl:h-[625px]"
                            imgStyle="w-full xl:w-[310px] xl:h-[625px]"
                            overlayStyle="text-white bg-primary_70"
                            overlayHeaderStyle="text-4xl font-bold"
                            image={ImgBravo}
                            showHR={true}
                            header="Bravo"
                            caption="EP Launch + Artist Profile"
                            url="/portfolio/bravo/"
                        />
                        <HoverOverlay
                            divStyle="w-4/5 mx-auto my-14 xl:m-0 relative xl:absolute xl:left-[650px] xl:top-[650px] xl:w-[305px] xl:h-[305px]"
                            imgStyle="w-full xl:w-[305px] xl:h-[305px]"
                            overlayStyle="text-white bg-primary_70"
                            overlayHeaderStyle="text-4xl font-bold"
                            image={ImgMWAC}
                            showHR={true}
                            header="Models with a Cause"
                            caption="360 Strategy"
                            url="/portfolio/mwac/"
                        />
                        <HoverOverlay
                            divStyle="w-4/5 mx-auto my-14 xl:m-0 relative xl:absolute xl:left-0 xl:top-[650px] xl:w-[315px] xl:h-[630px]"
                            imgStyle="w-full xl:w-[315px] xl:h-[630px]"
                            overlayStyle="text-white bg-primary_70"
                            overlayHeaderStyle="text-4xl font-bold"
                            image={ImgMindBodySpot}
                            showHR={true}
                            header="Mind/Body Spot"
                            caption="Web Copy"
                            url="/portfolio/mind-body-spot/"
                        />
                        <HoverOverlay
                            divStyle="w-4/5 mx-auto my-14 xl:m-0 relative xl:absolute xl:left-[330px] xl:top-[650px] xl:w-[305px] xl:h-[305px]"
                            imgStyle="w-full xl:w-[305px] xl:h-[305px]"
                            overlayStyle="text-white bg-primary_70"
                            overlayHeaderStyle="text-4xl font-bold"
                            image={ImgJenP}
                            showHR={true}
                            header="Jen P."
                            caption="Brand Strategy"
                            url="/portfolio/jen-p/"
                        />
                        <HoverOverlay
                            divStyle="w-4/5 mx-auto my-14 xl:m-0 relative xl:absolute xl:right-0 xl:top-[970px] xl:w-[310px] xl:h-[310px]"
                            imgStyle="w-full xl:w-[310px] xl:h-[310px]"
                            overlayStyle="text-white bg-primary_70"
                            overlayHeaderStyle="text-4xl font-bold"
                            image={ImgElliottMintz}
                            showHR={true}
                            header="Elliot Mintz"
                            caption="Bio"
                            url="/portfolio/elliot-mintz/"
                        />
                        <HoverOverlay
                            divStyle="w-4/5 mx-auto my-14 xl:m-0 relative xl:absolute xl:left-[330px] xl:top-[970px] xl:w-[625px] xl:h-[310px]"
                            imgStyle="w-full xl:w-[625px] xl:h-[310px]"
                            overlayStyle="text-white bg-primary_70"
                            overlayHeaderStyle="text-4xl font-bold"
                            image={ImgAMGLounges}
                            showHR={true}
                            header="AMG Lounges"
                            caption="Social Media"
                            url="/portfolio/amg-lounges/"
                        />
                    </div>
                </div>

                {/*<div className="max-w-7xl mx-auto">
                    <div className="relative h-[1280px]">
                        <HoverOverlay
                            divStyle="absolute left-0 top-0 w-[625px] h-[625px]"
                            imgStyle="w-[625px] h-[625px]"
                            overlayStyle="text-white bg-primary_70"
                            overlayHeaderStyle="text-4xl font-bold"
                            image={ImgLindaCollins}
                            showHR={true}
                            header="Linda Collins"
                            caption="Professional Bios"
                            url="/portfolio/linda-collins/"
                        />
                        <HoverOverlay
                            divStyle="absolute left-[650px] top-0 w-[630px] h-[315px]"
                            imgStyle="w-[630px] h-[315px]"
                            overlayStyle="text-white bg-primary_70"
                            overlayHeaderStyle="text-4xl font-bold"
                            image={ImgBodyVibes}
                            showHR={true}
                            header="Body Vibes"
                            caption="Elevator Pitch + Tagline + About"
                            url="/portfolio/body-vibes/"
                        />
                        <HoverOverlay
                            divStyle="absolute left-[650px] top-[330px] w-[305px] h-[305px]"
                            imgStyle="w-[305px] h-[305px]"
                            overlayStyle="text-white bg-primary_70"
                            overlayHeaderStyle="text-4xl font-bold"
                            image={ImgKarmaTequila}
                            showHR={true}
                            header="Karma Tequila"
                            caption="Web Copy + About Us"
                            url="/portfolio/karma-tequila/"
                        />
                        <HoverOverlay
                            divStyle="absolute right-0 top-[330px] w-[310px] h-[625px]"
                            imgStyle="w-[310px] h-[625px]"
                            overlayStyle="text-white bg-primary_70"
                            overlayHeaderStyle="text-4xl font-bold"
                            image={ImgBravo}
                            showHR={true}
                            header="Bravo"
                            caption="EP Launch + Artist Profile"
                            url="/portfolio/bravo/"
                        />
                        <HoverOverlay
                            divStyle="absolute left-[650px] top-[650px] w-[305px] h-[305px]"
                            imgStyle="w-[305px] h-[305px]"
                            overlayStyle="text-white bg-primary_70"
                            overlayHeaderStyle="text-4xl font-bold"
                            image={ImgMWAC}
                            showHR={true}
                            header="Models with a Cause"
                            caption="360 Strategy"
                            url="/portfolio/mwac/"
                        />
                        <HoverOverlay
                            divStyle="absolute left-0 top-[650px] w-[315px] h-[630px]"
                            imgStyle="w-[315px] h-[630px]"
                            overlayStyle="text-white bg-primary_70"
                            overlayHeaderStyle="text-4xl font-bold"
                            image={ImgMindBodySpot}
                            showHR={true}
                            header="Mind/Body Spot"
                            caption="Web Copy"
                            url="/portfolio/mind-body-spot/"
                        />
                        <HoverOverlay
                            divStyle="absolute left-[330px] top-[650px] w-[305px] h-[305px]"
                            imgStyle="w-[305px] h-[305px]"
                            overlayStyle="text-white bg-primary_70"
                            overlayHeaderStyle="text-4xl font-bold"
                            image={ImgJenP}
                            showHR={true}
                            header="Jen P."
                            caption="Brand Strategy"
                            url="/portfolio/jen-p/"
                        />
                        <HoverOverlay
                            divStyle="absolute right-0 top-[970px] w-[310px] h-[310px]"
                            imgStyle="w-[310px] h-[310px]"
                            overlayStyle="text-white bg-primary_70"
                            overlayHeaderStyle="text-4xl font-bold"
                            image={ImgElliottMintz}
                            showHR={true}
                            header="Elliott Mintz"
                            caption="Bio"
                            url="/portfolio/elliott-mintz"
                        />
                        <HoverOverlay
                            divStyle="absolute left-[330px] top-[970px] w-[625px] h-[310px]"
                            imgStyle="w-[625px] h-[310px]"
                            overlayStyle="text-white bg-primary_70"
                            overlayHeaderStyle="text-4xl font-bold"
                            image={ImgAMGLounges}
                            showHR={true}
                            header="AMG Lounges"
                            caption="Social Media"
                            url="/portfolio/amg-lounges"
                        />
                    </div>
                </div>*/}

            </div>
            <Footer />
        </div>
    );
}

export default PortfolioPage;
