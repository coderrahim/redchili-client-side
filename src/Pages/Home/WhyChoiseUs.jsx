import { MdEditLocationAlt, MdHome, MdOutlineReorder, MdOutlineWorkspacePremium } from "react-icons/md";
import man from '../../assets/why-choice-us/man.jpg'

const WhyChoiseUs = () => {
    return (
        <div>
            <div className="hero py-12 bg-red-50">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={man} className="max-w-sm rounded-lg shadow-2xl mb-5 " />
                    <div>
                        <h1 className="text-5xl font-bold">Why Is Our Restaurant <br /> The Best Choice For You?</h1>
                        <p className="py-6 text-xl lg:mr-20">we take pride in being your premier culinary destination. Here's why we believe we're the best choice for your dining experience.</p>

                        <div>
                            <div className="flex gap-5 my-3">
                                <p className="text-2xl font-medium bg-red-100 p-5 rounded-lg"> <MdOutlineWorkspacePremium /> Best Quality</p>
                                <p className="text-2xl font-medium bg-blue-100 p-5 rounded-lg"> <MdHome /> Home Delivary</p>
                            </div>
                            <div className="flex gap-5 my-3">
                                <p className="text-2xl font-medium bg-blue-100 p-5 rounded-lg"> <MdEditLocationAlt /> Best Quality</p>
                                <p className="text-2xl font-medium bg-red-100 p-5 rounded-lg"> <MdOutlineReorder /> Home Delivary</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChoiseUs;