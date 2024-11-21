import Image from 'next/image';
import React from 'react';
import Typography from './Typography';

type cardProp = {
  text: string;
  type: string;
  description?: string;
};

const cardType = {
  DEFAULT: 'default',
  FIG_CAPTION: 'caption',
  FIG_DESCRIPTION: 'description',
};

const SmallCard: React.FC<cardProp> = ({
  text,
  type = cardType.DEFAULT,
  description,
}) => {
  switch (type) {
    case cardType.DEFAULT:
      return (
        <div className="relative w-fit rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/card-small.jpg"
            alt="Card background"
            width={234}
            height={234}
            priority
          />
          <div className="absolute bottom-4 left-4 bg-opacity-50  px-4 py-2 rounded">
            <h3 className="text-3xl font-bold text-white">{text}</h3>
          </div>
        </div>
      );

    case cardType.FIG_CAPTION:
      return (
        <div className="w-fit rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/card-small.jpg"
            alt="Card background"
            width={234}
            height={234}
            priority
          />
          <div className="bg-opacity-50 px-4 py-2 rounded w-fit">
            <h3 className="text-black">{text}</h3>
          </div>
        </div>
      );

    case cardType.FIG_DESCRIPTION:
      return (
        <div className="flex flex-col w-full md:w-[48%] xl:w-[31%] py-5 gap-2 text-white">
          <Image
            className="cursor-pointer w-full object-fill overflow-hidden aspect-video rounded-3xl"
            src="/card-small.jpg"
            alt="case study image"
            decoding="async"
            // loading="lazy"
            width={300}
            height={300}
          />

          <Typography
            value={text}
            variant="bodyMedium"
            className="mt-2 cursor-pointer font-bold"
            color="text-black"
          />
          <Typography
            value={description}
            variant="callout"
            color="text-lightText"
          />
        </div>
      );

    default:
      return (
        <div className="relative w-fit rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/card-small.jpg"
            alt="Card background"
            width={234}
            height={234}
            priority
          />
          <div className="absolute bottom-4 left-4 bg-opacity-50  px-4 py-2 rounded">
            <h3 className="text-3xl font-bold text-white">{text}</h3>
          </div>
        </div>
      );
  }
};

export default SmallCard;
