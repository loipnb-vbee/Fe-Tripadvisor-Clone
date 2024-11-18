import DiscoverMore from './DiscoverMore';
import GourmetSuggest from './GourmetSuggest';
import NextVacationSpot from './NextVacationSpot';
import RecommendedForYou from './RecommendedForYou';
import TopPlace from './TopPlace';
import SearchPlace from './SearchPlace';
import TravellersChoiceAwards from './TravellersChoiceAwards';
import Layout from '../Layout';
import { useTranslation } from 'react-i18next';
// import apis from '../../apis';
// import { useEffect } from 'react';

const Home = () => {
  const { t, i18n } = useTranslation();
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
      <SearchPlace />
      <TopPlace />
      <GourmetSuggest />
      <RecommendedForYou />
      <DiscoverMore />
      <NextVacationSpot />
      <TravellersChoiceAwards />
    </Layout>
  );
};

export default Home;
