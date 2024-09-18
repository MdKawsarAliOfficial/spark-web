import CustomerExparience from "../components/CustomerExparience";
import Hero from "../components/Hero";
import News from "../components/News";
import Portfolio from "../components/Portfolio";
import Service from "../components/Service";
import Team from "../components/Team";

const Home = () => {
    return (
        <>
            <Hero/>
            <Service/>
            <Portfolio/>
            <Team/>
            <CustomerExparience/>
            <News/>
        </>
    );
};

export default Home;