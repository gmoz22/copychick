import * as React from "react";
import Header from "../components/Header";
import Title from "../components/Title";
import Body from "../components/Body";
import Footer from "../components/Footer";

function ContactPage() {
    return (
        <div>
            <Header/>
            <Title title="Let's Chat" />
            <Body>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dignissimos eveniet explicabo natus nemo possimus praesentium, quia quisquam! Aliquid aut corporis eos eum ex fugiat itaque minus nemo non optio quaerat qui quidem quisquam, repellat ullam unde vel vero! Assumenda dignissimos dolorum fugit modi praesentium quisquam ratione rem repellat tenetur!
            </Body>
            <Footer />
        </div>
    );
}

export default ContactPage;
