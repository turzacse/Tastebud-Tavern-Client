import Banner from "./Banner/Banner";
import ChouseUs from "./ChouseUS/ChouseUs";
import Offer from "./Offer/Offer";
import TopFood from "./TopFood/TopFood";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';



const Home = () => {

    const [bannerRef, bannerInView] = useInView({
        triggerOnce: true,
      });
    
      const [topFoodRef, topFoodInView] = useInView({
        triggerOnce: true,
      });
    
      const [offerRef, offerInView] = useInView({
        triggerOnce: true,
      });
    
      const [chouseUsRef, chouseUsInView] = useInView({
        triggerOnce: true,
      });

    return (
        <>
        {/* <Meta title={'allfood'}/> */}
            <motion.div
            ref={bannerRef} initial={{ opacity: 0, y: 50 }} animate={{ opacity: bannerInView ? 1 : 0, y: bannerInView ? 0 : 50 }} transition={{ duration: 0.5 }}
            >
                <Banner></Banner>
            </motion.div>

            <motion.div ref={topFoodRef} initial={{ opacity: 0, y: 50 }} animate={{ opacity: topFoodInView ? 1 : 0, y: topFoodInView ? 0 : 50 }} transition={{ duration: 0.5, delay: 0.2 }}>
                <TopFood></TopFood>
            </motion.div>


            <motion.div ref={offerRef} initial={{ opacity: 0, y: 50 }} animate={{ opacity: offerInView ? 1 : 0, y: offerInView ? 0 : 50 }} transition={{ duration: 0.5, delay: 0.4 }}
            >
                <Offer></Offer>
            </motion.div>

            <motion.div 
            ref={chouseUsRef} initial={{ opacity: 0, y: 50 }} animate={{ opacity: chouseUsInView ? 1 : 0, y: chouseUsInView ? 0 : 50 }} transition={{ duration: 0.5, delay: 0.6 }}
            >
                <ChouseUs></ChouseUs>
            </motion.div>
        </>
    );
};

export default Home;