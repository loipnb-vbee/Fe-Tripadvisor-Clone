import CustomButton from "@/components/Button";
import SectionWrapper from "@/components/SectionWrapper";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const TopPlace = () => {
  const { t, i18n } = useTranslation();

  return (
    <SectionWrapper id="top-place-wrapper">
      <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg max-w-[1136px]">
        <Image
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/best-restaurant.jpg"
          alt="Card background"
          width={234}
          height={234}
          priority
        />
        <div className="absolute bottom-4 left-4 bg-opacity-50  px-4 py-2 rounded">
          <h3 className="text-3xl font-bold text-black">
            Nhà hàng tốt nhất năm 2024
          </h3>
          <p className="text-xl">
            Lập kế hoạch chuyến đi đến địa điểm đạt giải thưởng Best of the Best
            của Travellers' Choice
          </p>
          <CustomButton
            key="see-list-button"
            text={t("Xem danh sách")}
            type="outlined"
          />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default TopPlace;
