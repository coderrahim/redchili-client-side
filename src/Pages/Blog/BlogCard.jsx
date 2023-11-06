import { Link } from "react-router-dom";


const BlogCard = ({ blog }) => {
    const { id, Title, img, short_description, description } = blog 

    return (
            <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border my-8">
                <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                    <img
                        src={img}
                        alt="img-blur-shadow"
                    />
                </div>
                <div className="p-6">
                    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        {Title}
                    </h5>
                    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                        {short_description}
                    </p>
                </div>
                <div className="p-6 pt-0">
                    <Link to={`/blogDetails/${id}`}>
                        <button
                            className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            data-ripple-light="true"
                        >
                            See Details
                        </button>
                    </Link>
                </div>
            </div>
    );
};

export default BlogCard;