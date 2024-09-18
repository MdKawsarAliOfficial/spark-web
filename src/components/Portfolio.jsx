const Portfolio = () => {
    return (
        <>
            {/* <!-- ========== Portfolio Section Start ========== --> */}
            <section id="portfolio">
                <div className="container">
                    <div className="section_title">
                        <h2>Our Work Portfolio</h2>
                        <p className="cmn_para">There are many variations of passa ges of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                    </div>

                    <div className="filter_button">
                        <ul>
                            <li><a href="#">All</a></li>
                            <li><a href="#">Graphic Design</a></li>
                            <li><a href="#">Mobile App</a></li>
                            <li><a href="#">Web Development</a></li>
                            <li><a href="#">Web</a></li>
                        </ul>
                    </div>

                    <div className="main">
                        <div className="item">
                            <img src="/portfolio_img_1.png" alt="portfolio_image" />
                            <div className="overlay">
                                <h2>Graphic Design</h2>
                                <a href="#">
                                    <span>See Details</span>
                                    <i className="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <img src="/portfolio_img_2.png" alt="portfolio_image" />
                            <div className="overlay">
                                <h2>Graphic Design</h2>
                                <a href="#">
                                    <span>See Details</span>
                                    <i className="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <img src="/portfolio_img_3.png" alt="portfolio_image" />
                            <div className="overlay">
                                <h2>Graphic Design</h2>
                                <a href="#">
                                    <span>See Details</span>
                                    <i className="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <img src="/portfolio_img_4.png" alt="portfolio_image" />
                            <div className="overlay">
                                <h2>Graphic Design</h2>
                                <a href="#">
                                    <span>See Details</span>
                                    <i className="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <img src="/portfolio_img_5.png" alt="portfolio_image" />
                            <div className="overlay">
                                <h2>Graphic Design</h2>
                                <a href="#">
                                    <span>See Details</span>
                                    <i className="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <img src="/portfolio_img_6.png" alt="portfolio_image" />
                            <div className="overlay">
                                <h2>Graphic Design</h2>
                                <a href="#">
                                    <span>See Details</span>
                                    <i className="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <img src="/portfolio_img_1.png" alt="portfolio_image" />
                            <div className="overlay">
                                <h2>Graphic Design</h2>
                                <a href="#">
                                    <span>See Details</span>
                                    <i className="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <img src="/portfolio_img_2.png" alt="portfolio_image" />
                            <div className="overlay">
                                <h2>Graphic Design</h2>
                                <a href="#">
                                    <span>See Details</span>
                                    <i className="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ========== Portfolio Section End ========== --> */}
        </>
    );
};

export default Portfolio;