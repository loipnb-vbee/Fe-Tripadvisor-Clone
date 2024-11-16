import type { NextConfig } from "next";

const { i18n } = require("./next-i18next.config");

const nextConfig: NextConfig = {
  i18n,
  // modularizeImports: {
  //   "@mui/icons-material/?(((\\w*)?/?)*)": {
  //     transform: "@mui/icons-material/{{ matches.[1] }}/{{member}}",
  //   },
  // },
};

export default nextConfig;
