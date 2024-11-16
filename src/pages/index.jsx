import CustomButton from "@/components/Button";
import SmallCard from "@/components/SmallCard";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";

// interface PageProps {
//   locale: string;
// }

const Index = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="w-full flex flex-col items-center gap-8">
      <div className="flex flex-col items-center">
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
        <div className="w-full rounded-full h-10 border-slate-500 border flex items-center justify-between px-4">
          <div className="text-gray-500">
            Địa điểm tham quan, hoạt động giải trí, khách sạn...
          </div>
          <CustomButton key="search" text={t("Tìm kiếm")} type="text" />
        </div>
      </div>

      <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
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
      <div className="w-full">
        <div className="text-2xl font-bold">
          Chiêu đãi bản thân với bữa ăn đạt giải thưởng
        </div>
        <div>
          Giải thưởng Travellers' Choice 2024 cho Nhà hàng đạt giải thưởng Best
          of the Best
        </div>
        <div className="flex gap-4 justify-between">
          <SmallCard text="Nhà hàng đồ ăn ngon" />
          <SmallCard text="Đêm hẹn hò" />
          <SmallCard text="Bữa ăn bình dân" />
          <SmallCard text="Địa điểm tiềm năng" />
        </div>
      </div>
      <div className="w-full">
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
      </div>
      <div className="w-full">
        <div className="text-2xl font-bold">
          Điểm đến hàng đầu cho kỳ nghỉ tiếp theo của bạn
        </div>
        <div>Đây là địa điểm thu hút nhiều khách du lịch</div>
        <div className="flex gap-4 justify-between">
          <SmallCard text="Bangkok, Thái lan" />
          <SmallCard text="Singapore, Singapore" />
          <SmallCard text="Mumbai" />
          <SmallCard text="Bali, Indonesia" />
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "vi", ["common"])),
  },
});

export default Index;
