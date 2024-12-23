import type { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Home from '@/containers/Home';
import { htmlContent } from '@/containers/Layout/html';

import { useTranslation } from 'next-i18next';
import Layout from '@/containers/Layout';
import Header from '@/containers/Layout/Header';

type Props = {};

const Index = () => {
  const { t, i18n } = useTranslation();
  // return <HomeV2 />;
  return (
    <Layout>
      <Home />
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'vi', ['common'])),
  },
});

export default Index;
