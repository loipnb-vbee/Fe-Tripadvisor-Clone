const Footer = () => {
  return (
    <div className="flex justify-start gap-8 mx-6 py-4 items-center bg-slate-200 ">
      <div className="flex-col gap-3">
        <div>Giới thiệu về Tripadvisor</div>
        <div>Về chúng tôi</div>
        <div>Báo chí</div>
      </div>

      <div className="flex-col gap-3">
        <div>Khám phá</div>
        <div>Viết đánh giá</div>
        <div>Thêm địa điểm</div>
      </div>
      <div className="flex-col gap-3">
        <div>Hợp tác với chúng tôi</div>
        <div>Chủ sở hữu</div>
        <div>Chiến lược doanh nghiệp</div>
      </div>
    </div>
  );
};

export default Footer;
