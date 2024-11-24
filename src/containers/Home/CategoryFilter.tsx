import CustomButton from '@/components/Button';
import SectionWrapper from '@/components/SectionWrapper';
import Typography from '@/components/Typography';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const THEME_TYPE = {
  ESSENTIALS: 'ESSENTIALS',
  TRAVELERS_CHOICE: 'TRAVELERS_CHOICE',
  FAMILY_FRIENDLY: 'FAMILY_FRIENDLY',
  HIDDEN_GEMS: 'HIDDEN_GEMS',
  MUSEUMS: 'MUSEUMS',
  OUTDOORS: 'OUTDOORS',
  ARTS_AND_THEATER: 'ARTS_AND_THEATER',
  NIGHTLIFE: 'NIGHTLIFE',
};

const CategoryFilter = ({
  locationsForThemes,
  handleChangeLocationsForSelectedThemes,
}) => {
  const { t, i18n } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);

  console.log(locationsForThemes);

  const handleSelectTheme = (value) => {
    console.log('hêlo');
    console.log(value);
  };

  const renderText = (type) => {
    switch (type) {
      case THEME_TYPE.ESSENTIALS:
        return 'Những điều cần thiết';
      case THEME_TYPE.TRAVELERS_CHOICE:
        return "Travellers' Choice";
      case THEME_TYPE.FAMILY_FRIENDLY:
        return 'Phù hợp với gia đình';
      case THEME_TYPE.HIDDEN_GEMS:
        return 'Địa điểm tiềm năng';
      case THEME_TYPE.MUSEUMS:
        return 'Bảo tàng';
      case THEME_TYPE.OUTDOORS:
        return 'Ngoài trời';
      case THEME_TYPE.ARTS_AND_THEATER:
        return 'Nghệ thuật & nhà hát';
      case THEME_TYPE.NIGHTLIFE:
        return 'Cuộc sống về đêm';
      default:
        return 'Empty';
    }
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
        {locationsForThemes?.map((item) => {
          return (
            <CustomButton
              type="outlined"
              className="mr-2 py-1 px-4 mt-1"
              text={renderText(item?.theme)}
              onClick={() => handleSelectTheme(item?.locationsForPlaceTypes)}
            />
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default CategoryFilter;
