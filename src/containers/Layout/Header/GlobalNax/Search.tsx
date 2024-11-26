import { useState } from 'react';
import { searchQuerry } from '@/apis/search';

type DynamicPictureProps = {
  width: number;
  height: number;
  baseUrl: string | undefined;
};
interface Item {
  typename: string;
  details?: {
    localizedName: string;
    thumbnail?: {
      photoSizeDynamic?: {
        maxWidth?: number;
        maxHeight?: number;
        urlTemplate?: string;
      };
    };
  };
}

const DynamicPicture: React.FC<DynamicPictureProps> = ({
  width,
  height,
  baseUrl,
}) => {
  const src =
    baseUrl
      ?.replace('{width}', width.toString())
      ?.replace('{height}', height.toString()) || 'empty';

  const srcSet = `
      ${baseUrl
        ?.replace('{width}', width.toString())
        ?.replace('{height}', '-1')} 1x,
      ${baseUrl
        ?.replace('{width}', (width * 2).toString())
        ?.replace('{height}', (height * 2).toString())} 2x
    `;

  return (
    <picture>
      <img
        src={src}
        srcSet={srcSet}
        width={width}
        height={height}
        role="none"
        alt=""
        fetchPriority="high"
      />
    </picture>
  );
};

const Search = () => {
  const [open, setOpen] = useState(false);
  const [listSearch, setListSearch] = useState([]);

  const handleSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setOpen(!!inputValue);
    const response = await searchQuerry({ query: inputValue });
    const data = response?.[0]?.data?.typeaheadAutocomplete?.results;
    setListSearch(data || []);
  };

  return (
    // <div className="relative h-spacing-06">
    //   <div
    //     className="bg-primaryBackground rounded-[100px] flex flex-col text-left box-border overflow-hidden border-2 border-solid border-dividerFill"
    //     data-test-attribute="typeahead-SINGLE_SEARCH_NAV"
    //   >
    //     <form role="search" action="/Search">
    //       <div className="h-11 flex items-center my-0 mx-spacing-03">
    //         <div className="flex-1 flex items-center gap-spacing-02">
    //           <button
    //             type="submit"
    //             // formaction="/Search"
    //             className="text-[24px] appearance-none touch-manipulation border-none bg-none cursor-pointer items-center justify-ceter leading-[0]"
    //             title="Tìm kiếm"
    //             aria-label="Tìm kiếm"
    //             tabindex="-1"
    //           >
    //             <svg
    //               viewBox="0 0 24 24"
    //               width="24px"
    //               height="24px"
    //               className="inline-block align-bottom fill-current"
    //             >
    //               <path
    //                 fill-rule="evenodd"
    //                 clip-rule="evenodd"
    //                 d="M10.12 4.14a5.99 5.99 0 1 0 0 11.98 5.99 5.99 0 0 0 0-11.98m-7.49 5.99a7.49 7.49 0 1 1 13.299 4.728L21.37 20.3l-1.06 1.061-5.44-5.44A7.49 7.49 0 0 1 2.63 10.13"
    //               />
    //             </svg>
    //           </button>
    //           <input
    //             type="search"
    //             autocorrect="off"
    //             autocapitalize="none"
    //             spellcheck="false"
    //             required
    //             name="q"
    //             className="focus:shadow-none focus:outline-none appearance-none bg-none border-none box-border flex-1 w-full rounded-[0] text-[16px] leading-[18px]"
    //             placeholder="Tìm kiếm"
    //             title="Tìm kiếm"
    //             role="searchbox"
    //             aria-label="Tìm kiếm"
    //             aria-controls="typeahead_results"
    //             aria-autocomplete="list"
    //             // value=""
    //             onChange={handleSearch}
    //           />
    //         </div>
    //       </div>
    //     </form>
    //   </div>
    //   {open && (
    //     <div className="origin-top-right absolute left-0 mt-2 w-96 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
    //       <div className="p-1">
    //         {listSearch?.map(
    //           (item: Item) =>
    //             item?.typename === 'Typeahead_LocationItem' && (
    //               <button className="flex gap-7 px-4 py-2 text-base text-black hover:bg-gray-100 w-full text-left font-bold ">
    //                 <DynamicPicture
    //                   width={100}
    //                   height={67}
    //                   baseUrl={
    //                     item?.details?.thumbnail?.photoSizeDynamic?.urlTemplate
    //                   }
    //                 />
    //                 <div>{item?.details?.localizedName}</div>
    //               </button>
    //             ),
    //         )}
    //       </div>
    //     </div>
    //   )}
    // </div>
    <>
      <div className="gqnca">
        {/* fiKGr min-w-[516px] max-w-[602px] */}
        <div className="ZjkxF f e Wh z _f oPzxw">
          <form role="search" action="/Search">
            <input
              type="hidden"
              name="searchSessionId"
              value="00059fe707fdc038.ssid"
            />
            <input type="hidden" name="searchNearby" value="false" />
            <input type="hidden" name="geo" value="293924" />
            <div className="oKjvH f u Ma Nk MA NM">
              <div className="F1 f u Q2">
                <button
                  type="submit"
                  className="LhcRH _G _H B- G_ _S t u j H0"
                  title="Tìm kiếm"
                  aria-label="Tìm kiếm"
                  tabindex="-1"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="24px"
                    height="24px"
                    className="d Vb UmNoP"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.12 4.14a5.99 5.99 0 1 0 0 11.98 5.99 5.99 0 0 0 0-11.98m-7.49 5.99a7.49 7.49 0 1 1 13.299 4.728L21.37 20.3l-1.06 1.061-5.44-5.44A7.49 7.49 0 0 1 2.63 10.13"
                    ></path>
                  </svg>
                </button>
                <input
                  type="search"
                  autocomplete="off"
                  autocorrect="off"
                  autocapitalize="none"
                  spellcheck="false"
                  required=""
                  name="q"
                  className="_G G_ B- z F1 _J w Cj R0  NBfGt H3 hUpcN FjKFQ"
                  placeholder="Tìm kiếm"
                  title="Tìm kiếm"
                  role="searchbox"
                  aria-label="Tìm kiếm"
                  aria-controls="typeahead_results"
                  aria-autocomplete="list"
                  value=""
                />
              </div>
            </div>
            {/* <div className="wKCwt z">
              <div
                id="typeahead_results"
                role="listbox"
                aria-labelledby="typeahead_results_header"
                className="bHYOc _f Pj"
                data-test-attribute="typeahead-results"
              >
                <hr className="VMRhJ" />
                <a
                  className="GzJDZ z _S _F Wc Wh Q B- _G"
                  role="option"
                  aria-selected="false"
                  href="/Tourism-g29750-Atlantic_City_New_Jersey-Vacations.html"
                >
                  <div className="XYHql F0 _u z o">
                    <picture className="NhWcC _R mdkdE afQPz eXZKw w-14 h-14">
                      <img
                        srcSet="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/11/4a/fe/caption.jpg?w=100&amp;h=-1&amp;s=1&amp;cx=856&amp;cy=459&amp;chk=v1_c21638ccbc4b52a45fac 1x,https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/11/4a/fe/caption.jpg?w=200&amp;h=200&amp;s=1&amp;cx=856&amp;cy=459&amp;chk=v1_c21638ccbc4b52a45fac 2x"
                        src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/11/4a/fe/caption.jpg?w=100&amp;h=-1&amp;s=1&amp;cx=856&amp;cy=459&amp;chk=v1_c21638ccbc4b52a45fac"
                        width="100"
                        height="75"
                        role="none"
                        alt=""
                        fetchpriority="high"
                      />
                    </picture>
                  </div>
                  <div className="EtzER">
                    <div className="biGQs _P fiohW fOtGX">Atlantic City</div>
                    <div className="DvEpD">
                      <div className="biGQs _P pZUbB osNWb">
                        New Jersey, Hoa Kỳ
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div> */}
          </form>
        </div>
      </div>
    </>
  );
};

export default Search;
