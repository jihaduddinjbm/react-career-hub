import Banner from "../Banner/Banner";
import FeatureJob from "../FeatureJob/FeatureJob";
import CategoryList from "./CategoryList/CategoryList";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CategoryList></CategoryList>
            <FeatureJob></FeatureJob>
        </div>
    );
};

export default Home;