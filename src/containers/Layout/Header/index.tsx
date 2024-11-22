import { searchQuerry } from '@/apis/search';
import CustomButton from '@/components/Button';
import Tabs from '@/components/Tabs';
import DropdownButton from '@/components/DropDownButton';
import SectionWrapper from '@/components/SectionWrapper';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

type DynamicPictureProps = {
  width: number;
  height: number;
  baseUrl: string | undefined;
};

const DynamicPicture: React.FC<DynamicPictureProps> = ({
  width,
  height,
  baseUrl,
}) => {
  const src =
    baseUrl
      ?.replace('{width}', width.toString())
      ?.replace('{height}', height.toString()) || 'empty';

  const srcSet = `
    ${baseUrl
      ?.replace('{width}', width.toString())
      ?.replace('{height}', '-1')} 1x,
    ${baseUrl
      ?.replace('{width}', (width * 2).toString())
      ?.replace('{height}', (height * 2).toString())} 2x
  `;

  return (
    <picture>
      <img
        src={src}
        srcSet={srcSet}
        width={width}
        height={height}
        role="none"
        alt=""
        fetchPriority="high"
      />
    </picture>
  );
};

const Header = () => {
  const { t, i18n } = useTranslation();

  const [listSearch, setListSearch] = useState([]);

  const [open, setOpen] = useState(false);

  const popSearchRef = useRef<HTMLDivElement | null>(null);

  const router = useRouter();

  const handleChangeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'vi' ? 'en' : 'vi');
  };

  const handleLogin = () => {
    router.push('/login');
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
      description: t('enLang'),
      onClick: () => i18n.changeLanguage('en'),
    },
    {
      id: 'Tiếng Việt',
      description: t('vnLang'),
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

  const handleSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setOpen(!!inputValue);
    const response = await searchQuerry({ query: inputValue });
    const data = response?.[0]?.data?.typeaheadAutocomplete?.results;
    setListSearch(data || []);
  };

  const handleFocusSearch = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const inputValue = event.target.value;
  };

  interface Item {
    typename: string;
    details?: {
      localizedName: string;
      thumbnail?: {
        photoSizeDynamic?: {
          maxWidth?: number;
          maxHeight?: number;
          urlTemplate?: string;
        };
      };
    };
  }

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        popSearchRef.current &&
        !popSearchRef.current.contains(e.target as Node)
      )
        setOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [popSearchRef]);

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
        <div className="relative inline-block" ref={popSearchRef}>
          <input
            type="text"
            placeholder={t('search')}
            className="w-full max-w-[250px] rounded-full h-10 border-slate-500 border flex items-center justify-between px-4"
            onChange={handleSearch}
            onFocus={handleFocusSearch}
          />
          {open && (
            <div className="origin-top-right absolute left-0 mt-2 w-96 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="p-1">
                {listSearch?.map(
                  (item: Item) =>
                    item?.typename === 'Typeahead_LocationItem' && (
                      <button className="flex gap-7 px-4 py-2 text-base text-black hover:bg-gray-100 w-full text-left font-bold ">
                        <DynamicPicture
                          width={100}
                          height={67}
                          baseUrl={
                            item?.details?.thumbnail?.photoSizeDynamic
                              ?.urlTemplate
                          }
                        />
                        <div>{item?.details?.localizedName}</div>
                      </button>
                    ),
                )}
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-3">
          <DropdownButton text={t('discover')} items={dropdownDiscoverItems} />
          <DropdownButton text={t('trips')} items={dropdownTravelItems} />
          <DropdownButton text={t('review')} items={dropdownRatingItems} />
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
