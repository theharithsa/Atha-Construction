const FeaturesTwoSection = () => {
  return (
    <>
        {/* features two */}
        <section className="mil-soft-bg mil-relative">
            <img src="/img/other/bg.svg" className="mil-bg-img" alt="image" />

            <div className="container mil-p-120-60">
                <div className="mil-background-grid mil-softened" />

                <div className="row">
                    <div className="col-lg-4">
                        <div className="div mil-mb-60">
                            <h3 className="mil-upper mil-up mil-mb-30">Architecture & Design</h3>
                            <div className="mil-divider-sm mil-up mil-mb-30" />
                            <p className="mil-shortened mil-up mil-mb-30">Creating innovative and sustainable architectural solutions that blend functionality with aesthetic excellence.</p>
                            <ul className="mil-icon-list mil-mb-60">
                                <li className="mil-up"><img src="/img/icons/11.svg" alt="icon" />Custom Design Solutions</li>
                                <li className="mil-up"><img src="/img/icons/11.svg" alt="icon" />Sustainable Architecture</li>
                                <li className="mil-up"><img src="/img/icons/11.svg" alt="icon" />Interior Design</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="div mil-mb-60">
                            <h3 className="mil-upper mil-up mil-mb-30">Project Management</h3>
                            <div className="mil-divider-sm mil-up mil-mb-30" />
                            <p className="mil-shortened mil-up mil-mb-30">Comprehensive project management ensuring timely delivery and quality control throughout the construction process.</p>
                            <ul className="mil-icon-list mil-mb-60">
                                <li className="mil-up"><img src="/img/icons/11.svg" alt="icon" />Timeline Management</li>
                                <li className="mil-up"><img src="/img/icons/11.svg" alt="icon" />Quality Control</li>
                                <li className="mil-up"><img src="/img/icons/11.svg" alt="icon" />Resource Optimization</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="div mil-mb-60">
                            <h3 className="mil-upper mil-up mil-mb-30">Turnkey Construction</h3>
                            <div className="mil-divider-sm mil-up mil-mb-30" />
                            <p className="mil-shortened mil-up mil-mb-30">End-to-end construction services delivering complete projects ready for immediate use.</p>
                            <ul className="mil-icon-list mil-mb-60">
                                <li className="mil-up"><img src="/img/icons/11.svg" alt="icon" />Complete Project Delivery</li>
                                <li className="mil-up"><img src="/img/icons/11.svg" alt="icon" />Quality Assurance</li>
                                <li className="mil-up"><img src="/img/icons/11.svg" alt="icon" />Handover Ready</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* features two end */}
    </>
  );
};

export default FeaturesTwoSection;