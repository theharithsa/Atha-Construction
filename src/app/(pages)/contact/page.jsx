import React from "react";

import AppData from "@data/app.json";

import PageBanner from "@components/PageBanner";
import ContactForm from "@components/ContactForm";

import Link from "next/link";

export const metadata = {
    title: {
        default: "Contact",
    },
    description: AppData.settings.siteDescription,
}

const Contact = () => {
    return (
        <>
            <PageBanner pageTitle={"We’d love to talk"} breadTitle={"Contact"} bgImage={"/img/photo/12.jpg"}/>

            {/* about */}
            <section>
                <div className="container mil-p-120-60">
                    <div className="mil-background-grid mil-softened"/>

                    <div className="row justify-content-between">
                        <div className="col-lg-6">

                            <div className="mil-mb-90">
                                <h2 className="mil-upper mil-up mil-mb-30">Contact Information</h2>
                                <p className="mil-up mil-mb-40">
                                    Reach out to us for any inquiries related to architecture, design, construction, or
                                    collaboration opportunities. Our team is always ready to assist you with the best
                                    solutions tailored to your needs.
                                </p>
                            </div>


                        </div>
                        <div className="col-lg-4 mil-relative">

                            <div className="mil-contact-sidebar">

                                <img src="img/photo/2.jpg" alt="img" style={{
                                    "width": "100%",
                                    "height": "200px",
                                    "objectFit": "cover",
                                    "objectPosition": "0 -60px"
                                }} className="mil-mb-30"/>

                                <div className="mil-sidebar-info">

                                    <h6 className="mil-upper mil-up mil-mb-30">Headquarters</h6>
                                    <ul className="mil-list mil-dark mil-up mil-mb-30">
                                        <li>
                                            Ground floor, THE HULKUL, 81/37,
                                        </li>
                                        <li>
                                            Lavelle Road, Shanthala Nagar, Ashok Nagar,
                                        </li>
                                        <li>
                                            Bengaluru, Karnataka 560001
                                        </li>
                                    </ul>
                                    <h6 className="mil-upper mil-up mil-mb-30">Phone</h6>
                                    <ul className="mil-list mil-dark mil-up mil-mb-30">
                                        <li>+91 8049776616</li>
                                        <li>+91 9606956044</li>
                                    </ul>
                                    <h6 className="mil-upper mil-up mil-mb-30">Email</h6>
                                    <ul className="mil-list mil-dark mil-up">
                                        <li>
                                            social@area24.in
                                        </li>
                                    </ul>

                                </div>

                            </div>

                        </div>
                        <div className="col-lg-7">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="mil-up mil-mb-60">
                                        <span className="mil-suptitle mil-upper mil-up mil-mb-30">Bangalore</span>
                                        <p className="mil-up">No.81/37, Ground Floor, <br/>The Hulkul, Lavelle
                                            Road, <br/>Bengaluru - 560001. <br/><br/>+91 8049776616,<br/>+91 9606956044
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="mil-up mil-mb-60">
                                        <span className="mil-suptitle mil-upper mil-up mil-mb-30">Ballari</span>
                                        <p className="mil-up">First Floor, PVR Plaza, No 7, 3rd Cross Rd, <br/>Nehru
                                            Colony, Sidiginamola, Ballari, <br/>Karnataka 583103. <br/><br/>+91
                                            8049776616,<br/>+91 9606956044
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="mil-up mil-mb-60">
                                        <span className="mil-suptitle mil-upper mil-up mil-mb-30">Mysore</span>
                                        <p className="mil-up">No. 1714, Second Floor, Vijay Arcade Sarvodaya Road
                                            Ramakrishna Nagar, <br/>near Royal Enfield Showroom, Kuvempu Nagara, <br/>Mysuru
                                            570009 <br/><br/>+91 8049776616,<br/>+91 9606956044</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* about end */}

            {/* map */}
            <div className="mil-map-frame mil-up">
                <div className="mil-map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.052306488343!2d77.5942346757231!3d12.968504814944813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d1a81a23e692523%3A0x2bea3e03851dce7!2sAtha%20Construction%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1747106478860!5m2!1sen!2sin"
                        style={{"border": "0"}}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
            {/* map end */}

            {/* contact */}
            <section className="mil-relative">
                <div className="container mil-p-120-30">
                    <div className="mil-background-grid mil-softened"></div>
                    <div className="row justify-content-between">
                        <div className="col-lg-4">

                            <div className="mil-mb-90">
                                <h2 className="mil-upper mil-up mil-mb-30">We’d love to talk</h2>
                                <p className="mil-up mil-mb-30">Have a question? We’d love to hear from you. Send us a
                                    note to get the conversation started - or click on an office above and talk to us.
                                    Especially about designing something, or something we’ve designed.</p>
                                <div className="mil-divider-lg mil-up mil-mb-30"></div>
                                <p className="mil-up mil-mb-30">Interested in joining the team? Browse our current
                                    openings.</p>
                                <div className="mil-up">
                                    <Link href="/team" className="mil-link mil-upper">Join Us <span
                                        className="mil-arrow"><img src="/img/icons/1.svg" alt="arrow"/></span></Link>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-7">

                            <ContactForm/>

                        </div>
                    </div>
                </div>
            </section>
            {/* contact end */}
        </>
    );
};
export default Contact;
