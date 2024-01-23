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
            <div className="mt-8">
                <Body className="mt-8 pt-8">
                    {/*<div className="z-0 text-primary absolute sm:top-48 sm:left-8 top-2 left-3 sm:text-12xl sm:leading-[144px] text-6xl leading-2 font-extrabold">
                        LE<br/>
                        T'S<br/>
                        </div>
                        <div className="z-0 text-primary absolute sm:top-72 sm:left-8 top-42 left-3 sm:text-12xl sm:leading-[144px] text-6xl leading-2 font-extrabold">
                        CH<br/>
                        AT
                    </div>*/}
                        <div className="w-full sm:p-28 sm:pb-12 p-8 text-black sm:text-lg text-md">
                            <div className="w-full relative sm:p-8 p-8">
                            <div className="z-10 relative w-full">
                                <div className="sm:text-7xl text-lg font-bold text-center text-primary">LET'S CHAT!</div>
                                <br/>
                                <br/>
                                <div>Schedule a FREE consultation to discuss how my premium copy and branding solutions can rock your ROI and boost your reputation.</div>
                                <br/>
                                <div className="sm:text-xl">During our scheduled call:</div>
                                <span className="text-primary">&bull;</span> You share your creative needs.<br/>
                                <span className="text-primary">&bull;&bull;</span> I drop some fresh ideas.<br/>
                                <span className="text-primary">&bull;&bull;&bull;</span> We determine if it's a good fit.<br/>
                                <br/>
                                <div className="sm:text-xl">If we decide to proceed, I'll shoot you a competitively-priced quote and contract, and once you sign off, we roll! If things don't jive, there's no obligation and no worries.</div>
                                <br/>
                                <div>Get started by <span onClick={() => goToForm()} className="font-bold text-primary visited:text-primary_50 cursor-pointer border-b-2 border-dashed border-white hover:border-solid visited:text-white">filling out the short form below</span>. I'll be in touch with you ASAP.</div>
                                <br/>
                                <div className="font-bold sm:text-2xl">Hiring a talented copy pro doesn't get any more seamless! Book baby, book!</div>
                            </div>
                            <a id="form"></a>
                        </div>
                    </div>
                </Body>
                <div className="w-full text-center bg-primary">
                    <form className="caret-primary pt-20" id="contact_form" name="contact" method="POST" onSubmit={handleForm}>
                        <input className="p-4 text-center text-gray-700 w-[420px] h-[48px] font-bold text-2xl p-2 outline-none border-solid border-2 border-primary" type="text" name="first_name" onChange={(e) => setFormData({...formData, first_name: e.target.value})} placeholder="First Name" /><br/>
                        <br/>
                        <input className="p-4 text-center text-gray-700 w-[420px] h-[48px] font-bold text-2xl p-2 outline-none border-solid border-2 border-primary" type="text" name="last_name" onChange={(e) => setFormData({...formData, last_name: e.target.value})} placeholder="Last Name" /><br/>
                        <br/>
                        <input className="p-4 text-center text-gray-700 w-[420px] h-[48px] font-bold text-2xl p-2 outline-none border-solid border-2 border-primary" type="text" name="email" onChange={(e) => setFormData({...formData, email: e.target.value})} placeholder="Email Address" /><br/>
                        <br/>
                        <input className="p-4 text-gray-700 w-[420px] h-[48px] font-bold text-xl p-2 outline-none border-solid border-2 border-primary" type="text" name="subject" onChange={(e) => setFormData({...formData, subject: e.target.value})} placeholder="Subject" /><br/>
                        <br/>
                        <textarea className="p-4 text-gray-700 w-[420px] h-[260px] font-bold text-lg p-2 outline-none border-solid border-2 border-primary" name="message" onChange={(e) => setFormData({...formData, message: e.target.value})} placeholder="Message..." /><br/>
                        <br/>
                        <button disabled={formButtonDisabled} className="disabled:bg-green-500 disabled:cursor-not-allowed bg-black text-white text-xl font-bold px-8 py-3 drop-shadow-2xl active:text-primary transition-all duration-300 active:drop-shadow-none border-solid border-2 border-primary" type="submit" value="Send it!" name="submit">{formButtonText}</button><br/>
                        <br/>
                        <div className="w-full text-xl font-bold">{formMessage}</div>
                    </form>
                </div>
                <Footer />
            </div>
         </div>
    );
}

export default ContactPage;
