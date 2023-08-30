import * as React from "react";
import Header from "../components/Header";
import PortfolioWrapper from "../components/portfolio/Wrapper";
import PortfolioHeader from "../components/portfolio/Header";
import PortfolioTitle from "../components/portfolio/Title";
import PortfolioBody from "../components/portfolio/Body";
import Footer from "../components/Footer";
import iHeader from "../img/portfolio/karma-tequila-header.png";

function PortfolioKarmaTequilaPage() {
    return (
        <div>
            <Header />
            <PortfolioWrapper>
                <PortfolioHeader image={iHeader}>
                    <PortfolioTitle title="Creative Objective" />
                    Produce sophisticated digital copy detailing the heritage and distillation process for the award-winning spirits brand, Karma Tequila.
                    <br/>
                    <br/>
                    <PortfolioTitle title="Deliverables" />
                    Brand Profile, PROCESS Web Page.
                </PortfolioHeader>
                <PortfolioBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cumque eos nobis ratione voluptates. Architecto consectetur cum dolor facere illo in minus, nemo nisi nulla pariatur ratione tempora vel voluptatibus.
                </PortfolioBody>
            </PortfolioWrapper>
{/*
            <PortfolioHeader title="Karma Tequila" />
            <PortfolioWrapper>
                <div>
                    <img className="w-full" src={ImgKarma1} />
                </div>
                <br/>
                <br/>
                <PortfolioTitle title="Karma Tequila" />
                <PortfolioBody type="Web Copy + About Us" industry="Alcohol + Spirits">
                    <PortfolioTagline title="Distill and Chill / From Farm to Fruition" />
                    <br/>
                    <h3>Overview</h3>
                    <div>
                        Karma Tequila is an award-winning, ultra-premium tequila made from 100% Weber Blue Agave in the highlands of Jalisco State in Mexico.
                    </div>
                    <br/>
                    <h3>Challenge</h3>
                    <div className="font-bold">
                        Produce heritage-heavy web copy for a newly-launched tequila brand.
                    </div>
                    <br/>
                    <p>
                        Karma Tequila is owned by the Semler Family, the acclaimed California vintners behind Semler and Saddlerock wines. Although the family was entrenched in the wine space, Karma Tequila was their first foray into the world of spirits. To establish Karma Tequila as a go-to luxury tequila brand, its owners wanted to promote a brand image steeped in heritage. Toward this end, I was brought in to produce copy for two, web-friendly deliverables.
                    </p>
                    <br/>
                    <h3>Deliverables</h3>
                    <ul className="list-inside list-disc">
                        <li>ABOUT profile</li>
                        <li>PROCESS profile detailing the distillation process</li>
                    </ul>
                    <br/>
                    <h3>Solution</h3>
                    <p>
                        I approached Karma Tequila as a sensory storytelling project. Writing in the brand’s sleek and sexy voice, I produced decadent copy heavy on visual and thirst-quenching imagery that provokes the spirit afficionado’s palate.
                    </p>
                    <br/>
                    <p>
                        Within this sensory context, both deliverables strive to evoke a sense of time and place that is connected to the spirit-manufacturing heritage of America, and the rich tradition of tequila production in Mexico. Karma Tequila’s ABOUT profile is rooted in American heritage, from highlighting its ownership by the Semlers to prominently presenting the story of the American Oak Kentucky Bourbon barrels in which Karma Tequila is meticulously aged.
                    </p>
                    <br/>
                    <p>
                        Karma Tequila’s PROCESS profile is an atmospheric journey into the highlands of Jalisco, Mexico. Here is where the agave plants are grown, and where decades-old, hands-on traditions are employed in developing premium, small-batch tequila. From Kentucky to Jalisco, heritage is the unifying factor that cements Karma Tequila’s pride of place in the realm of luxury tequila.
                    </p>
                </PortfolioBody>
            </PortfolioWrapper>*/}
            <Footer />
        </div>
    );
}

export default PortfolioKarmaTequilaPage;
