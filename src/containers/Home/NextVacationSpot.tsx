import SectionWrapper from "@/components/SectionWrapper";
import SmallCard from "@/components/SmallCard";

const NextVacationSpot = () => {
  return (
    <SectionWrapper id="next-vacation-spot-wrapper">
      <div className="text-2xl font-bold">
        Điểm đến hàng đầu cho kỳ nghỉ tiếp theo của bạn
      </div>
      <div>Đây là địa điểm thu hút nhiều khách du lịch</div>
      <div className="flex gap-4 justify-between">
        <SmallCard text="Bangkok, Thái lan" type="default" />
        <SmallCard text="Singapore, Singapore" type="default" />
        <SmallCard text="Mumbai" type="default" />
        <SmallCard text="Bali, Indonesia" type="default" />
      </div>
    </SectionWrapper>
  );
};

export default NextVacationSpot;
