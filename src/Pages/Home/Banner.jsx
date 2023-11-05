import { Link } from 'react-router-dom';
import img1 from '../../assets/banner/slide1.jpg'
import img2 from '../../assets/banner/slide2.jpg'
import img3 from '../../assets/banner/slide3.jpg'
import img4 from '../../assets/banner/slide4.jpg'

const Banner = () => {
    return (
        <div className='container'>
            <div className="carousel w-full rounded-xl">
                <div id="slide1" className="carousel-item relative w-full h-[600px] ">
                    <img src={img1} className="w-full rounded-xl" />
                    <div className='absolute h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] w-2/3 flex items-center top-0 left-0 rounded-xl'>
                        <div className='text-white space-y-5 p-5 pl-10'>
                            <h2 className='text-5xl font-bold'>Savor Culinary Delights</h2>
                            <p>Indulge in a symphony of flavors with our exquisite menu, expertly crafted to delight your palate.</p>
                            <Link to='/all-food'>
                                <button className='btn btn-red my-5 border-none'>Get Started</button>
                            </Link>
                        </div>
                    </div>
                    <div className="absolute flex justify-center gap-5 bottom-10  transform  left-0 right-0">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full h-[600px]">
                    <img src={img2} className="w-full rounded-xl" />
                    <div className='absolute bg-gradient-to-r from-gray-900 to-[rgba(21, 21, 21, 0.00)] h-full flex items-center '>
                        <div className='text-white space-y-5 pl-10 w-2/3'>
                            <h2 className='text-5xl font-bold'>Elegant Dining Ambiance</h2>
                            <p>Experience our enchanting atmosphere, where every moment is a celebration of fine dining and togetherness.</p>
                            <Link to='/all-food'>
                                <button className='btn btn-red my-5 border-none'>Get Started</button>
                            </Link>
                        </div>
                    </div>
                    <div className="absolute flex justify-center gap-5 bottom-10  transform  left-0 right-0">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full h-[600px]">
                    <img src={img3} className="w-full rounded-xl" />
                    <div className='absolute h-full flex items-center bg-gradient-to-r from-gray-900 to-[rgba(21, 21, 21, 0.00)]'>
                        <div className='text-white space-y-5 pl-12 w-2/3'>
                            <h2 className='text-5xl font-bold'>Unforgettable Events</h2>
                            <p>Host memorable occasions with us. From weddings to corporate gatherings, we create magical moments.</p>
                            <Link to='/all-food'>
                                <button className='btn btn-red my-5 border-none'>Get Started</button>
                            </Link>
                        </div>
                    </div>
                    <div className="absolute flex justify-center gap-5 bottom-10  transform  left-0 right-0">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full h-[600px]">
                    <img src={img4} className="w-full rounded-xl" />
                    <div className='absolute h-full flex items-center bg-gradient-to-r from-gray-900 to-[rgba(21, 21, 21, 0.00)]'>
                        <div className='text-white space-y-5 pl-12 w-2/3'>
                            <h2 className='text-5xl font-bold'>Stay Updated with Us</h2>
                            <p>Get the latest news, promotions, and culinary insights delivered right to your inbox. Join our community today!</p>
                            <Link to='/all-food'>
                                <button className='btn btn-red my-5 border-none'>Get Started</button>
                            </Link>
                        </div>
                    </div>
                    <div className="absolute flex justify-center gap-5 bottom-10  transform  left-0 right-0">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;