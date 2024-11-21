import SectionWrapper from '@/components/SectionWrapper';
import Typography from '@/components/Typography';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Description = () => {
  const { t, i18n } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <SectionWrapper id="description-wrapper" childrenClassName="flex">
      <div
        className="w-full max-w-[568px] flex flex-col cursor-pointer"
        onClick={toggleText}
      >
        <Typography
          variant={'bodyMedium'}
          value={'Khám phá'}
          className="font-bold"
        />
        <Typography variant={'title1'} value={'Hà Nội'} />

        <Typography
          variant={'bodySmall'}
          value={
            isExpanded
              ? 'Dù chịu ảnh hưởng của Pháp và Trung Quốc qua hàng thế kỷ, Hà Nội vẫn là thành phố hoàn toàn (và tự hào) của người Việt Nam. Nhưng lịch sử phân tầng của thành phố vẫn hiện hữu khắp nơi—từ Phố cổ với những tòa nhà thời thuộc địa Pháp đến hơn 600 ngôi đền và chùa chiền xung quanh thành phố. Bạn có thể tìm hiểu lịch sử thành phố ngay tại các địa điểm như Nhà tù Hỏa Lò hay Lăng Chủ tịch Hồ Chí Minh. Hãy tận hưởng chuyến đi bằng cách đi bộ (hoặc đi xe gắn máy), dành thời gian tham quan một số địa điểm mới của thành phố như các phòng trưng bày nghệ thuật, các cửa hàng boutique và các quán cà phê thời thượng. Nếu bạn ghé thăm Hà Nội chỉ để thưởng thức các món ăn đặc sản thì bạn không hề cô đơn. Bánh mì và bún chả rõ ràng là những món ăn không thể bỏ qua, nhưng hãy để dành bụng cho các món ăn đường phố yêu thích khác như bánh crepe giòn, lươn xào, bánh tôm, và vài cốc bia hơi mát lạnh. Để biết những điều tuyệt vời nhất của Hà Nội, hãy xem thêm thông tin đề xuất ở bên dưới'
              : 'Dù chịu ảnh hưởng của Pháp và Trung Quốc qua hàng thế kỷ, Hà Nội vẫn là thành phố hoàn toàn (và tự hào) của người Việt Nam. Nhưng lịch sử phân tầng của thành phố vẫn hiện hữu khắp nơi—từ Phố cổ với những tòa nhà thời thuộc địa Pháp đến hơn 600 ngôi đền và chùa chiền xung quanh thành phố. Bạn có thể tìm hiểu lịch sử thành phố ngay tại các địa điểm như Nhà tù Hỏa...'
          }
          color="text-lightText"
        />
        <div className="text-tertiary underline font-bold mt-2">
          {isExpanded ? 'Thu gọn' : 'Xem thêm'}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Description;
