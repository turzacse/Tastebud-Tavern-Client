import Meta from "../Shared/Meta";
import Blog2 from "./Blog2";
import Blog3 from "./Blog3";
import Blog1 from "./blog1";


const Blog = () => {
    return (

        <>
        <Meta title={'blog'}/>
            <div className="lg:text-5xl text-3xl font-bold text-orange-500 my-10 text-center">All of Our blogs here</div>
            <div className="my-10  mx-10 grid gap-5 lg:grid-cols-3 grid-cols-1">
                <Blog1></Blog1>
                <Blog2></Blog2>
                <Blog3></Blog3>
            </div>
        </>
    );
};

export default Blog;