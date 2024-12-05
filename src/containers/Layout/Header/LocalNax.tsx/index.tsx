import { useRouter } from 'next/router';

const ButtonSelect = ({ text, link }) => {
  return (
    <button
      className="PFswe d Gv B- _S Mi Nj MH NL wSSLS"
      role="tab"
      type="button"
      aria-selected="false"
      //tabindex="-1"
      data-automation="navHeader_Hotels"
    >
      <span className="biGQs _P fOtGX">
        <a
          className="JBbKZ Q1"
          href={link || '/Hotels-g293924-Hanoi-Hotels.html'}
        >
          {text}
        </a>
      </span>
    </button>
  );
};

const LocalNav = () => {
  const router = useRouter();

  return (
    <span>
      <div className="overflow-hidden">
        <div className="box-border max-w-full min-w-[1%] w-content-width transition-min-width duration-500 ease-trip-ease mx-auto px-page-margin">
          <div className="flex -mb-1 relative overflow-hidden">
            <div className="overflow-hidden overflow-x-auto w-full whitespace-nowrap -mx-6">
              <div
                className="flex items-end"
                role="tablist"
                data-automation="tab-list"
              >
                <button
                  className="PFswe inline-block bg-transparent border-0 cursor-pointer my-spacing-01 mx-spacing-02 BmgDU"
                  role="tab"
                  type="button"
                  aria-selected="true"
                  data-automation="navHeader_Tourism"
                >
                  <span className="biGQs _P ngXxk">
                    <a className="JBbKZ Q1 nadlY" href="/">
                      <svg
                        viewBox="0 0 24 24"
                        width="24px"
                        height="24px"
                        className="d Vb egaXP UmNoP"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M14.256 7.032A2.441 2.441 0 1 0 9.746 8.9a2.441 2.441 0 0 0 4.51-1.868m-2.615.065a.941.941 0 1 1 .72 1.738.941.941 0 0 1-.72-1.738"
                        ></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M7.26 5.882 2.748 6.91v14.1l6.418-1.951 5.64 1.714 6.446-1.47V5.708l-4.185.954a5.34 5.34 0 0 0-5.066-3.67 5.34 5.34 0 0 0-4.741 2.89M6.73 7.54a5 5 0 0 0-.053.745c0 1.265.506 2.476 1.163 3.536l-3.592.955v-4.67zm10.592.6q.003.073.002.145c0 1.573-.782 3.063-1.663 4.284l-.077.105v.353l4.168-.95v-4.49zm-3.288 6.368c-.363.386-.706.73-.996 1.019l-.057.057-.002.002-.987.98-.974-.998-.03-.03a44 44 0 0 1-1.072-1.093v3.273l4.168 1.266v-4.46zm.41-2.817c-.778 1.077-1.72 2.028-2.437 2.745-.72-.716-1.676-1.675-2.462-2.765-.814-1.128-1.368-2.294-1.368-3.386 0-2.082 1.717-3.795 3.824-3.795s3.823 1.713 3.823 3.795c0 1.098-.56 2.27-1.38 3.406m5.308 1.924-4.168.95v4.491l4.168-.95zm-15.504.713 4.168-1.108v4.498l-4.168 1.266z"
                        ></path>
                      </svg>
                      Hà Nội
                    </a>
                  </span>
                </button>
                <ButtonSelect text="Khách sạn" link="/hotel" />
                <ButtonSelect text="Hoạt động giải trí" link="/attraction" />
                <ButtonSelect text="Nhà hàng" link="/restaurant" />
                <ButtonSelect text="Chuyến bay" link="/flight" />
              </div>
            </div>
          </div>
          {/* linear */}
          <div className="hNYnL _T NK"></div>
        </div>
      </div>
    </span>
  );
};
export default LocalNav;
