import AnotherHotel from './AnotherHotel';
import Feed from './Feed';
import GeneralInfo from './GeneralInfo';
import ListHotel from './ListHotel';
import MostPopular from './MostPopular';
import QAHotel from './QAHotel';
import TableInfo from './TableInfo';

const MainContent = () => {
  return (
    <div className="LvzMf _T">
      <MostPopular />
      <ListHotel />
      <GeneralInfo />
      <div className="zGekJ f e Mm Nb ML NC">
        <TableInfo />
        <Feed />
      </div>
      <QAHotel />
      <AnotherHotel />
    </div>
  );
};

export default MainContent;
