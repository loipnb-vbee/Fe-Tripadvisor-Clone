import CustomButton from "@/components/Button";
import SmallCard from "@/components/SmallCard";
import { useTranslation } from "next-i18next";
import Home from "@/containers/Home";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";

// interface PageProps {
//   locale: string;
// }

const Index = () => <Home />;

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "vi", ["common"])),
  },
});

export default Index;
