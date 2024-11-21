import SectionWrapper from '@/components/SectionWrapper';
import SmallCard from '@/components/SmallCard';
import { useTranslation } from 'react-i18next';

const TopRestaurant = () => {
  const { t, i18n } = useTranslation();

  return (
    <SectionWrapper id="gourmet-suggest-wrapper">
      <div className="text-2xl font-bold">
        Những nhà hàng khiến tôi say mê Hà Nội
      </div>
      <div className="flex gap-4 justify-between"></div>
    </SectionWrapper>
  );
};

export default TopRestaurant;
