import React, {useState} from "react";
import axios from "axios";
import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";

const goToForm = () => {
    document.getElementById('form').scrollIntoView({ behavior: 'smooth' });
}

function ContactPage() {
    const initialFormData = {
        first_name: "",
        last_name: "",
        email: "",
        subject: "",
        message: ""
    }
    const initialFormButtonText = <>Send it!</>
    const formButtonLoading = <svg className="animate-spin mx-5 h-5 w-5 text-white"
                                   xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="#FF3FCB" stroke-width="4"></circle>
        <path className="opacity-75" fill="#FF3FCB"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
    const [formData, setFormData] = useState(initialFormData)
    const [formMessage, setFormMessage] = useState(<></>)
    const [formButtonText, setFormButtonText] = useState(initialFormButtonText)
    const [formButtonDisabled, setFormButtonDisabled] = useState(false)
    const resetForm = () => {
        setFormData(initialFormData)
        // document.getElementById("contact_form").reset()
        setFormMessage(<></>)
        setFormButtonDisabled(false)
        setFormButtonText(initialFormButtonText)
    }
    const handleForm = (e) => {
        e.preventDefault()
        setFormMessage(<></>)
        setFormButtonText(formButtonLoading)
        axios({
            method: "POST",
            url: "/send.php",
            data: formData
        }).then((response) => {
            setFormButtonText(initialFormButtonText)
            if (response.data.status === 'success') {
                setFormButtonText(<>Message Sent</>)
                /*<span className="cursor-pointer underline" onClick={resetForm}>Send another.</span>*/
                setFormMessage(<span className="text-white">
                    I'll get back to you soon!
                </span>);
                setFormButtonDisabled(true)
            } else if (response.data.status === 'fail') {
                setFormMessage(<span className="text-white">
                    Message failed to send.<br/>
                    { response.data.error?.length ? (
                        <ul>
                            {response.data.error.map((error) => {
                                return <li>{error}.</li>
                            })}
                        </ul>
                    ) : null }
                </span>)
            }
        })
    }

    return (
        <div>
            <Header/>
            <div className="bg-primary mt-28">
                <Body className="bg-primary mt-28 pt-28">
                    <div className="w-full bg-white relative sm:p-24 p-8">
                        <div className="z-0 absolute sm:top-6 sm:left-8 top-2 left-3 sm:text-12xl sm:leading-[144px] text-6xl leading-2 font-extrabold">
                            LE<br/>
                            T'S
                        </div>
                        <div className="z-0 absolute sm:bottom-6 sm:right-8 bottom-2 right-3 sm:text-12xl sm:leading-[144px] text-6xl leading-2 font-extrabold">
                            CH<br/>
                            AT
                        </div>
                        <div className="w-full bg-primary sm:p-28 p-8 text-white sm:text-lg">
                            <div className="z-10 relative w-full">
                                <div className="mt-6 sm:text-4xl text-md font-bold">Schedule a FREE CONSULTATION!</div>
                                <br/>
                                <div>Let’s chat about how my premium copy and branding solutions will help rock your ROI and boost your reputation.</div>
                                <br/>
                                <div className="font-bold sm:text-xl">During our scheduled call:</div>
                                &bull; You share your creative needs.<br/>
                                &bull;&bull; I drop some fresh ideas.<br/>
                                &bull;&bull;&bull; We determine if it’s a good fit.<br/>
                                <br/>
                                <div className="font-bold sm:text-xl">If we decide to proceed, I’ll shoot you a competitively-priced quote and contract. You sign off and we roll!</div>
                                <br/>
                                <div className="font-bold sm:text-xl">If things don’t jive, there’s no obligation and no worries.</div>
                                <br/>
                                <div>Get started by <span onClick={() => goToForm()} className="font-bold visited:text-primary_50 cursor-pointer border-b-2 border-dashed border-white hover:border-solid visited:text-white">filling out the short form below</span>. I’ll be in touch ASAP!</div>
                                <br/>
                                <div className="font-bold sm:text-2xl">Hiring a talented copy pro doesn’t get any more seamless! Book baby, book!</div>
                            </div>
                        </div>
                        <a id="form"></a>
                    </div>
                    <div className="w-full mt-28 text-center">
                        <form className="caret-primary" id="contact_form" name="contact" method="POST" onSubmit={handleForm}>
                            <input className="rounded-3xl p-4 text-center text-gray-700 w-[420px] h-[48px] font-bold text-2xl p-2 outline-none" type="text" name="first_name" onChange={(e) => setFormData({...formData, first_name: e.target.value})} placeholder="First Name" /><br/>
                            <br/>
                            <input className="rounded-3xl p-4 text-center text-gray-700 w-[420px] h-[48px] font-bold text-2xl p-2 outline-none" type="text" name="last_name" onChange={(e) => setFormData({...formData, last_name: e.target.value})} placeholder="Last Name" /><br/>
                            <br/>
                            <input className="rounded-3xl p-4 text-center text-gray-700 w-[420px] h-[48px] font-bold text-2xl p-2 outline-none" type="text" name="email" onChange={(e) => setFormData({...formData, email: e.target.value})} placeholder="Email Address" /><br/>
                            <br/>
                            <input className="rounded-3xl p-4 text-gray-700 w-[420px] h-[48px] font-bold text-xl p-2 outline-none" type="text" name="subject" onChange={(e) => setFormData({...formData, subject: e.target.value})} placeholder="Subject" /><br/>
                            <br/>
                            <textarea className="rounded-3xl p-4 text-gray-700 w-[420px] h-[260px] font-bold text-lg p-2 outline-none" name="message" onChange={(e) => setFormData({...formData, message: e.target.value})} placeholder="Message..." /><br/>
                            <br/>
                            <button disabled={formButtonDisabled} className="disabled:bg-green-500 disabled:cursor-not-allowed bg-black text-white text-xl font-bold px-8 py-3 rounded-full drop-shadow-2xl active:text-primary transition-all duration-300 active:drop-shadow-none" type="submit" value="Send it!" name="submit">{formButtonText}</button><br/>
                            <br/>
                            <div className="w-full text-xl font-bold">{formMessage}</div>
                        </form>
                    </div>
                </Body>
                <Footer />
            </div>
         </div>
    );
}

export default ContactPage;
