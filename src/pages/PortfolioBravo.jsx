import * as React from "react";
import Header from "../components/Header";
import PortfolioHeader from "../components/portfolio/Header";
import PortfolioWrapper from "../components/portfolio/Wrapper";
import PortfolioTitle from "../components/portfolio/Title";
import PortfolioBody from "../components/portfolio/Body";
import PortfolioTagline from "../components/portfolio/Tagline";
import ImgBravo1 from '../img/portfolio/bravo-1.jpg';
import Footer from "../components/Footer";

function PortfolioBravoPage() {
    return (
        <div>
            <Header />
            <PortfolioHeader title="Bravo" />
            <PortfolioWrapper>
                <div>
                    <img className="w-full" src={ImgBravo1} />
                </div>
                <br/>
                <br/>
                <PortfolioTitle title="Bravo" />
                <PortfolioBody type="EP Launch + Artist Profile" industry="Recording Artist">
                    <PortfolioTagline title="Enlist or Perish" />
                    <br/>
                    <h3>Overview</h3>
                    <div>
                        Bravo is a Los Angeles-based hip-hop artist and digital entrepreneur with several high-profile collabs and mix tapes under his belt.
                    </div>
                    <br/>
                    <h3>Challenge</h3>
                    <p>
                        After achieving underground success as a hip hop artist through mix tapes, rap battles and collaborations with high-profile rappers, Bravo was ready to hit the mainstream with the release of his first EP, Enlist or Perish. Coinciding with his EP release was the launch of Bravo Connect, a digital media platform Bravo created to give recording artists maximum control over their music and media catalogs. Bravo hired me to deliver a single, press-ready profile to achieve three things: introduce him as a mainstream artist, publicize the release of his EP, and announce the launch of Bravo Connect.
                    </p>
                    <br/>
                    <h3>Deliverables</h3>
                    <ul className="list-inside list-disc">
                        <li>Artist/EP/Digital Project Profile</li>
                    </ul>
                    <br/>
                    <h3>Solution</h3>
                    <p>
                        Inspired by the artist profiles routinely found in hip-hop industry magazines, I crafted a coming out piece for Bravo that is equal parts press release and professional bio. With hip hop culture steeped in bragging rights and shout outs to the cities its artists rep, the first half of the piece immediately established Bravo as an inheritor of the West Coast rap lineage. I propped up this idea by running down Bravo’s collabs with famous rappers, and linked his talent to the soul-soaked DNA he shares with his uncle, the legendary R&B singer Lou Rawls.
                    </p>
                    <br/>
                    <p>
                        The second half of the profile of Enlist or Perish, providing a snippet of what each song is like. Once it was clear that Bravo is a rap force to be reckoned with, I moved on to the launch of Bravo Connect.
                    </p>
                </PortfolioBody>
            </PortfolioWrapper>
            <Footer />
        </div>
    );
}

export default PortfolioBravoPage;
