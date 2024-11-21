import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CustomButton from '@/components/Button';
import Tabs from '@/components/Tabs';
import DropdownButton from '@/components/DropDownButton';
import SectionWrapper from '@/components/SectionWrapper';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Header = () => {
  const { t, i18n } = useTranslation();

  const router = useRouter();

  const handleChangeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'vi' ? 'en' : 'vi');
  };

  const handleLogin = () => {
    router.push('/login');
  };

  const handleSignUp = () => {
    router.push('/signup');
  };

  const handleBackHome = () => {
    router.push('/');
  };

  const dropdownDiscoverItems = [
    {
      id: "Travellers' Choice",
      description: "Travellers' Choice",
      onClick: () => router.push('/signup'),
    },
    {
      id: 'Câu chuyện du lịch',
      description: 'Câu chuyện du lịch',
      onClick: () => router.push('/login'),
    },
  ];

  const dropdownTravelItems = [
    {
      id: 'Xem chuyến đi của tôi',
      description: 'Xem chuyến đi của tôi',
      onClick: () => router.push('/signup'),
    },
    {
      id: 'Bắt đầu chuyến đi mới',
      description: 'Bắt đầu chuyến đi mới',
      onClick: () => router.push('/login'),
    },
  ];

  const dropdownRatingItems = [
    {
      id: 'Viết đánh giá',
      description: 'Viết đánh giá',
      onClick: () => router.push('/signup'),
    },
    {
      id: 'Đăng ảnh',
      description: 'Đăng ảnh',
      onClick: () => router.push('/signup'),
    },
    {
      id: 'Thêm địa điểm',
      description: 'Thêm địa điểm',
      onClick: () => router.push('/signup'),
    },
  ];

  const dropdownChangeLanguageItems = [
    {
      id: 'Tiếng Anh',
      description: 'Tiếng Anh',
      onClick: () => i18n.changeLanguage('en'),
    },
    {
      id: 'Tiếng Việt',
      description: 'Tiếng Việt',
      onClick: () => i18n.changeLanguage('vi'),
    },
  ];

  const TABSTYPE = {
    HANOI: 'hanoi',
    HOTELS: 'hotels',
    ACTIVITIES: 'activities',
    RESTAURANTS: 'restaurants',
    FLIGHTS: 'flights',
  };

  const [activeType, setActiveType] = useState(TABSTYPE.HANOI);

  const handleChangeType = (value: string) => setActiveType(value);

  return (
    <SectionWrapper
      id="header"
      className="bg-white w-full h-fit transition-top duration-200 ease-linear z-40 fixed"
      childrenClassName="flex flex-col"
    >
      <div className="flex justify-between w-full mx-6 py-4 items-center gap-4">
        <Image
          className="dark:invert cursor-pointer"
          src="/tripadvisor_logo.svg"
          alt="Next.js logo"
          width={188}
          height={60}
          priority
          onClick={handleBackHome}
        />

        <div className="w-full max-w-[250px] rounded-full h-10 border-slate-500 border flex items-center justify-between px-4">
          <div className="text-gray-500">{t('search')}</div>
        </div>

        <div className="grid grid-cols-3">
          <DropdownButton text="Khám phá" items={dropdownDiscoverItems} />
          <DropdownButton text="Chuyến đi" items={dropdownTravelItems} />
          <DropdownButton text="Đánh giá" items={dropdownRatingItems} />
        </div>

        <div className="inline">
          <DropdownButton
            text={t('language')}
            items={dropdownChangeLanguageItems}
          />
          <CustomButton text={t('login')} type="text" onClick={handleLogin} />
        </div>
      </div>
      <div className="flex justify-start w-full mx-6 items-center">
        <Tabs
          tabs={Object.values(TABSTYPE)}
          onChangeTab={handleChangeType}
          activeTab={activeType}
          // className="uppercase"
          itemClassName="!min-w-[90px] md:!min-w-[120px] !text-center"
          itemClassNameActive="!border-black !min-w-[90px] md:!min-w-[120px] !text-center"
          titleClassNameNotActive="!text-black-48"
        />
      </div>
    </SectionWrapper>
  );
};

export default Header;
