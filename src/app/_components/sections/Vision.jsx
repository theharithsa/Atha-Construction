import Link from "next/link";

const VisionSection = () => {
  return (
    <>
        {/* vision */}
        <section>
            <div className="container mil-p-0-120">
                <div className="mil-background-grid mil-softened" />

                <div className="mil-center mil-mb-120">
                    <span className="mil-suptitle mil-upper mil-up mil-mb-30">Our Vision</span>
                    <h2 className="mil-upper mil-up">Building Tomorrow's Spaces Today</h2>
                </div>

                <div className="row mil-mb-30">
                    <div className="col-lg-4 mil-up">
                        <div className="mil-icon-box mil-center mil-mb-60">
                            <div className="mil-icon mil-icon-xl mil-icon-border mil-mb-30">
                                <img src="/img/icons/1.svg" alt="Innovation" />
                            </div>
                            <h4 className="mil-upper mil-mb-30">Innovation</h4>
                            <p>Pushing boundaries in design and technology to create spaces that inspire and endure.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 mil-up">
                        <div className="mil-icon-box mil-center mil-mb-60">
                            <div className="mil-icon mil-icon-xl mil-icon-border mil-mb-30">
                                <img src="/img/icons/2.svg" alt="Sustainability" />
                            </div>
                            <h4 className="mil-upper mil-mb-30">Sustainability</h4>
                            <p>Creating environmentally conscious buildings that respect our planet's resources.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 mil-up">
                        <div className="mil-icon-box mil-center mil-mb-60">
                            <div className="mil-icon mil-icon-xl mil-icon-border mil-mb-30">
                                <img src="/img/icons/3.svg" alt="Excellence" />
                            </div>
                            <h4 className="mil-upper mil-mb-30">Excellence</h4>
                            <p>Delivering exceptional quality and service in every project we undertake.</p>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center mil-center">
                    <div className="mil-center mil-up">
                        <Link href="/about" className="mil-link mil-upper">Learn More <span className="mil-arrow"><img src="/img/icons/1.svg" alt="arrow" /></span></Link>
                    </div>
                </div>
            </div>
        </section>
        {/* vision end */}
    </>
  );
};

export default VisionSection;