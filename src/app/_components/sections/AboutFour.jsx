import Data from "@data/sections/about-4.json";

const AboutFourSection = () => {
    return (
        <>
            {/* about four */}
            <section>
                <div className="container mil-p-120-30">
                    <div className="mil-background-grid mil-softened" />

                    <div className="row justify-content-between align-items-center flex-sm-row-reverse">
                        <div className="col-lg-5">
                            <div className="mil-mb-90">
                                <span className="mil-suptitle mil-upper mil-up mil-mb-30">Why Choose Us</span>
                                <h2 className="mil-upper mil-up mil-mb-30">Excellence in Every Detail</h2>
                                <p className="mil-up mil-mb-40">At Atha Constructions, we combine innovative design with technical expertise to create exceptional spaces. Our commitment to quality and attention to detail sets us apart in the industry.</p>

                                <ul className="mil-icon-list mil-mb-60">
                                    <li className="mil-up"><img src="/img/icons/11.svg" alt="icon" />Expert Team of Professionals</li>
                                    <li className="mil-up"><img src="/img/icons/11.svg" alt="icon" />Quality Materials & Workmanship</li>
                                    <li className="mil-up"><img src="/img/icons/11.svg" alt="icon" />Timely Project Delivery</li>
                                    <li className="mil-up"><img src="/img/icons/11.svg" alt="icon" />Sustainable Building Practices</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="mil-illustration mil-up mil-mb-90">
                                <div className="mil-image-frame">
                                    <img src="/img/photo/13.jpg" alt="About Atha Constructions" className="mil-scale" data-value-1="1" data-value-2="1.3" />
                                </div>
                                <div className="mil-about-counter mil-center">
                                    <div className="mil-avatar mil-mb-30">
                                        <img src="/img/faces/1.jpg" alt="Team Member" />
                                    </div>
                                    <h5 className="mil-upper mil-mb-10">Atha Constructions</h5>
                                    <p className="mil-text-sm mil-dark-soft">Building Excellence Since 2010</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* about four end */}
        </>
    );
};

export default AboutFourSection;