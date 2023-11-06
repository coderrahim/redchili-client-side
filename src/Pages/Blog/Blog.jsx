import { useLoaderData } from "react-router-dom";
import BlogCard from "./BlogCard";


const Blog = () => {
    const blogs = useLoaderData()

    return (
        <div className="container">
            <h2 className="title">Latest <span className="text-red-500 font-black">Blog</span></h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        blogs.map(blog => <BlogCard 
                            key={blog.id}
                            blog={blog}
                            
                            ></BlogCard>)
                    }
            </div>
        </div>
    );
};

export default Blog;