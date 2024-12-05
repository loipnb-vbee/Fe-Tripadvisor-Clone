
import { useTranslation } from 'next-i18next';
import Layout from '@/containers/Layout';
import { htmlContent } from '@/containers/Layout/html_restaurant';

type Props = {};

const Index = () => {
  const { t, i18n } = useTranslation();
  return (
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
    </Layout>
  );
};
  
export default Index;
     