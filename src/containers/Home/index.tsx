// import DiscoverMore from './DiscoverMore';
// import GourmetSuggest from './GourmetSuggest';
// import NextVacationSpot from './NextVacationSpot';
// import RecommendedForYou from './RecommendedForYou';
// import TopPlace from './TopPlace';
// import SearchPlace from './SearchPlace';
import TravellersChoiceAwards from './TravellersChoiceAwards';
import Layout from '../Layout';
import SwiperLocation from './SwiperLocation';
import Description from './Description';
import CategoryFilter from './CategoryFilter';
import EntertainmentActivity from './EntertainmentActivity';
import HotelsList from './HotelsList';
import DrinkAndFood from './DrinkAndFood';
import TopRestaurant from './TopRestaurant';
import CollectionRecommendation from './CollectionRecommendation';
import CityRecommendation from './CityRecommendation';
// import apis from '../../apis';
// import { useEffect } from 'react';

const Home = () => {
  // const { t, i18n } = useTranslation();
  // const fetchHotels = async () => {
  //   const response = await apis.hotel.getHotels({
  //     offset: 10,
  //     limit: 20,
  //   });
  //   console.log(response);
  //   if (response?.status !== 1) return;
  // };

  // useEffect(() => {
  //   fetchHotels();
  // }, []);

  return (
    <Layout>
      <SwiperLocation />
      <Description />
      <CategoryFilter />
      <EntertainmentActivity />
      <HotelsList />
      <DrinkAndFood />
      <TopRestaurant />
      <CollectionRecommendation />
      <CityRecommendation />
      {/* <SearchPlace /> */}
      {/* <TopPlace /> */}
      {/* <GourmetSuggest /> */}
      {/* <RecommendedForYou /> */}
      {/* <DiscoverMore /> */}
      {/* <NextVacationSpot /> */}
      <TravellersChoiceAwards />
    </Layout>
  );
};

export default Home;
