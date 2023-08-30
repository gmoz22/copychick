import * as React from "react";
import Header from "../components/Header";
import PortfolioHeader from "../components/portfolio/Header";
import PortfolioWrapper from "../components/portfolio/Wrapper";
import PortfolioTitle from "../components/portfolio/Title";
import PortfolioBody from "../components/portfolio/Body";
import Footer from "../components/Footer";
import iHeader from "../img/portfolio/mwac-header.png";

function PortfolioMWACPage() {
    return (
        <div>
            <Header />
            <PortfolioWrapper>
                <PortfolioHeader image={iHeader}>
                    <PortfolioTitle title="Creative Objective" />
                    Create a Brand Strategy for a successful Career Coach as part of a comprehensive plan to scale up her online business.
                    <br/>
                    <br/>
                    <PortfolioTitle title="Deliverables" />
                    Brand Strategy – Messaging, Vision, Values, Tagline, Audience Persona, Voice Guidelines, Brand Story, Tagline, and more.
                </PortfolioHeader>
                <PortfolioBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium assumenda blanditiis consequatur deleniti deserunt, eligendi eum facilis fuga fugiat hic illo in nostrum quam quia reiciendis totam unde veniam vitae?
                </PortfolioBody>
                    {/*<h3>Overview</h3>
                    <div>
                        Models With a Cause (MWAC) is a Los Angeles-based, 501 (c)(3) nonprofit organization that connects advocates, donors and resources with global and humanitarian causes.
                    </div>
                    <br/>
                    <h3>Challenge</h3>
                    <div className="font-bold">
                        Develop a comprehensive Brand Strategy and 360 Marketing Strategy from the ground up for a newly launched nonprofit.
                    </div>
                    <br/>
                    <p>
                        Producing excellent work was imperative. The President of MWAC was supported in her charitable endeavors by several A-list celebrities and highly-influential people whose names would appear on the MWAC website. MWAC had to be shaped into a high-quality brand capable of bolstering the personal brands and public opinion of these VIPS. Our strategy needed to be both savvy enough to satisfy these famous figures while also inspiring support for MWAC among people from all walks of life.
                    </p>
                    <br/>
                    <h3>Deliverables</h3>
                    <ul className="list-inside list-disc">
                        <li>Brand name</li>
                        <li>Brand Strategy Guidelines</li>
                        <li>Brand Identity Guidelines</li>
                        <li>Website Copy</li>
                        <li>Tagline</li>
                        <li>Professional profiles for the President of MWAC and each member of the Board of Directors</li>
                        <li>Social Campaign for brand launch</li>
                        <li>Collaborate on UI/UX for MWAC website </li>
                    </ul>
                    <br/>
                    <h3>Solution</h3>
                    <p>
                        As the lead for all branding, copy and communications, I collaborated extensively with a team comprised of the President of MWAC, key members of its Board, and the digital team to produce a successful 360-strategy to establish and promote brand awareness. My goal was to ensure every MWAC touchpoint served as a call to action for getting involved – either by volunteering, advocating or donating - in the MWAC community.
                    </p>
                    <br/>
                    <p>
                        What’s in name? An entire brand strategy, of course. Naming the nonprofit Models With a Cause was inspired by its founders illustrious career as an international fashion model.
                        Within the context of MWAC, “models” carries the connotation of what it means to be a “role model.” Supporting MWAC means becoming part of a philanthropic community who lead by the example of giving, thus inspiring others to become role models, too.
                    </p>
                    <br/>
                    <p>
                        The “role models” ethos – “Be the role model you were born to be” is the MWAC tagline -- anchors both MWAC’s Brand Strategy and web copy. Becoming an MWAC role model who leads by example and inspires others is a call to action embedded in its mission and vision statements, roll call of values, brand story, and it is the crux of the brand’s positioning outlined in the Brand Guidelines.
                    </p>
                    <br/>
                    <p>
                        Before running with the “role models” strategy we presented it to several VIP supporters of MWAC. It was a big hit among people whose careers rely heavily on public perception, and for whom being a role model and inspiring fans comes with territory.
                    </p>
                    <br/>
                    <p>
                        I worked closely with the graphic design and digital teams to help design MWAC’s Brand Identity, designating font selections and the correct use of photography and images. I collaborated extensively on the design of the lean, Panatone logo in fresh hues of blue so that it struck an impactful, fresh, and inviting to compliment the Brand Strategy.
                    </p>
                    <br/>
                    <p>
                        MWAC’s web copy is written in the highly provocative and emotional vein of charitable appeals. Because it was essential for images and calls-to-action to complement the text, I collaborated on the website graphic design and image and photography selection to heighten the UI impact.
                    </p>
                    <br/>
                    <p>
                        I conceptualized and launched MWAC’s first two social campaigns, both deployed on Facebook: Nominate a Role Model and Network of Inspiration. Nominate a Role Model coincided with the launch of the MWAC website. I deployed it with tri-weekly postings on Facebook for two months, soliciting users to nominate a friend or person who was championing a worthy cause. The MWAC Board of Directors would then choose a winning Role Model to receive a special donation. During these two months, forty-six people were nominated, and the MWAC Facebook Page garnered 816 new followers.
                    </p>
                    <br/>
                    <p>
                        Network of Inspiration, deployed bi-weekly for six weeks, solicited Facebook users to donate and/or volunteer at a benchmark level in exchange for being listed as part of an influential Network of Inspiration that had pride of place on the MWAC website. The MWAC Facebook Page garnered 536 new followers during this six weeks.
                    </p>*/}
            </PortfolioWrapper>
            <Footer />
        </div>
    );
}

export default PortfolioMWACPage;
