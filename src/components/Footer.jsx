const Footer = () => {
    return (
        <>
            {/* <!-- ========== Footer Section Start ========== --> */}
            <section id="footer">
                <div className="container">
                    <div className="main">
                        <div className="branding_creative">
                            <img src="/logo.gif" alt="Creative_Logo" />
                            <p className="cmn_para">There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                        </div>
                        <div className="company_links">
                            <h2>Company</h2>
                            <a href="#">About Us</a>
                            <a href="#">Work</a>
                            <a href="#">Latest News</a>
                            <a href="#">Careers</a>
                        </div>
                        <div className="company_links">
                            <h2>Product</h2>
                            <a href="#">Prototype</a>
                            <a href="#">Plans & Pricing</a>
                            <a href="#">Customers</a>
                            <a href="#">Integrations</a>
                        </div>
                        <div className="company_links">
                            <h2>Support</h2>
                            <a href="#">Help Desk</a>
                            <a href="#">Sales</a>
                            <a href="#">Become a Partner</a>
                            <a href="#">Developers</a>
                        </div>
                        <div className="company_links">
                            <h2>Contact</h2>
                            <a href="#">524 Broadway , NYC</a>
                            <a href="#">+1 777 - 978 - 5570</a>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ========== Footer Section End ========== --> */}
        </>
    );
};

export default Footer;