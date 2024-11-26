import DropdownButton from '@/components/DropDownButton';
import Search from './Search';
import { useRouter } from 'next/router';

const GlobalNav = () => {
  const router = useRouter();

  const dropdownDiscoverItems = [
    {
      id: "Travellers' Choice",
      description: "Travellers' Choice",
      onClick: () => router.push('/'),
    },
    {
      id: 'Câu chuyện du lịch',
      description: 'Câu chuyện du lịch',
      onClick: () => router.push('/'),
    },
  ];

  const dropdownTravelItems = [
    {
      id: 'Xem chuyến đi của tôi',
      description: 'Xem chuyến đi của tôi',
      onClick: () => router.push('/'),
    },
    {
      id: 'Bắt đầu chuyến đi mới',
      description: 'Bắt đầu chuyến đi mới',
      onClick: () => router.push('/'),
    },
  ];

  const dropdownRatingItems = [
    {
      id: 'Viết đánh giá',
      description: 'Viết đánh giá',
      onClick: () => router.push('/'),
    },
    {
      id: 'Đăng ảnh',
      description: 'Đăng ảnh',
      onClick: () => router.push('/'),
    },
    {
      id: 'Thêm địa điểm',
      description: 'Thêm địa điểm',
      onClick: () => router.push('/'),
    },
  ];

  return (
    <div className="box-border max-w-full min-w-[1%] w-content-width transition-min-width duration-500 ease-trip-ease mx-auto px-page-margin">
      <div className="flex gap-spacing-04 h-15 justify-between items-center">
        {/* LOGO */}
        <div className="flex h-full grow-0 shrink-0 basis-auto items-center">
          <a className="h-full inline-flex grow-0 shrink-0 basis-auto" href="/">
            <picture>
              <img
                className="h-0 w-0"
                src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_logoset_solid_green.svg"
                alt="Tripadvisor"
              />
            </picture>
            <picture>
              <img
                className="block h-full w-[188px]"
                src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg"
                alt="Tripadvisor"
              />
            </picture>
          </a>
        </div>
        {/* SEARCH */}
        <div className="grow-[1] shrink-[1000] basis-auto max-w-[500px] min-w-[100px] pr-spacing-03 mr-auto">
          <div className="relative h-spacing-06">
            <Search />
          </div>
        </div>
        {/* ACTION SELECT */}
        <div className="mr-auto">
          <div className="grid justify-center grid-flow-col text-center">
            <div className="m-0 flex">
              <div
                className="flex items-center"
                data-automation="topNav_discover"
              >
                <div className="relative w-full">
                  <DropdownButton
                    text="Khám phá"
                    items={dropdownDiscoverItems}
                  />
                </div>
              </div>
              <div
                className="flex items-center"
                data-automation="topNav_discover"
              >
                <div className="relative w-full">
                  <DropdownButton
                    text="Chuyến đi"
                    items={dropdownTravelItems}
                  />
                </div>
              </div>
              <div
                className="flex items-center"
                data-automation="topNav_discover"
              >
                <div className="relative w-full">
                  <DropdownButton text="Đánh giá" items={dropdownRatingItems} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*TRANSLATE AND LOGIN*/}
        <div
          className="grow-0 shrink-0 basis-auto w-auto grid gap-spacing-02 justify-end text-center grid-flow-col"
          data-automation="desktop-cart-and-profile"
        >
          <button
            className="hover:bg-primaryButtonText-hover bg-clip-padding inline-block relative duration-100 ease-linear appearance-none border-none box-border cursor-pointer text-center no-underline rounded-[20px] py-[10px] px-4"
            type="button"
          >
            <span className="font-bold text-base">
              <span className="whitespace-nowrap">
                <svg
                  viewBox="0 0 24 24"
                  width="20px"
                  height="20px"
                  className="inline-block align-bottom fill-current"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.31 9.82h4.178c-.069-1.591-.356-2.993-.766-4.017-.237-.593-.501-1.023-.756-1.293-.211-.223-.38-.3-.5-.32h-.133c-.12.02-.289.097-.5.32-.255.27-.519.7-.756 1.293-.41 1.024-.697 2.426-.767 4.017m-.374-5.14q-.135.272-.252.566C8.194 6.472 7.88 8.07 7.81 9.82H5.055a6.39 6.39 0 0 1 3.88-5.14m2.301-1.989a7.883 7.883 0 0 0-7.726 7.88 7.88 7.88 0 0 0 7.884 7.885c.584 0 .871-.014 1.11-.074.124-.031.172-.049.213-.064.058-.02.099-.036.312-.073l-.26-1.477a4 4 0 0 0-.628.159c-.031.007-.132.029-.743.029-.121 0-.313-.06-.566-.327-.255-.27-.519-.699-.756-1.292-.41-1.025-.697-2.426-.767-4.017h4.203a4.7 4.7 0 0 1-.113.843 6 6 0 0 1-.112.413l-.012.04-.004.016c-.034.114-.089.298-.1.478l1.498.088v.006s.007-.035.044-.161l.012-.04c.038-.126.09-.298.136-.505.072-.313.134-.698.152-1.178h2.734a4.2 4.2 0 0 1-.195.949c-.055.16-.11.28-.166.403l-.004.01-.01.02c-.046.101-.132.288-.161.486l1.484.219-.005.026s.012-.032.057-.13l.008-.018c.056-.123.137-.3.216-.529.168-.49.31-1.168.31-2.186a7.88 7.88 0 0 0-7.72-7.879 2 2 0 0 0-.325 0m2.626 1.99q.134.271.252.565c.49 1.226.805 2.824.875 4.574h2.75a6.38 6.38 0 0 0-3.877-5.14M8.94 16.466a8 8 0 0 1-.256-.573c-.49-1.227-.805-2.824-.875-4.574H5.055a6.39 6.39 0 0 0 3.885 5.147"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20.489 12.343h-8.75v6.648h5.255l3.495 2.325zm-1.5 1.5v4.674l-1.542-1.026H13.24v-3.648z"
                  ></path>
                </svg>
                <div className="bg-dividerFill h-[22px] m-0 w-[1px] inline-block align-bottom mx-spacing-02"></div>
                VND
              </span>
            </span>
          </button>
          <a
            className="bg-clip-padding inline-block relative duration-100 ease-linear appearance-none border-none box-border cursor-pointer text-center no-underline rounded-[20px] py-[10px] px-4 w-full bg-primaryButtonFill hover:bg-primaryButtonFill-hover text-primaryButtonText"
            href="/"
          >
            <span className="font-bold text-base">
              <div className="text-nowrap">Đăng nhập</div>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};
export default GlobalNav;
