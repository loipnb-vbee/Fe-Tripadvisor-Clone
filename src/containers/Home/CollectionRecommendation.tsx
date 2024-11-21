import SectionWrapper from '@/components/SectionWrapper';
import SmallCard from '@/components/SmallCard';
import { useTranslation } from 'react-i18next';

const CollectionRecommendation = () => {
  const { t, i18n } = useTranslation();

  return (
    <SectionWrapper id="gourmet-suggest-wrapper">
      <div className="text-2xl font-bold">Duyệt tìm bộ sưu tập</div>
      <div className="flex gap-4 justify-between">
        <SmallCard
          text="17 địa điểm lưu trú thú vị bên mặt nước cho chuyến đi để đời"
          type="caption"
        />
        <SmallCard
          text="15 khu nghỉ dưỡng thiên nhiên tuyệt vời trên toàn thế giới để thư giãn và phục hồi"
          type="caption"
        />
        <SmallCard
          text="7 trải nghiệm không thể bỏ lỡ cho chuyến phiêu lưu đáng nhớ"
          type="caption"
        />
      </div>
    </SectionWrapper>
  );
};

export default CollectionRecommendation;
