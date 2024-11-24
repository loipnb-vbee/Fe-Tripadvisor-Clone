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
import { useEffect, useState } from 'react';
import apis from '../../apis';
import { themeQuerry } from '@/apis/theme';

type Location = {
  placeType: string;
  locations?: Array<Record<string, any>>;
};

type LocationsForSelectedThemes = {
  locationsForPlaceTypes: Location[];
};

const Home = () => {
  // const { t, i18n } = useTranslation();
  // const [locationsForThemes, setLocationsForThemes] = useState([]);
  // const [locationsForSelectedThemes, setLocationsForSelectedThemes] =
  //   useState<LocationsForSelectedThemes | null>(null);

  // const handleChangeLocationsForSelectedThemes = (value) =>
  //   setLocationsForSelectedThemes(value);

  // const fetchLocationsForTheme = async () => {
  //   const response = await themeQuerry();
  //   setLocationsForSelectedThemes(
  //     response[0].data.themesGetThemesAndLocationsForGeo[0]
  //       .locationsForSelectedTheme,
  //   );
  //   setLocationsForThemes(
  //     response[0].data.themesGetThemesAndLocationsForGeo[0].locationsForThemes,
  //   );
  // };

  // useEffect(() => {
  //   fetchLocationsForTheme();
  // }, []);

  return (
    // <div>


    // </div>
    <Layout>
      {/* <SwiperLocation />
      <Description />
      <CategoryFilter
        locationsForThemes={locationsForThemes}
        handleChangeLocationsForSelectedThemes={
          handleChangeLocationsForSelectedThemes
        }
      />
      {locationsForSelectedThemes?.locationsForPlaceTypes?.map(
        (item: Location) => (
          <EntertainmentActivity
            locations={item.locations}
            placeType={item.placeType}
          />
        ),
      )}
      <TravellersChoiceAwards /> */}
    </Layout>
  );
};

export default Home;
