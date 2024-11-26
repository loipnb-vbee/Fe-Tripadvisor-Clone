import Accommodation from './Accommodation';
import Attraction from './Attraction';
import Eatery from './Eatery';
import SelectCategory from './SelectCategory';

const Characteristic = () => {
  return (
    <div className="mKXaY f e dTtOG TFSSL">
      <div className="IDaDx Iwmxp mvTrV cyIij fluiI SMjpI">
        <div className="YXKsn">
          <div>
            <h2 className="biGQs _P fiohW EVnyE">Nét đặc trưng Hà Nội</h2>
            <div className="biGQs _P pZUbB xARtZ KxBGd">
              Chọn một danh mục để lọc thông tin đề xuất
            </div>
          </div>
          <SelectCategory />
          <div className="ceERF">
            <Attraction />
            <Accommodation />
            <Eatery />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Characteristic;
