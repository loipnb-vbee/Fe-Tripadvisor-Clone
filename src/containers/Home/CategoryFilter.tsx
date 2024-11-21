import CustomButton from '@/components/Button';
import SectionWrapper from '@/components/SectionWrapper';
import Typography from '@/components/Typography';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const CategoryFilter = () => {
  const { t, i18n } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <SectionWrapper id="description-wrapper" childrenClassName="flex flex-col">
      <Typography
        variant={'bodyMedium'}
        value={t('Nét đặc trưng Hà Nội')}
        className="font-bold"
      />
      <Typography
        variant={'bodySmall'}
        value={t('Chọn một danh mục để lọc thông tin đề xuất')}
        color="text-lightText"
      />
      <div className="inline">
        <CustomButton
          text={t('Những điều cần thiết')}
          type="outlined"
          className="mr-2 py-1 px-4"
        />
        <CustomButton
          text={t("Travellers' Choice")}
          type="outlined"
          className="mr-2 py-1 px-4"
        />
        <CustomButton
          text={t('Phù hợp với gia đình')}
          type="outlined"
          className="mr-2 py-1 px-4"
        />
        <CustomButton
          text={t('Địa điểm tiềm năng')}
          type="outlined"
          className="mr-2 py-1 px-4"
        />
        <CustomButton
          text={t('Bảo tàng')}
          type="outlined"
          className="mr-2 py-1 px-4"
        />
        <CustomButton
          text={t('Ngoài trời')}
          type="outlined"
          className="mr-2 py-1 px-4"
        />
        <CustomButton
          text={t('Nghệ thuật & nhà hát')}
          type="outlined"
          className="mr-2 py-1 px-4"
        />
        <CustomButton
          text={t('Cuộc sống về đêm')}
          type="outlined"
          className="mr-2 mt-2 py-1 px-4"
        />
      </div>
    </SectionWrapper>
  );
};

export default CategoryFilter;
