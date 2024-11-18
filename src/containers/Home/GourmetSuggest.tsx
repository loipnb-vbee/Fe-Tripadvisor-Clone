import SectionWrapper from '@/components/SectionWrapper';
import SmallCard from '@/components/SmallCard';
import { useTranslation } from 'react-i18next';

const GourmetSuggest = () => {
  const { t, i18n } = useTranslation();

  return (
    <SectionWrapper id="gourmet-suggest-wrapper">
      <div className="text-2xl font-bold">
        Chiêu đãi bản thân với bữa ăn đạt giải thưởng
      </div>
      <div>
        Giải thưởng Travellers' Choice 2024 cho Nhà hàng đạt giải thưởng Best of
        the Best
      </div>
      <div className="flex gap-4 justify-between">
        <SmallCard text="Nhà hàng đồ ăn ngon" type="default" />
        <SmallCard text="Đêm hẹn hò" type="default" />
        <SmallCard text="Bữa ăn bình dân" type="default" />
        <SmallCard text="Địa điểm tiềm năng" type="default" />
      </div>
    </SectionWrapper>
  );
};

export default GourmetSuggest;
