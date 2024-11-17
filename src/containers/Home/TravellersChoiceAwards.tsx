import CustomButton from "@/components/Button";
import SectionWrapper from "@/components/SectionWrapper";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const TravellersChoiceAwards = () => {
  const { t, i18n } = useTranslation();

  return (
    <SectionWrapper
      id="traveller-choice-award-wrapper"
      childrenClassName="flex"
      className="bg-yellow-90"
    >
      <div className="w-1/2 flex flex-col justify-center px-6 gap-3">
        <h3 className="text-3xl font-bold text-black">
          Giải thưởng Travellers' Choice Best of the Best
        </h3>
        <p className="text-xl">
          Nằm trong top 1% địa điểm, nơi lưu trú, nhà hàng và trải nghiệm của
          chúng tôi—do chính bạn định đoạt.
        </p>
        <CustomButton
          key="see-list-button"
          text={t("Xem doanh nghiệp đạt giải")}
          type="outlined"
        />
      </div>
      <div className="w-1/2">
        <Image
          className="w-full h-full object-cover"
          src="/traveller-choice-award.png"
          alt="Card background"
          width={234}
          height={234}
          priority
        />
      </div>
    </SectionWrapper>
  );
};

export default TravellersChoiceAwards;
