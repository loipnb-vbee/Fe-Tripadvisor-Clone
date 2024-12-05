import Layout from '@/containers/Layout';
import { htmlContent } from '../containers/Layout/html_extend';

import { useTranslation } from 'next-i18next';

const Index = () => {
  const { t, i18n } = useTranslation();
  // return <HomeV2 />;
  return (
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
    </Layout>
  );
};

export default Index;
