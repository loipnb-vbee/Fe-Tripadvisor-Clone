import Layout from '../Layout';
import AnotherCity from './AnotherCity';
import Breadcrumb from './Breadcrumb';
import Characteristic from './Characteristic';
import Collection from './Collection';
import Feed from './Feed';
import Introduce from './Introduce';
import PlaceSwiper from './PlaceSwiper';
import Sponsor from './Sponsor';

const Home = () => {
  return (
    <>
      <Breadcrumb />
      <PlaceSwiper />
      <Introduce />
      <Characteristic />
      <Feed />
      <Collection />
      <AnotherCity />
      <Sponsor />
    </>
  );
};

export default Home;
