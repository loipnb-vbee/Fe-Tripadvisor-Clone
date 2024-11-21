import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import Typography from '../Typography';

type TabsProps = {
  tabs?: string[];
  activeTab?: string;
  onChangeTab?: (value: string) => void;
  itemClassName?: string;
  colorTab?: string;
  colorActiveTab?: string;
  itemClassNameActive?: string;
  titleClassName?: string;
  titleClassNameActive?: string;
  titleClassNameNotActive?: string;
  className?: string;
  link?: string;
};

const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTab,
  onChangeTab,
  itemClassName,
  colorTab,
  colorActiveTab,
  itemClassNameActive,
  titleClassName,
  titleClassNameActive,
  titleClassNameNotActive,
  className,
  link,
}) => {
  const { t } = useTranslation();

  const handleTabClick = (value: string) => {
    if (onChangeTab) onChangeTab(value);
  };

  if (link) {
    return (
      <ul className={`flex flex-wrap justify-center items-center ${className}`}>
        {tabs?.map((tab) => (
          <Link
            passHref
            href={{ pathname: link, query: { activeTab: tab } }}
            key={tab}
          >
            <li
              onClick={() => handleTabClick(tab)}
              className={`cursor-pointer px-4 sm:px-6 py-3 border-b-4 ${
                activeTab === tab
                  ? `border-black  ${itemClassNameActive}`
                  : `border-none ${itemClassName}`
              }`}
            >
              {t(tab)}
            </li>
          </Link>
        ))}
      </ul>
    );
  }

  return (
    <ul className={`flex flex-wrap justify-center items-center ${className}`}>
      {tabs?.map((tab) => (
        <li
          key={tab}
          onClick={() => handleTabClick(tab)}
          className={`cursor-pointer px-2 sm:px-6 border-b-4 ${
            activeTab === tab
              ? `border-black  ${itemClassNameActive}`
              : `border-none ${itemClassName}`
          }`}
        >
          <Typography
            variant={activeTab === tab ? 'bodySmall' : 'bodySmall'}
            value={t(tab)}
            className={`${
              activeTab === tab
                ? `font-bold ${titleClassNameActive}`
                : titleClassNameNotActive
            } ${titleClassName}`}
            color={activeTab === tab ? colorActiveTab : colorTab}
          />
        </li>
      ))}
    </ul>
  );
};

export default Tabs;
