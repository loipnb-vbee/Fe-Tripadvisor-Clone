import Image from "next/image";
import React from "react";

type cardProp = {
  text: string;
  type: string;
};

const cardType = {
  DEFAULT: "default",
  FIG_CAPTION: "caption",
};

const SmallCard: React.FC<cardProp> = ({ text, type = cardType.DEFAULT }) => {
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
