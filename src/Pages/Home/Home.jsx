
import Banner from "./Banner";
import Team from "./Team";
import WhyChoiseUs from "./WhyChoiseUs";

import useAnimation from "../../hooks/useAnimation";

const Home = () => {
    const animation = useAnimation()

    return (
        <div>
            <div data-aos="fade-up"><Banner></Banner></div>
            <div data-aos="fade-up"><WhyChoiseUs></WhyChoiseUs></div>
            <div data-aos="fade-up"><Team></Team></div>
        </div>
    );
};

export default Home;