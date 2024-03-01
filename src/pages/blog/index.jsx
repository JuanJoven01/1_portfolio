import BlogHeader from "../../components/blogHeader"
import BlogEntries from "../../components/blogEntries"

const Blog = () => {

    return (
        <div className="mt-16 min-h-[85vh] ">
            <BlogHeader/>
            <BlogEntries/>
        </div>
    )
}

export default Blog