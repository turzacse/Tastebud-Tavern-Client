// import Meta from "../Shared/Meta";
// import Blog2 from "./Blog2";
// import Blog3 from "./Blog3";
// import Blog1 from "./blog1";


// const Blog = () => {
//     return (

//         <>
//         <Meta title={'blog'}/>
//             <div className="lg:text-5xl text-3xl font-bold text-orange-500 my-10 text-center">All of Our blogs here</div>
//             <div className="my-10  mx-10 grid gap-5 lg:grid-cols-3 grid-cols-1">
//                 <Blog1></Blog1>
//                 <Blog2></Blog2>
//                 <Blog3></Blog3>
//             </div>
//         </>
//     );
// };

// export default Blog;
import Meta from "../Shared/Meta";
import { motion, useAnimation } from 'framer-motion';
import Blog1 from "./Blog1";
import Blog2 from "./Blog2";
import Blog3 from "./Blog3";
import { useInView } from 'react-intersection-observer';
import { useEffect } from "react";

const Blog = () => {
  const [refBlog1, inViewBlog1] = useInView({
    triggerOnce: true,
  });

  const [refBlog2, inViewBlog2] = useInView({
    triggerOnce: true,
  });

  const [refBlog3, inViewBlog3] = useInView({
    triggerOnce: true,
  });

  const controlsBlog1 = useAnimation();
  const controlsBlog2 = useAnimation();
  const controlsBlog3 = useAnimation();

  useEffect(() => {
    if (inViewBlog1) {
      controlsBlog1.start({ opacity: 1, y: 0 });
    }
    if (inViewBlog2) {
      controlsBlog2.start({ opacity: 1, y: 0 });
    }
    if (inViewBlog3) {
      controlsBlog3.start({ opacity: 1, y: 0 });
    }
  }, [controlsBlog1, inViewBlog1, controlsBlog2, inViewBlog2, controlsBlog3, inViewBlog3]);

  return (
    <>
      <Meta title={'blog'} />

      <div className="my-10  mx-10 grid gap-5 lg:grid-cols-3 grid-cols-1">
      <motion.div
        ref={refBlog1}
        initial={{ opacity: 0, y: 50 }}
        animate={controlsBlog1}
        className="my-10 mx-10"
      >
        <Blog1 />
      </motion.div>

      <motion.div
        ref={refBlog2}
        initial={{ opacity: 0, y: 50 }}
        animate={controlsBlog2}
        className="my-10 mx-10"
      >
        <Blog2 />
      </motion.div>

      <motion.div
        ref={refBlog3}
        initial={{ opacity: 0, y: 50 }}
        animate={controlsBlog3}
        className="my-10 mx-10"
      >
        <Blog3 />
      </motion.div>
      </div>
    </>
  );
};

export default Blog;
