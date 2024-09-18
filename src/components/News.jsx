const News = () => {
    return (
        <>
            {/* <!-- ========== News Section Start ========== --> */}
            <section id="news">
                <div className="container">
                    <div className="section_title">
                        <h2>Our Letest News</h2>
                        <p className="cmn_para">There are many variations of passa ges of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                    </div>

                    <div className="main">
                        <div className="item">
                            <img src="/news_card_image_1.png" alt="news_card_image" />
                            <span><i className="fa-regular fa-user"></i> Admin</span>
                            <span><i className="fa-regular fa-calendar"></i> 12/08/24</span>
                            <h2>Business Plans That Fit Your Best Blog</h2>
                            <p className="cmn_para">There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                            <a href="#">Learn More</a>
                        </div>
                        <div className="item">
                            <img src="/news_card_image_2.png" alt="news_card_image" />
                            <span><i className="fa-regular fa-user"></i> Admin</span>
                            <span><i className="fa-regular fa-calendar"></i> 12/08/24</span>
                            <h2>Business Plans That Fit Your Best Blog</h2>
                            <p className="cmn_para">There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                            <a href="#">Learn More</a>
                        </div>
                        <div className="item">
                            <img src="/news_card_image_3.png" alt="news_card_image" />
                            <span><i className="fa-regular fa-user"></i> Admin</span>
                            <span><i className="fa-regular fa-calendar"></i> 12/08/24</span>
                            <h2>Business Plans That Fit Your Best Blog</h2>
                            <p className="cmn_para">There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                            <a href="#">Learn More</a>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ========== News Section End ========== --> */}
        </>
    );
};

export default News;