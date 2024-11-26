import type { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { htmlContent } from '../containers/Layout/html_extend';

import { useTranslation } from 'next-i18next';

type Props = {};

const Index = () => {
  const { t, i18n } = useTranslation();
  // return <HomeV2 />;
  return (
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
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