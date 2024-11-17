import SectionWrapper from "@/components/SectionWrapper";
import SmallCard from "@/components/SmallCard";
import { useTranslation } from "react-i18next";

const RecommendedForYou = () => {
  const { t, i18n } = useTranslation();

  return (
    <SectionWrapper id="recommended-for-you-wrapper">
      <div className="text-2xl font-bold">
        Bạn có thể thích những nội dung này
      </div>
      <div>Các địa điểm lưu trú khác tại Hà Nội</div>
      <div className="flex gap-4 justify-between">
        <SmallCard text="Bangkok, Thái lan" type="caption" />
        <SmallCard text="Singapore, Singapore" type="caption" />
        <SmallCard text="Mumbai" type="caption" />
        <SmallCard text="Bali, Indonesia" type="caption" />
      </div>
    </SectionWrapper>
  );
};

export default RecommendedForYou;
