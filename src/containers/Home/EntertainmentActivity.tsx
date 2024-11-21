import SectionWrapper from '@/components/SectionWrapper';
import Typography from '@/components/Typography';
import Image from 'next/image';
import SmallCard from '@/components/SmallCard';
import { useTranslation } from 'react-i18next';

const EntertainmentActivity = () => {
  const { t, i18n } = useTranslation();

  return (
    <SectionWrapper id="gourmet-suggest-wrapper">
      <div className="text-2xl font-bold mb-3">Hoạt động giải trí</div>
      <div className="flex flex-wrap justify-between">
        <SmallCard
          text="Phố Cổ Hà Nội"
          description="Khu vực đi dạo tham quan di tích lịch sử, Khu lân cận"
          type="description"
        />
        <SmallCard
          text="Hồ Hoàn Kiếm"
          description="Vùng nước"
          type="description"
        />
        <SmallCard
          text="Đường Tàu"
          description="Điểm thu hút khách tham quan & thắng cảnh"
          type="description"
        />
        <SmallCard
          text="Văn Miếu Q"
          description="Địa điểm tôn giáo, Địa điểm lịch sử"
          type="description"
        />
        <SmallCard
          text="Nhà Hát Lớn Hà Nội"
          description="Rạp hát"
          type="description"
        />
        <SmallCard
          text="Hỏa Lò"
          description="Địa điểm lịch sử"
          type="description"
        />
      </div>
    </SectionWrapper>
  );
};

export default EntertainmentActivity;
