import type { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Home from '../containers/Home';
import { useTranslation } from 'next-i18next';

type Props = {};

const Index = () => {
  const { t, i18n } = useTranslation();
  return <Home />;
};

export const getServerSideProps: GetServerSideProps<Props> = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'vi', ['common'])),
  },
});

export default Index;
