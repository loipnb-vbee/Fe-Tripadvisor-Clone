import Layout from '../Layout';
import Breadcrumb from './Breadcrumb';
import Characteristic from './Characteristic';
import Feed from './Feed';
import Introduce from './Introduce';
import PlaceSwiper from './PlaceSwiper';

const Home = () => {
  return (
    <>
      <Breadcrumb />
      <PlaceSwiper />
      <Introduce />
      <Characteristic />
      <Feed />
    </>
  );
};

export default Home;
