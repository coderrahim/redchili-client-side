import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";


const SingleBlogDetails = () => {
    const {_id} = useParams()

    const blogInfo = useLoaderData()
    const {id, Title, img, short_description, description } = blogInfo;

    const [blog, setBlog] = useState([])

    useEffect( () => {
        const findBlog = blogInfo.find(blog => blogInfo.id == _id)
        setBlog(findBlog)

    } ,[_id, blogInfo])

    return (
        <div>
            <div className="max-w-7xl mx-auto py-12 m-4 space-y-5">
            <img className="w-3/4 mx-auto rounded-lg mb-10" src={blog.img} alt="" />
            <h2 className="text-5xl font-semibold"> {blog.Title} </h2>
            
            <p className="text-xl leading-relaxed">{blog.description}</p>

            <Link to={-1}>
            <button className="btn btn-primary w-2/4 mt-20 mx-auto block text-xl">Go Back</button>
            </Link>
        </div>
        </div>
    );
};

export default SingleBlogDetails;