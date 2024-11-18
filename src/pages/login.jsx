// import CustomButton from "@/components/Button";
// import { useTranslation } from "next-i18next";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// import Image from "next/image";
// import { useRouter } from "next/router";

// // interface PageProps {
// //   locale: string;
// // }

// const Index = () => {
//   const { t, i18n } = useTranslation();

//   const router = useRouter();

//   const handleBackHome = () => {
//     router.push("/");
//   };

//   return (
//     <div className="w-full flex flex-col items-center gap-2 my-4">
//       <div>
//         <div>Tên đăng nhập</div>
//         <input
//           type="text"
//           placeholder="Tên đăng nhập..."
//           className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//       </div>
//       <div>
//         <div>Mật khẩu</div>
//         <input
//           type="text"
//           placeholder="Mật khẩu"
//           className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//       </div>
//       <CustomButton
//         key="sign in"
//         text={t("Đăng nhập")}
//         type="contained"
//         onClick={handleBackHome}
//       />
//     </div>
//   );
// };

// export const getServerSideProps = async ({ locale }) => ({
//   props: {
//     ...(await serverSideTranslations(locale ?? "vi", ["common"])),
//   },
// });

// export default Index;
