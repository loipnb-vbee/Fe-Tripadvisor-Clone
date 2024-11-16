import CustomButton from "@/components/Button";
import DropdownButton from "@/components/DropDownButton";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

const Header = () => {
  const { t, i18n } = useTranslation();

  const router = useRouter();

  const handleChangeLanguage = () => {
    console.log("change-----", i18n.language);
    console.log("change-----", t("test"));
    i18n.changeLanguage(i18n.language === "vi" ? "en" : "vi");
  };

  const handleLogin = () => {
    router.push("/login");
  };

  const handleSignUp = () => {
    router.push("/signup");
  };

  const handleBackHome = () => {
    router.push("/");
  };

  return (
    <div className="flex justify-between w-full mx-6 py-4 items-center">
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
        <DropdownButton text="Khám phá" />
        <DropdownButton text="Chuyến đi" />
        <DropdownButton text="Đánh giá" />
      </div>
      <div className="inline-block">
        <CustomButton
          text={t("Đổi ngôn ngữ")}
          type="text"
          onClick={handleChangeLanguage}
        />
        <CustomButton text={t("Đăng nhập")} type="text" onClick={handleLogin} />
        <CustomButton text={t("Đăng ký")} type="text" onClick={handleSignUp} />
      </div>
    </div>
  );
};

export default Header;
