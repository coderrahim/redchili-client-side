
import Banner from "./Banner";
import Team from "./Team";
import WhyChoiseUs from "./WhyChoiseUs";

import useAnimation from "../../hooks/useAnimation";
import { Helmet } from "react-helmet";
import PageTitle from "../../Components/PageTitle";
import ProductSlider from "./ProductSlider";

const Home = () => {
    const animation = useAnimation()

    return (

        <div>
            <PageTitle title='' />
            <div data-aos="fade-up"><Banner></Banner></div>
            <div data-aos="fade-up"><WhyChoiseUs></WhyChoiseUs></div>
            <div><ProductSlider></ProductSlider></div>
            <div data-aos="fade-up"><Team></Team></div>
        </div>
    );
};

export default Home;