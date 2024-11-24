import SectionWrapper from '@/components/SectionWrapper';
import Typography from '@/components/Typography';
import Image from 'next/image';
import SmallCard from '@/components/SmallCard';
import { useTranslation } from 'react-i18next';

type EntertainmentActivityProps = {
  locations?: Array<Record<string, any>>;
  placeType?: string;
};

const PLACE_TYPE = {
  ATTRACTION: 'ATTRACTION',
  RESTAURANT: 'RESTAURANT',
  ACCOMMODATION: 'ACCOMMODATION',
};

const EntertainmentActivity: React.FC<EntertainmentActivityProps> = ({
  locations,
  placeType,
}) => {
  const { t, i18n } = useTranslation();

  switch (placeType) {
    case PLACE_TYPE.ATTRACTION:
      return (
        <SectionWrapper id="gourmet-suggest-wrapper">
          <div className="text-2xl font-bold mb-3">Hoạt động giải trí</div>
          <div className="flex flex-wrap justify-between">
            {locations?.map((location) => {
              const infomation = location?.locationInformation;
              return (
                <SmallCard
                  text={infomation?.name}
                  description={infomation?.locationV2?.attractionTypeTags?.tags
                    ?.map(
                      (tag: { tag: { localizedName: any } }) =>
                        tag.tag.localizedName,
                    )
                    .join(', ')}
                  thumbnail={
                    infomation?.thumbnail?.photoSizeDynamic?.urlTemplate
                  }
                  type="description"
                />
              );
            })}
          </div>
        </SectionWrapper>
      );
    case PLACE_TYPE.RESTAURANT:
      return (
        <SectionWrapper id="gourmet-suggest-wrapper">
          <div className="text-2xl font-bold mb-3">Đồ ăn & đồ uống</div>
          <div className="flex flex-wrap justify-between">
            {locations?.map((location) => {
              const infomation = location?.locationInformation;
              return (
                <SmallCard
                  text={infomation?.name}
                  description={infomation?.locationV2?.cuisineTags?.tags
                    ?.map(
                      (tag: { tag: { localizedName: any } }) =>
                        tag.tag.localizedName,
                    )
                    .join(', ')}
                  thumbnail={
                    infomation?.thumbnail?.photoSizeDynamic?.urlTemplate
                  }
                  type="description"
                />
              );
            })}
          </div>
        </SectionWrapper>
      );
    case PLACE_TYPE.ACCOMMODATION:
      return (
        <SectionWrapper id="gourmet-suggest-wrapper">
          <div className="text-2xl font-bold mb-3">Địa điểm lưu trú</div>
          <div className="flex flex-wrap justify-between">
            {locations?.map((location) => {
              const infomation = location?.locationInformation;
              return (
                <SmallCard
                  text={infomation?.name}
                  description={infomation?.locationV2?.cuisineTags?.tags
                    ?.map(
                      (tag: { tag: { localizedName: any } }) =>
                        tag.tag.localizedName,
                    )
                    .join(', ')}
                  thumbnail={
                    infomation?.thumbnail?.photoSizeDynamic?.urlTemplate
                  }
                  type="description"
                />
              );
            })}
          </div>
        </SectionWrapper>
      );
    default:
      return <>Loading... {placeType}</>;
  }
};

export default EntertainmentActivity;
