import Breadcrumb from './Breadcrumb';
import HotelDatePicker from './HotelDatePicker';
import MainContent from './MainContent';
import Sidebar from './Sidebar';

const Hotel = () => {
  return (
    <>
      <Breadcrumb />
      <div className="ZOqSq e">
        <HotelDatePicker />
        <div className="zamsQ">
          <div className="kmhUe iiGAz">
            <div className="seiBA _T">
              <Sidebar />
              <MainContent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hotel;
