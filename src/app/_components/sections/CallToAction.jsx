import Link from "next/link";

const CallToActionSection = () => {
  return (
    <>
        {/* call to action */}
        <section>
            <div className="container mil-p-0-120">
                <div className="row justify-content-between">
                    <div className="col-lg-4">
                        <span className="mil-suptitle mil-upper mil-up mil-mb-30">Let's Build Together</span>
                        <h2 className="mil-upper mil-up">Start Your Project</h2>
                    </div>
                    <div className="col-lg-4 mil-mt-suptitle-offset">
                        <p className="mil-up">Ready to transform your space? Contact us today to discuss your project requirements and let our expert team bring your vision to life.</p>
                    </div>
                    <div className="col-lg-3 mil-mt-suptitle-offset">
                        <div className="mil-adaptive-right mil-up">
                            <Link href="/contact" className="mil-button">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* call to action end */}
    </>
  );
};

export default CallToActionSection;