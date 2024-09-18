import ServiceItem from "./ServiceItem";

const Service = () => {
    return (
        <>
            {/* <!-- ========== Services Section Start ========== --> */}
            <section id="services">
                <div className="container">
                    <div className="section_title">
                        <h2>Our Services</h2>
                        <p className="cmn_para">There are many variations of passa ges of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                    </div>
                    <div className="main">
                        <ServiceItem iconClass="fa-regular fa-window-restore" title="UI/UX Design" desc="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form." />
                        <ServiceItem iconClass="fa-brands fa-node-js" title="Web Development" desc="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form." />
                        <ServiceItem iconClass="fa-solid fa-bullhorn" title="Digital Marketing" desc="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form." />
                        <ServiceItem iconClass="fa-solid fa-pen-nib" title="Graphic Design" desc="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form." />
                        <ServiceItem iconClass="fa-brands fa-html5" title="Web Design" desc="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form." />
                        <ServiceItem iconClass="fa-solid fa-vector-square" title="Motion Design" desc="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form." />
                    </div>
                </div>
            </section>
            {/* <!-- ========== Services Section End ========== --> */}
        </>
    );
};

export default Service;