import Hotel from '@/containers/Hotel';
import { useTranslation } from 'next-i18next';
import Layout from '@/containers/Layout';
import { htmlContent } from '@/containers/Layout/html_hotel';

type Props = {};

const Index = () => {
  const { t, i18n } = useTranslation();
  return (
    <Layout>
      <Hotel />
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
    </Layout>
  );
};

export default Index;
