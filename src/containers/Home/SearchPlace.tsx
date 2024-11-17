import CustomButton from "@/components/Button";
import SectionWrapper from "@/components/SectionWrapper";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const SearchPlace = () => {
  const { t, i18n } = useTranslation();

  return (
    <SectionWrapper
      id="search-place"
      childrenClassName="flex flex-col items-center"
    >
      <h1 className="font-extrabold text-4xl text-black text-center mb-4">
        Đi đâu?
      </h1>
      <div className="flex space-x-4">
        <CustomButton
          key="search-all"
          text={t("Tìm kiếm tất cả")}
          type="text"
        />
        <CustomButton key="hotels" text={t("Khách sạn")} type="text" />
        <CustomButton
          key="activities"
          text={t("Hoạt động giải trí")}
          type="text"
        />
        <CustomButton key="restaurants" text={t("Nhà hàng")} type="text" />
        <CustomButton key="flights" text={t("Chuyến bay")} type="text" />
      </div>
      <div className="w-full max-w-[715px] rounded-full h-10 border-slate-500 border flex items-center justify-between px-4">
        <div className="text-gray-500">
          Địa điểm tham quan, hoạt động giải trí, khách sạn...
        </div>
        <CustomButton key="search" text={t("Tìm kiếm")} type="text" />
      </div>
    </SectionWrapper>
  );
};

export default SearchPlace;
