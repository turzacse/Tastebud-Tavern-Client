import Banner from "./Banner/Banner";
import ChouseUs from "./ChouseUS/ChouseUs";
import Offer from "./Offer/Offer";
import TopFood from "./TopFood/TopFood";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TopFood></TopFood>
            <Offer></Offer>
            <ChouseUs></ChouseUs>
        </div>
    );
};

export default Home;