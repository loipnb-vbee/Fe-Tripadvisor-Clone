import DiscoverMore from "./DiscoverMore";
import GourmetSuggest from "./GourmetSuggest";
import NextVacationSpot from "./NextVacationSpot";
import RecommendedForYou from "./RecommendedForYou";
import TopPlace from "./TopPlace";
import SearchPlace from "./SearchPlace";
import TravellersChoiceAwards from "./TravellersChoiceAwards";
import Layout from "../Layout";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t, i18n } = useTranslation();

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
