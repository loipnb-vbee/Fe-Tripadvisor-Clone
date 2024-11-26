import { useEffect, useRef, useState } from 'react';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenLayerHaNoi, setIsOpenLayerHaNoi] = useState(false);
  const [isOpenLayerHotel, setIsOpenLayerHotel] = useState(false);
  const [isOpenLayerMore, setIsOpenLayerMore] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleToggleDropDown = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      )
        setIsOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdownRef]);

  return (
    <div className="KCGqk _T Cj cursor-pointer" ref={dropdownRef}>
      <a
        onClick={handleToggleDropDown}
        className="BMQDV _F Gv wSSLS SwZTJ EabUM FGwzt ukgoS"
      >
        <span className="n q">
          <span className="biGQs _P pZUbB avBIb osNWb">Hà Nội</span>
        </span>
        <span className="OQDkj y S0 c">
          <svg
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            className="d Vb UmNoP"
          >
            <path d="M18.4 7.4 12 13.7 5.6 7.4 4.2 8.8l7.8 7.8 7.8-7.8z"></path>
          </svg>
        </span>
      </a>
      <div className={`WnMHS z Gi Za  ${isOpen && 'FCzQK'}`}>
        <a
          href="/Tourism-g293924-Hanoi-Vacations.html"
          className="fKngU _S R4 b razWA"
          onMouseOver={() => setIsOpenLayerHaNoi(true)}
          onMouseOut={() => setIsOpenLayerHaNoi(false)}
        >
          Hà Nội
          <div className="egvgn">
            <svg
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              className="d Vb UmNoP"
            >
              <path d="m7.4 5.65 6.4 6.4-6.4 6.3 1.4 1.4 7.8-7.7-7.8-7.8z"></path>
            </svg>
          </div>
        </a>
        <div
          className={`WnMHS z Gi Za tgvpH ${isOpenLayerHaNoi && 'FCzQK'}`}
          data-test-target="global-nav-breadcrumbs"
        >
          <a
            href="/Tourism-g293924-Hanoi-Vacations.html"
            className="fKngU _S R4 b"
          >
            Du lịch Hà Nội
          </a>
          <a href="/Hotels-g293924-Hanoi-Hotels.html" className="fKngU _S R4 b">
            Khách sạn tại Hà Nội
          </a>
          <a
            href="/Hotels-g293924-c2-Hanoi-Hotels.html"
            className="fKngU _S R4 b"
          >
            Giường và bữa sáng tại Hà Nội
          </a>
          <a
            href="/Flights-g293924-Hanoi-Cheap_Discount_Airfares.html"
            className="fKngU _S R4 b"
          >
            Chuyến bay tới Hà Nội
          </a>
          <a href="/Restaurants-g293924-Hanoi.html" className="fKngU _S R4 b">
            Nhà hàng tại Hà Nội
          </a>
          <a
            href="/Attractions-g293924-Activities-Hanoi.html"
            className="fKngU _S R4 b"
          >
            Hoạt động giải trí tại Hà Nội
          </a>
          <a
            href="/LocationPhotos-g293924-Hanoi.html"
            className="fKngU _S R4 b"
          >
            Ảnh về Hà Nội
          </a>
          <a
            href="/LocalMaps-g293924-Hanoi-Area.html"
            className="fKngU _S R4 b"
          >
            Bản đồ Hà Nội
          </a>
        </div>
        <a
          href="/Hotels-g293924-Hanoi-Hotels.html"
          className="fKngU _S R4 b razWA"
          onMouseOver={() => setIsOpenLayerHotel(true)}
          onMouseOut={() => setIsOpenLayerHotel(false)}
        >
          Khách sạn
          <div className="egvgn">
            <svg
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              className="d Vb UmNoP"
            >
              <path d="m7.4 5.65 6.4 6.4-6.4 6.3 1.4 1.4 7.8-7.7-7.8-7.8z"></path>
            </svg>
          </div>
        </a>
        <div
          className={`WnMHS z Gi Za tgvpH ${isOpenLayerHotel && 'FCzQK'}`}
          data-test-target="global-nav-breadcrumbs"
        >
          <a href="/Hotels-g293924-Hanoi-Hotels.html" className="fKngU _S R4 b">
            Tất cả Khách sạn tại Hà Nội
          </a>
          <a
            href="/SmartDeals-g293924-Hanoi-Hotel-Deals.html"
            className="fKngU _S R4 b"
          >
            Giảm giá khách sạn tại Hà Nội
          </a>
          <a
            href="/LastMinute-g293924-Hanoi-Hotels.html"
            className="fKngU _S R4 b"
          >
            Các khách sạn phút chót tại Hà Nội
          </a>
          <a className="fKngU _S R4 b razWA">
            Theo loại khách sạn
            <div className="egvgn">
              <svg
                viewBox="0 0 24 24"
                width="1em"
                height="1em"
                className="d Vb UmNoP"
              >
                <path d="m7.4 5.65 6.4 6.4-6.4 6.3 1.4 1.4 7.8-7.7-7.8-7.8z"></path>
              </svg>
            </div>
          </a>
          <div
            className="WnMHS z Gi Za tgvpH"
            data-test-target="global-nav-breadcrumbs"
          >
            <a
              href="/Hotels-g293924-zfd2-Hanoi-Hotels.html"
              className="fKngU _S R4 b"
            >
              Khách sạn bên đường tại Hà Nội
            </a>
            <a
              href="/Hotels-g293924-c3-zff29-Hanoi-Hotels.html"
              className="fKngU _S R4 b"
            >
              Khu cắm trại tại Hà Nội
            </a>
            <a
              href="/Hotels-g293924-c3-zff26-Hanoi-Hotels.html"
              className="fKngU _S R4 b"
            >
              Nhà trọ tại Hà Nội
            </a>
            <a
              href="/Hotels-g293924-zff7-Hanoi-Hotels.html"
              className="fKngU _S R4 b"
            >
              Khách sạn Thương gia tại Hà Nội
            </a>
            <a
              href="/Hotels-g293924-zff24-Hanoi-Hotels.html"
              className="fKngU _S R4 b"
            >
              Khách sạn Xanh tại Hà Nội
            </a>
            <a
              href="/Hotels-g293924-zff10-Hanoi-Hotels.html"
              className="fKngU _S R4 b"
            >
              Khách sạn bãi biển tại Hà Nội
            </a>
            <a
              href="/Hotels-g293924-zff12-Hanoi-Hotels.html"
              className="fKngU _S R4 b"
            >
              Khách sạn sang trọng tại Hà Nội
            </a>
            <a
              href="/Hotels-g293924-zff14-Hanoi-Hotels.html"
              className="fKngU _S R4 b"
            >
              Sòng bạc tại Hà Nội
            </a>
            <a
              href="/Hotels-g293924-zff3-Hanoi-Hotels.html"
              className="fKngU _S R4 b"
            >
              Khách sạn lãng mạn tại Hà Nội
            </a>
            <a
              href="/Hotels-g293924-zff8-Hanoi-Hotels.html"
              className="fKngU _S R4 b"
            >
              Khu nghỉ dưỡng tại Hà Nội
            </a>
            <a
              href="/Hotels-g293924-zff4-Hanoi-Hotels.html"
              className="fKngU _S R4 b"
            >
              Khách sạn gia đình tại Hà Nội
            </a>
            <a
              href="/Hotels-g293924-zff13-Hanoi-Hotels.html"
              className="fKngU _S R4 b"
            >
              Khu nghỉ dưỡng spa tại Hà Nội
            </a>
          </div>
          <a className="fKngU _S R4 b razWA">
            Theo hạng khách sạn
            <div className="egvgn">
              <svg
                viewBox="0 0 24 24"
                width="1em"
                height="1em"
                className="d Vb UmNoP"
              >
                <path d="m7.4 5.65 6.4 6.4-6.4 6.3 1.4 1.4 7.8-7.7-7.8-7.8z"></path>
              </svg>
            </div>
          </a>
          <div
            className="WnMHS z Gi Za tgvpH"
            data-test-target="global-nav-breadcrumbs"
          >
            <a
              href="/Hotels-g293924-zfc5-Hanoi-Hotels.html"
              className="fKngU _S R4 b"
            >
              5 sao Khách sạn tại Hà Nội
            </a>
            <a
              href="/Hotels-g293924-zfc3-Hanoi-Hotels.html"
              className="fKngU _S R4 b"
            >
              3 sao Khách sạn tại Hà Nội
            </a>
            <a
              href="/Hotels-g293924-zfc4-Hanoi-Hotels.html"
              className="fKngU _S R4 b"
            >
              4 sao Khách sạn tại Hà Nội
            </a>
          </div>
          <a className="fKngU _S R4 b razWA">
            Theo thương hiệu khách sạn
            <div className="egvgn">
              <svg
                viewBox="0 0 24 24"
                width="1em"
                height="1em"
                className="d Vb UmNoP"
              >
                <path d="m7.4 5.65 6.4 6.4-6.4 6.3 1.4 1.4 7.8-7.7-7.8-7.8z"></path>
              </svg>
            </div>
          </a>
          <div
            className="WnMHS z Gi Za tgvpH"
            data-test-target="global-nav-breadcrumbs"
          >
            <a
              href="/Hotels-g293924-zfb9321-Hanoi-Hotels.html"
              className="fKngU _S R4 b"
            >
              {' '}
              Khách sạn Novotel ở Hà Nội
            </a>
            <a
              href="/Hotels-g293924-zfb19363-Hanoi-Hotels.html"
              className="fKngU _S R4 b"
            >
              {' '}
              Khách sạn RedDoorz ở Hà Nội
            </a>
            <a
              href="/Hotels-g293924-zfb9208-Hanoi-Hotels.html"
              className="fKngU _S R4 b"
            >
              {' '}
              Khách sạn Marriott ở Hà Nội
            </a>
            <a
              href="/Hotels-g293924-zfb9302-Hanoi-Hotels.html"
              className="fKngU _S R4 b"
            >
              {' '}
              Khách sạn Melia ở Hà Nội
            </a>
            <a
              href="/Hotels-g293924-zfb9277-Hanoi-Hotels.html"
              className="fKngU _S R4 b"
            >
              Khách sạn Accor ở Hà Nội
            </a>
            <a
              href="/Hotels-g293924-zfb9205-Hanoi-Hotels.html"
              className="fKngU _S R4 b"
            >
              Khách sạn InterContinental (IHG) Hotels ở Hà Nội
            </a>
            <a
              href="/Hotels-g293924-zfb9538-Hanoi-Hotels.html"
              className="fKngU _S R4 b"
            >
              Khách sạn 24K International Hotel ở Hà Nội
            </a>
            <a
              href="/Hotels-g293924-zfb9429-Hanoi-Hotels.html"
              className="fKngU _S R4 b"
            >
              Khách sạn JW Marriott (Marriott Bonvoy) ở Hà Nội
            </a>
            <a
              href="/Hotels-g293924-zfb11779-Hanoi-Hotels.html"
              className="fKngU _S R4 b"
            >
              Khách sạn OYO ở Hà Nội
            </a>
            <a
              href="/Hotels-g293924-zfb9219-Hanoi-Hotels.html"
              className="fKngU _S R4 b"
            >
              Khách sạn Sheraton (Marriott Bonvoy) ở Hà Nội
            </a>
            <a
              href="/Hotels-g293924-zfb9378-Hanoi-Hotels.html"
              className="fKngU _S R4 b"
            >
              Khách sạn Movenpick ở Hà Nội
            </a>
            <a
              href="/Hotels-g293924-zfb20539-Hanoi-Hotels.html"
              className="fKngU _S R4 b"
            >
              Khách sạn VBA Hospitality Group ở Hà Nội
            </a>
            <a
              href="/Hotels-g293924-zfb9199-Hanoi-Hotels.html"
              className="fKngU _S R4 b"
            >
              Khách sạn Wyndham ở Hà Nội
            </a>
            <a
              href="/Hotels-g293924-zfb16612-Hanoi-Hotels.html"
              className="fKngU _S R4 b"
            >
              Khách sạn Lotte Hotels &amp; Resorts ở Hà Nội
            </a>
          </div>
          <a className="fKngU _S R4 b razWA">
            Các tiện nghi phổ biến
            <div className="egvgn">
              <svg
                viewBox="0 0 24 24"
                width="1em"
                height="1em"
                className="d Vb UmNoP"
              >
                <path d="m7.4 5.65 6.4 6.4-6.4 6.3 1.4 1.4 7.8-7.7-7.8-7.8z"></path>
              </svg>
            </div>
          </a>
          <div
            className="WnMHS z Gi Za tgvpH"
            data-test-target="global-nav-breadcrumbs"
          >
            <a
              href="/Hotels-g293924-zfa9-Hanoi-Hotels.html"
              className="fKngU _S R4 b"
            >
              Khách sạn cho phép mang theo vật nuôi tại Hà Nội
            </a>
            <a
              href="/Hotels-g293924-zfa7-Hanoi-Hotels.html"
              className="fKngU _S R4 b"
            >
              Khách sạn có đỗ xe miễn phí tại Hà Nội
            </a>
            <a
              href="/Hotels-g293924-zfa3-Hanoi-Hotels.html"
              className="fKngU _S R4 b"
            >
              Khách sạn có bể bơi tại Hà Nội
            </a>
          </div>
          <a className="fKngU _S R4 b razWA">
            Danh mục Hà Nội nổi tiếng
            <div className="egvgn">
              <svg
                viewBox="0 0 24 24"
                width="1em"
                height="1em"
                className="d Vb UmNoP"
              >
                <path d="m7.4 5.65 6.4 6.4-6.4 6.3 1.4 1.4 7.8-7.7-7.8-7.8z"></path>
              </svg>
            </div>
          </a>
          <div
            className="WnMHS z Gi Za tgvpH"
            data-test-target="global-nav-breadcrumbs"
          >
            <a
              href="/HotelsList-Hanoi-Khach-S_n-Co-Di-B-Du_ng-Dai-zfp18686547.html"
              className="fKngU _S R4 b"
            >
              Khách sạn có đi bộ đường dài tai Hà Nội
            </a>
            <a
              href="/HotelsList-Hanoi-Khu-Ngh-Du_ng-Co-Di-B-Du_ng-Dai-zfp18698736.html"
              className="fKngU _S R4 b"
            >
              Khu nghỉ dưỡng có đi bộ đường dài tai Hà Nội
            </a>
            <a
              href="/HotelsList-Hanoi-Khach-S_n-K-L-zfp21379397.html"
              className="fKngU _S R4 b"
            >
              Khách sạn kỳ lạ tai Hà Nội
            </a>
            <a
              href="/HotelsList-Hanoi-Khach-S_n-Co-Yoga-zfp21406258.html"
              className="fKngU _S R4 b"
            >
              Khách sạn có yoga tai Hà Nội
            </a>
            <a
              href="/HotelsList-Hanoi-Khach-S_n-Co-Voi-Sen-D_ng-zfp21406509.html"
              className="fKngU _S R4 b"
            >
              Khách sạn có vòi sen đứng tai Hà Nội
            </a>
            <a
              href="/HotelsList-Hanoi-Khach-S_n-Co-Phong-Xong-Hoi-zfp21407065.html"
              className="fKngU _S R4 b"
            >
              Khách sạn có phòng xông hơi tai Hà Nội
            </a>
            <a
              href="/HotelsList-Hanoi-Khach-S_n-Co-Phong-Cach-Am-zfp21407146.html"
              className="fKngU _S R4 b"
            >
              Khách sạn có phòng cách âm tai Hà Nội
            </a>
            <a
              href="/HotelsList-Hanoi-Khach-S_n-Co-Phong-Choi-Game-zfp21409012.html"
              className="fKngU _S R4 b"
            >
              Khách sạn có phòng chơi game tai Hà Nội
            </a>
            <a
              href="/HotelsList-Hanoi-Khach-S_n-Co-Thuy_n-zfp21410293.html"
              className="fKngU _S R4 b"
            >
              Khách sạn có thuyền tai Hà Nội
            </a>
            <a
              href="/HotelsList-Hanoi-Khach-S_n-Co-Phong-Khong-Gay-D-Ng-zfp21410648.html"
              className="fKngU _S R4 b"
            >
              Khách sạn có phòng không gây dị ứng tai Hà Nội
            </a>
          </div>
          <a className="fKngU _S R4 b razWA">
            Thắng cảnh ở gần
            <div className="egvgn">
              <svg
                viewBox="0 0 24 24"
                width="1em"
                height="1em"
                className="d Vb UmNoP"
              >
                <path d="m7.4 5.65 6.4 6.4-6.4 6.3 1.4 1.4 7.8-7.7-7.8-7.8z"></path>
              </svg>
            </div>
          </a>
          <div
            className="WnMHS z Gi Za tgvpH"
            data-test-target="global-nav-breadcrumbs"
          >
            <a
              href="/HotelsNear-g293924-d317503-Old_Quarter-Hanoi.html"
              className="fKngU _S R4 b"
            >
              Khách sạn ở gần Phố Cổ Hà Nội
            </a>
            <a
              href="/HotelsNear-g293924-d311070-Lake_of_the_Restored_Sword_Hoan_Kiem_Lake-Hanoi.html"
              className="fKngU _S R4 b"
            >
              Khách sạn ở gần Hồ Hoàn Kiếm
            </a>
            <a
              href="/HotelsNear-g293924-d311064-Ho_Chi_Minh_Mausoleum-Hanoi.html"
              className="fKngU _S R4 b"
            >
              Khách sạn ở gần Lăng Chủ Tịch Hồ Chí Minh
            </a>
            <a
              href="/HotelsNear-g293924-d311083-Temple_of_Literature_National_University-Hanoi.html"
              className="fKngU _S R4 b"
            >
              Khách sạn ở gần Văn Miếu Q
            </a>
            <a
              href="/HotelsNear-g293924-d311069-Hoa_Lo_Prison-Hanoi.html"
              className="fKngU _S R4 b"
            >
              Khách sạn ở gần Hỏa Lò
            </a>
            <a
              href="/HotelsNear-g21375824-d447352-Vietnam_Museum_of_Ethnology-Cau_Giay_Hanoi.html"
              className="fKngU _S R4 b"
            >
              Khách sạn ở gần Vietnam Museum of Ethnology
            </a>
            <a
              href="/HotelsNear-g293924-d447354-Vietnamese_Women_s_Museum-Hanoi.html"
              className="fKngU _S R4 b"
            >
              Khách sạn ở gần Bảo tàng Phụ nữ Việt Nam
            </a>
            <a
              href="/HotelsNear-g293924-d15224304-Aloha_Vietnam_Travel_Guide-Hanoi.html"
              className="fKngU _S R4 b"
            >
              Khách sạn ở gần Aloha Vietnam Travel &amp; Guide
            </a>
            <a
              href="/HotelsNear-g293924-d15318870-Vietnam_Travel_Top-Hanoi.html"
              className="fKngU _S R4 b"
            >
              Khách sạn ở gần Vietnam Travel Top
            </a>
            <a
              href="/HotelsNear-g293924-d15232743-Sunlight_Cruise-Hanoi.html"
              className="fKngU _S R4 b"
            >
              Khách sạn ở gần Sunlight Cruise
            </a>
          </div>
          <a className="fKngU _S R4 b razWA">
            Sân bay ở gần
            <div className="egvgn">
              <svg
                viewBox="0 0 24 24"
                width="1em"
                height="1em"
                className="d Vb UmNoP"
              >
                <path d="m7.4 5.65 6.4 6.4-6.4 6.3 1.4 1.4 7.8-7.7-7.8-7.8z"></path>
              </svg>
            </div>
          </a>
          <div
            className="WnMHS z Gi Za tgvpH"
            data-test-target="global-nav-breadcrumbs"
          >
            <a
              href="/HotelsNear-g293924-qHAN-Hanoi.html"
              className="fKngU _S R4 b"
            >
              Khách sạn gần Noibai Airport (HAN)
            </a>
            <a
              href="/HotelsNear-g293924-qHAN-zfd2-Hanoi.html"
              className="fKngU _S R4 b"
            >
              Khách sạn bên đường gần Noibai Airport (HAN)
            </a>
          </div>
          <a className="fKngU _S R4 b razWA">
            Trường đại học ở gần
            <div className="egvgn">
              <svg
                viewBox="0 0 24 24"
                width="1em"
                height="1em"
                className="d Vb UmNoP"
              >
                <path d="m7.4 5.65 6.4 6.4-6.4 6.3 1.4 1.4 7.8-7.7-7.8-7.8z"></path>
              </svg>
            </div>
          </a>
          <div
            className="WnMHS z Gi Za tgvpH"
            data-test-target="global-nav-breadcrumbs"
          >
            <a
              href="/HotelsNear-g293924-d8268561-National_University_of_Civil_Engineering-Hanoi.html"
              className="fKngU _S R4 b"
            >
              Khách sạn ở gần National University of Civil Engineering
            </a>
            <a
              href="/HotelsNear-g293924-d8267696-Hanoi_Open_University-Hanoi.html"
              className="fKngU _S R4 b"
            >
              Khách sạn ở gần Hanoi Open University
            </a>
            <a
              href="/HotelsNear-g293924-d7888080-Hanoi_Medical_University-Hanoi.html"
              className="fKngU _S R4 b"
            >
              Khách sạn ở gần Hanoi Medical University
            </a>
            <a
              href="/HotelsNear-g293924-d7888083-Hanoi_University_of_Science_and_Technology-Hanoi.html"
              className="fKngU _S R4 b"
            >
              Khách sạn ở gần Hanoi University of Science and Technology
            </a>
            <a
              href="/HotelsNear-g293924-d7887970-FPT_University-Hanoi.html"
              className="fKngU _S R4 b"
            >
              Khách sạn ở gần FPT University
            </a>
          </div>
        </div>
        <a
          href="/Attractions-g293924-Activities-Hanoi.html"
          className="fKngU _S R4 b"
        >
          Hoạt động giải trí
        </a>
        <a href="/Restaurants-g293924-Hanoi.html" className="fKngU _S R4 b">
          Nhà hàng
        </a>
        <a
          href="/Flights-g293924-Hanoi-Cheap_Discount_Airfares.html"
          className="fKngU _S R4 b"
        >
          Chuyến bay
        </a>
        <a href="/Articles" className="fKngU _S R4 b">
          Câu chuyện du lịch
        </a>
        <a href="/Cruises" className="fKngU _S R4 b">
          Chuyến đi chơi biển
        </a>
        <a
          className="fKngU _S R4 b razWA"
          onMouseOver={() => setIsOpenLayerMore(true)}
          onMouseOut={() => setIsOpenLayerMore(false)}
        >
          Thêm
          <div className="egvgn">
            <svg
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              className="d Vb UmNoP"
            >
              <path d="m7.4 5.65 6.4 6.4-6.4 6.3 1.4 1.4 7.8-7.7-7.8-7.8z"></path>
            </svg>
          </div>
        </a>
        <div
          className={`WnMHS z Gi Za tgvpH ${isOpenLayerMore && 'FCzQK'}`}
          data-test-target="global-nav-breadcrumbs"
        >
          <a
            href="/Attractions-g293924-Activities-c42-Hanoi.html"
            className="fKngU _S R4 b"
          >
            Chuyến tham quan
          </a>
          <a href="/AddListing" className="fKngU _S R4 b">
            Thêm địa điểm
          </a>
          <a href="/Airlines" className="fKngU _S R4 b">
            Hãng hàng không
          </a>
          <a href="/TravelersChoice" className="fKngU _S R4 b">
            Travellers' Choice
          </a>
          <a
            href="https://www.tripadvisorsupport.com/hc/vi"
            className="fKngU _S R4 b"
          >
            Trung tâm trợ giúp
          </a>
          <a href="/Trips" className="fKngU _S R4 b">
            Trình lập kế hoạch chuyến đi
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
