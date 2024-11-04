"use client";
import CustomButton from "@/components/Button";
import { useState } from "react";

import Image from "next/image";

const Header = () => {
  const [age, setAge] = useState("");

  return (
    <div className="flex justify-between w-full mx-6 py-4 items-center">
      <Image
        className="dark:invert"
        src="/tripadvisor_logo.svg"
        alt="Next.js logo"
        width={188}
        height={60}
        priority
      />
      <div className="">
        <CustomButton text="Khám phá" type="text" />
        <CustomButton text="Chuyến đi" type="text" />
        <CustomButton text="Đánh giá" type="text" />
      </div>
      <div className="inline-block">
        <div>Translate</div>
        <div>Đăng nhập</div>
      </div>
    </div>
  );
};

export default Header;
