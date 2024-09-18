const Team = () => {
    return (
        <>
            {/* <!-- ========== Team Section Start ========== --> */}
            <section id="team">
                <div className="container">
                    <div className="section_title">
                        <h2>Our Expert Team Member</h2>
                        <p className="cmn_para">There are many variations of passa ges of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                    </div>

                    <div className="main">
                        <div className="item">
                            <img src="/team_member_1.png" alt="team_member_image" />
                            <div className="overlay_team">
                                <div className="overlay_team_text">
                                    <h2>Mahid Ahmed</h2>
                                    <p>UX Designer</p>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <img src="/team_member_2.png" alt="team_member_image" />
                            <div className="overlay_team">
                                <div className="overlay_team_text">
                                    <h2>Hasan Imam</h2>
                                    <p>UI Designer</p>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <img src="/team_member_3.png" alt="team_member_image" />
                            <div className="overlay_team">
                                <div className="overlay_team_text">
                                    <h2>Kazi Afia</h2>
                                    <p>Digital Marketer</p>
                                </div>
                            </div>
                        </div>

                        <div className="team_carosal_dot">
                            <div className="dots"></div>
                            <div className="dots"></div>
                            <div className="dots active"></div>
                            <div className="dots"></div>
                            <div className="dots"></div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ========== Team Section End ========== --> */}
        </>
    );
};

export default Team;