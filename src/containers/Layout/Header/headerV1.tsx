import CustomButton from '@/components/Button';
import DropdownButton from '@/components/DropDownButton';
import SectionWrapper from '@/components/SectionWrapper';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

const Header = () => {
  const { t, i18n } = useTranslation();

  const router = useRouter();

  const handleChangeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'vi' ? 'en' : 'vi');
    console.log(i18n.language);
    console.log(t('test'));
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

  return (
    <SectionWrapper
      id="header"
      childrenClassName="flex justify-between w-full mx-6 py-4 items-center"
    >
      <Image
        className="dark:invert cursor-pointer"
        src="/tripadvisor_logo.svg"
        alt="Next.js logo"
        width={188}
        height={60}
        priority
        onClick={handleBackHome}
      />
      <div className="">
        <DropdownButton text="Khám phá" items={dropdownDiscoverItems} />
        <DropdownButton text="Chuyến đi" items={dropdownTravelItems} />
        <DropdownButton text="Đánh giá" items={dropdownRatingItems} />
      </div>
      <div className="inline-block">
        <DropdownButton
          text="Đổi ngôn ngữ"
          items={dropdownChangeLanguageItems}
        />
        <CustomButton text={t('Đăng nhập')} type="text" onClick={handleLogin} />
        <CustomButton text={t('Đăng ký')} type="text" onClick={handleSignUp} />
      </div>
    </SectionWrapper>
  );
};

export default Header;
