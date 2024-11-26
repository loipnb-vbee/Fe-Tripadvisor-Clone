import { useState } from 'react';

const Introduce = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="IDaDx Iwmxp mvTrV cyIij fluiI SMjpI">
      <div className="aBETW e" data-test-target="geo-description">
        <div>
          <div className="TQENi k _Y">
            <h1 data-test-target="main_h1" className="f e">
              <span className="xTzVY">Khám phá</span>{' '}
              <span className="gRNuL">Hà Nội</span>
            </h1>{' '}
            <div className="FENNA _T NL">
              <div className="eITZC f j">
                <button
                  type="button"
                  aria-label="Lưu vào một chuyến đi"
                  className="hnwyb u j _T z Orcdl pJGBL _F GxgKv _F updsl LrRuD NbZSG"
                  data-automation="trips_tourism_saves_button"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="20px"
                    height="20px"
                    className="d Vb icjEL"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3.798 5.166A5.77 5.77 0 0 1 7.72 3.63c1.455 0 2.857.548 3.922 1.536l.005.005.341.322.332-.317a5.77 5.77 0 0 1 3.928-1.54c1.458 0 2.862.55 3.928 1.54l.004.004c1.093 1.032 1.598 2.324 1.569 3.662-.03 1.323-.579 2.643-1.5 3.785-.884 1.096-2.85 2.943-4.547 4.478a185 185 0 0 1-3.153 2.785l-.069.059-.489-.569.489.569-.485.416-.488-.412a102 102 0 0 1-7.75-7.288l-.021-.021-.02-.023c-1.725-2.115-2.203-5.32.08-7.453zm8.19 13.226.472-.412a184 184 0 0 0 2.236-1.988c1.72-1.556 3.59-3.32 4.385-4.306.757-.939 1.147-1.948 1.168-2.877.02-.912-.313-1.795-1.097-2.536a4.27 4.27 0 0 0-2.904-1.138c-1.08 0-2.117.407-2.903 1.136l-1.35 1.292-1.375-1.3a4.27 4.27 0 0 0-2.9-1.133 4.27 4.27 0 0 0-2.901 1.135c-1.507 1.408-1.353 3.659.042 5.385a101 101 0 0 0 7.127 6.742"
                    ></path>
                  </svg>
                  <div className="xAoOI H4 b KKNvb">
                    <span>Lưu</span>
                  </div>
                </button>
              </div>
              <div className="YmIlm top-[28px] left-[50px]">
                <div className="DgJpu">
                  <button
                    type="button"
                    className="ypcsE _S wSSLS"
                    aria-labelledby=":lithium-r8:"
                  ></button>
                  <span id=":lithium-r8:" className="KrpDA o">
                    <div className="f Fi">
                      <div className="YbmHz">
                        <div
                          className="biGQs _P KxBGd"
                          data-automation="trips_tourism_saves_tooltip_text"
                        >
                          Lưu địa điểm này vào Chuyến đi để bạn có thể theo dõi
                          địa điểm yêu thích và nhận lựa chọn phù hợp với cá
                          nhân trong khi lập kế hoạch.
                        </div>
                      </div>
                      <div className="UvXkL">
                        <button
                          className="BrOJk u j z _F wSSLS biKBZ HuPlH IyzRb"
                          data-automation="trips_tourism_saves_tooltip_close_button"
                          type="button"
                          aria-label="Đóng chú thích"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            width="20px"
                            height="20px"
                            className="d Vb UmNoP"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.94 12 4.47 5.53l1.06-1.06L12 10.94l6.47-6.47 1.06 1.06L13.06 12l6.47 6.47-1.06 1.06L12 13.06l-6.47 6.47-1.06-1.06z"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="ToOPX">
            <div className="_T FKffI bmUTE">
              <div
                className="fIrGe _T bgMZj cursor-pointer"
                // style="line-break: normal; cursor: pointer; -webkit-line-clamp: 3;"
                style={{
                  display: '-webkit-box',
                  WebkitBoxOrient: 'vertical' as const,
                  WebkitLineClamp: showMore ? 100 : 3,
                  overflow: 'hidden',
                }}
                onClick={() => setShowMore(!showMore)}
              >
                <div className="biGQs _P pZUbB KxBGd">
                  <span className="JguWG">
                    <div className="iSUaL">
                      Dù chịu ảnh hưởng của Pháp và Trung Quốc qua hàng thế kỷ,
                      Hà Nội vẫn là thành phố hoàn toàn (và tự hào) của người
                      Việt Nam. Nhưng lịch sử phân tầng của thành phố vẫn hiện
                      hữu khắp nơi—từ Phố cổ với những tòa nhà thời thuộc địa
                      Pháp đến hơn 600 ngôi đền và chùa chiền xung quanh thành
                      phố. Bạn có thể tìm hiểu lịch sử thành phố ngay tại các
                      địa điểm như Nhà tù Hỏa Lò hay Lăng Chủ tịch Hồ Chí Minh.
                      Hãy tận hưởng chuyến đi bằng cách đi bộ (hoặc đi xe gắn
                      máy), dành thời gian tham quan một số địa điểm mới của
                      thành phố như các phòng trưng bày nghệ thuật, các cửa hàng
                      boutique và các quán cà phê thời thượng. Nếu bạn ghé thăm
                      Hà Nội chỉ để thưởng thức các món ăn đặc sản thì bạn không
                      hề cô đơn. Bánh mì và bún chả rõ ràng là những món ăn
                      không thể bỏ qua, nhưng hãy để dành bụng cho các món ăn
                      đường phố yêu thích khác như bánh crepe giòn, lươn xào,
                      bánh tôm, và vài cốc bia hơi mát lạnh.&nbsp;Để biết những
                      điều tuyệt vời nhất của Hà Nội, hãy xem thêm thông tin đề
                      xuất ở bên dưới.
                    </div>
                  </span>
                </div>
              </div>
              <div className="lszDU leading-[22px]">
                <button
                  className="UikNM _G B- _S _W _T c G_ wSSLS wnNQG"
                  type="button"
                >
                  <span className="biGQs _P XWJSj Wb">
                    {showMore ? 'Rút gọn' : 'Đọc thêm'}
                  </span>
                  <div className="CECjK _W">
                    <svg
                      viewBox="0 0 24 24"
                      width="20px"
                      height="20px"
                      className="d Vb UmNoP"
                    >
                      <path d="M18.4 7.4 12 13.7 5.6 7.4 4.2 8.8l7.8 7.8 7.8-7.8z"></path>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Introduce;
