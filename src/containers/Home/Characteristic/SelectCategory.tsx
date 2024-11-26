import { useState } from 'react';

const SelectCategory = () => {
  const [selectCategory, setSelectCategory] = useState(0);

  return (
    <div className="cxaFK">
      <span>
        <div className="_T UObru">
          <div className="vVcdb q f XCaFq">
            <span>
              <button
                className="OKHdJ z Pc PQ Pp PD W _S Gn Rd _M xARtZ uPlAb hzzSG PQFNM wSSLS yTAho"
                type="button"
                aria-label="Những điều cần thiết"
              >
                <div className="RCAPL j u">
                  <span className="Ni">
                    <svg
                      viewBox="0 0 24 24"
                      width="20px"
                      height="20px"
                      className="d Vb UmNoP"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="m12.664 2.272.004-.012zm-.66 2.032-1.84 5.661H4.197l4.82 3.503-1.84 5.655 4.82-3.497 4.827 3.499-1.84-5.657 4.817-3.496h-5.956zm9.54 4.404-.012.009zM12.03 1.251a.81.81 0 0 1 .729.526l.005.015 2.172 6.68h7.012c.427 0 .686.308.766.569a.8.8 0 0 1-.3.89l-5.666 4.11 2.164 6.65a.8.8 0 0 1-.304.918.81.81 0 0 1-.927-.011l-.003-.002-5.68-4.117-5.673 4.116-.003.003a.805.805 0 0 1-1.242-.872l.004-.014 2.17-6.671-5.668-4.12-.003-.002a.805.805 0 0 1 .472-1.454h7.018l2.165-6.656a.8.8 0 0 1 .792-.558"
                      ></path>
                    </svg>
                  </span>
                  <span className="biGQs _P FvqAl FGgoA vvmrG">
                    <div className="biGQs _P ttuOS">Những điều cần thiết</div>
                  </span>
                </div>
              </button>
            </span>
            <span>
              <button
                className="OKHdJ z Pc PQ Pp PD W _S Gn Rd _M xARtZ uPlAb hzzSG PQFNM wSSLS"
                type="button"
                aria-label="Travellers' Choice"
              >
                <div className="RCAPL j u">
                  <span className="Ni">
                    <svg
                      viewBox="0 0 24 24"
                      width="20px"
                      height="20px"
                      className="d Vb UmNoP"
                    >
                      <path d="M12 3.953a7.442 7.442 0 1 0 .001 14.884A7.442 7.442 0 0 0 12 3.953m0 14.05a6.61 6.61 0 1 1 0-13.218 6.61 6.61 0 0 1 0 13.219M10.343 11.9a.91.91 0 1 1-1.821 0 .91.91 0 0 1 1.821 0m5.134 0a.91.91 0 1 1-1.821 0 .91.91 0 0 1 1.82 0m.82-1.897.84-.913h-1.863A5.8 5.8 0 0 0 12 8.08a5.77 5.77 0 0 0-3.27 1.008H6.862l.84.913a2.567 2.567 0 1 0 3.475 3.78l.823.896.823-.895a2.568 2.568 0 1 0 3.474-3.78m-6.865 3.634a1.738 1.738 0 1 1 0-3.476 1.738 1.738 0 0 1 0 3.476M12 11.85c0-1.143-.832-2.124-1.929-2.543A5 5 0 0 1 12 8.92a5 5 0 0 1 1.928.386c-1.096.42-1.927 1.4-1.927 2.543m2.566 1.787a1.738 1.738 0 1 1 .001-3.476 1.738 1.738 0 0 1 0 3.476m-8.456 3.719s-.377-.946-1.396-1.903c-1.02-.957-2.303-1.132-2.303-1.132s.457 1.02 1.54 2.04c1.086 1.017 2.159.995 2.159.995m2.568 1.41s-.524-.511-1.479-.883-1.861-.191-1.861-.191.598.54 1.615.935c1.016.397 1.725.139 1.725.139m2.493.505s-.545-.224-1.357-.196-1.415.47-1.415.47.608.222 1.473.193 1.3-.467 1.3-.467m-6.186-4.203s-.175-1.008-.974-2.154c-.8-1.147-2.015-1.578-2.015-1.578s.238 1.098 1.089 2.319c.85 1.22 1.9 1.413 1.9 1.413m-1.003-3.071s.195-1.021-.134-2.393c-.328-1.371-1.294-2.21-1.294-2.21s-.17 1.128.18 2.589c.35 1.46 1.248 2.014 1.248 2.014"></path>
                      <path d="M17.887 17.355s.377-.946 1.396-1.903c1.02-.957 2.303-1.132 2.303-1.132s-.457 1.02-1.54 2.04c-1.086 1.017-2.159.995-2.159.995m-2.567 1.41s.524-.511 1.479-.883 1.861-.191 1.861-.191-.598.54-1.615.935c-1.016.397-1.725.139-1.725.139m-2.493.505s.545-.224 1.357-.196 1.415.47 1.415.47-.608.222-1.473.193-1.3-.467-1.3-.467m6.186-4.203s.175-1.008.974-2.154c.8-1.147 2.015-1.578 2.015-1.578s-.238 1.098-1.089 2.319c-.85 1.22-1.9 1.413-1.9 1.413m1.003-3.071s-.195-1.021.133-2.393c.33-1.371 1.293-2.21 1.293-2.21s.17 1.128-.18 2.589c-.349 1.46-1.246 2.014-1.246 2.014M12 20.047a.413.413 0 1 0 0-.827.413.413 0 0 0 0 .827"></path>
                    </svg>
                  </span>
                  <span className="biGQs _P FvqAl FGgoA vvmrG">
                    <div className="biGQs _P ttuOS">Travellers' Choice</div>
                  </span>
                </div>
              </button>
            </span>
            <span>
              <button
                className="OKHdJ z Pc PQ Pp PD W _S Gn Rd _M xARtZ uPlAb hzzSG PQFNM wSSLS"
                type="button"
                aria-label="Phù hợp với gia đình"
              >
                <div className="RCAPL j u">
                  <span className="Ni">
                    <svg
                      viewBox="0 0 24 24"
                      width="20px"
                      height="20px"
                      className="d Vb UmNoP"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.917 8.324a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m0 1.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6m12.166-1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m0 1.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.987.71a1.105 1.105 0 1 0 0-2.21 1.105 1.105 0 0 0 0 2.21m0 1.5a2.605 2.605 0 1 0 0-5.21 2.605 2.605 0 0 0 0 5.21"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1.676 18.671v-4.58c.662-.78 1.797-1.642 3.202-1.905 1.384-.259 3.15.042 5.136 1.83-.75.376-1.33.915-1.693 1.39l-.154.202v3.063zm6.49 1.5H.177v-6.598l.154-.202c.796-1.04 2.3-2.291 4.273-2.66 2.024-.378 4.402.199 6.83 2.58l.225.22v.039a4 4 0 0 1 .7.003l.138-.182c.796-1.04 2.3-2.291 4.273-2.66 2.024-.378 4.403.199 6.83 2.58l.225.22v6.66h-7.798v.005h-7.86zm7.86-1.5h6.298v-4.524c-2.044-1.904-3.862-2.226-5.28-1.961-1.343.25-2.44 1.05-3.111 1.8.614.289 1.241.725 1.868 1.34l.225.22zm-6.36.005v-2.544c.398-.44 1.042-.903 1.819-1.048.787-.147 1.83.01 3.04 1.101v2.49z"
                      ></path>
                    </svg>
                  </span>
                  <span className="biGQs _P FvqAl FGgoA vvmrG">
                    <div className="biGQs _P ttuOS">Phù hợp với gia đình</div>
                  </span>
                </div>
              </button>
            </span>
            <span>
              <button
                className="OKHdJ z Pc PQ Pp PD W _S Gn Rd _M xARtZ uPlAb hzzSG PQFNM wSSLS"
                type="button"
                aria-label="Địa điểm tiềm năng"
              >
                <div className="RCAPL j u">
                  <span className="Ni">
                    <svg
                      viewBox="0 0 24 24"
                      width="20px"
                      height="20px"
                      className="d Vb UmNoP"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="m12.49 3.52.094.137h5.19l.152-.123 3.581 4.4-.762.62-8.57 11.927L3.108 8.27l-.615-.497 3.425-4.237.151.121h6.218zm-1.346 1.31H7.735l1.06 2.73zm-1.129 3.111h4.068l-1.797-2.637zm3.369-3.11 1.908 2.798 1.005-2.799zM20 7.941h-3.573l1.094-3.046zm-16.134 0 2.579-3.19 1.239 3.19zm5.533 1.174h5.36l-2.576 7.169zm-1.26 0H5.2l6.166 8.305zm4.978 8.042 2.889-8.042h2.89z"
                      ></path>
                    </svg>
                  </span>
                  <span className="biGQs _P FvqAl FGgoA vvmrG">
                    <div className="biGQs _P ttuOS">Địa điểm tiềm năng</div>
                  </span>
                </div>
              </button>
            </span>
            <span>
              <button
                className="OKHdJ z Pc PQ Pp PD W _S Gn Rd _M xARtZ uPlAb hzzSG PQFNM wSSLS"
                type="button"
                aria-label="Bảo tàng"
              >
                <div className="RCAPL j u">
                  <span className="Ni">
                    <svg
                      viewBox="0 0 24 24"
                      width="20px"
                      height="20px"
                      className="d Vb UmNoP"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="m12 2.685 9.75 5.959v1.67h-3v9.5H21v1.5H3v-1.5h2.25v-9.5h-3v-1.67zm-5.25 7.63v9.5h2.5v-9.5zm4 0v9.5h2.5v-9.5zm4 0v9.5h2.5v-9.5zm-9.903-1.5h14.306L12 4.442z"
                      ></path>
                    </svg>
                  </span>
                  <span className="biGQs _P FvqAl FGgoA vvmrG">
                    <div className="biGQs _P ttuOS">Bảo tàng</div>
                  </span>
                </div>
              </button>
            </span>
            <span>
              <button
                className="OKHdJ z Pc PQ Pp PD W _S Gn Rd _M xARtZ uPlAb hzzSG PQFNM wSSLS"
                type="button"
                aria-label="Ngoài trời"
              >
                <div className="RCAPL j u">
                  <span className="Ni">
                    <svg
                      viewBox="0 0 24 24"
                      width="20px"
                      height="20px"
                      className="d Vb UmNoP"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="m12.005 3.893 9.844 16.214H2.15l4.535-7.14zM7.94 13.79l-3.06 4.818h14.302l-2.564-4.224-.072.06c-.436.348-1.099.664-2.031.664-.549 0-1.02-.185-1.42-.408a9 9 0 0 1-.945-.634l-.139-.102c-.686-.499-1.26-.856-1.996-.856-.868 0-1.408.215-1.713.395a1.7 1.7 0 0 0-.362.287m7.875-.728-3.789-6.24-2.837 4.84q.38-.053.826-.054c1.265 0 2.19.642 2.879 1.143l.154.113c.294.215.534.39.778.527.272.151.488.217.689.217.568 0 .905-.184 1.094-.336.1-.08.166-.156.204-.208z"
                      ></path>
                    </svg>
                  </span>
                  <span className="biGQs _P FvqAl FGgoA vvmrG">
                    <div className="biGQs _P ttuOS">Ngoài trời</div>
                  </span>
                </div>
              </button>
            </span>
            <span>
              <button
                className="OKHdJ z Pc PQ Pp PD W _S Gn Rd _M xARtZ uPlAb hzzSG PQFNM wSSLS"
                type="button"
                aria-label="Nghệ thuật &amp; nhà hát"
              >
                <div className="RCAPL j u">
                  <span className="Ni">
                    <svg
                      viewBox="0 0 24 24"
                      width="20px"
                      height="20px"
                      className="d Vb UmNoP"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.182 16.207V3.74h1.5v12.468z"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.636 18.76a2.553 2.553 0 1 0 0-5.106 2.553 2.553 0 0 0 0 5.107m0 1.5a4.053 4.053 0 1 0 0-8.106 4.053 4.053 0 0 0 0 8.107m4.826-12.828a12 12 0 0 1-2.2-3.017l1.34-.671a10.6 10.6 0 0 0 1.912 2.62c.899.884 1.902 1.475 2.903 1.475v1.5c-1.581 0-2.945-.913-3.955-1.907"
                      ></path>
                    </svg>
                  </span>
                  <span className="biGQs _P FvqAl FGgoA vvmrG">
                    <div className="biGQs _P ttuOS">
                      Nghệ thuật &amp; nhà hát
                    </div>
                  </span>
                </div>
              </button>
            </span>
            <span>
              <button
                className="OKHdJ z Pc PQ Pp PD W _S Gn Rd _M xARtZ uPlAb hzzSG PQFNM wSSLS"
                type="button"
                aria-label="Cuộc sống về đêm"
              >
                <div className="RCAPL j u">
                  <span className="Ni">
                    <svg
                      viewBox="0 0 24 24"
                      width="20px"
                      height="20px"
                      className="d Vb UmNoP"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2.625 3.26h18.75v1.602l-8.625 8.96v5.418h3.984v1.5H7.151v-1.5h4.099v-5.42L2.625 4.8zm9.377 9.177 7.39-7.677H4.662z"
                      ></path>
                      <path d="M14.386 6.46a1.4 1.4 0 0 0-.791.255 1.5 1.5 0 0 0-.525.67 1.56 1.56 0 0 0-.085.86c.054.288.188.555.385.765a1.37 1.37 0 0 0 1.016.44c.19.003.377-.035.552-.11a1.52 1.52 0 0 0 .857-1.097 1.56 1.56 0 0 0-.082-.867 1.5 1.5 0 0 0-.529-.673 1.4 1.4 0 0 0-.798-.253z"></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M14.469 7.46h-.075a.4.4 0 0 0-.225.074.5.5 0 0 0-.17.22.56.56 0 0 0-.03.308c.02.105.067.195.13.263q.061.065.134.095.072.03.145.03h.022a.34.34 0 0 0 .14-.028q.07-.03.13-.093l.005-.005.005-.005a.5.5 0 0 0 .133-.264.56.56 0 0 0-.03-.31.5.5 0 0 0-.171-.222.4.4 0 0 0-.143-.064m.917-.586a1.4 1.4 0 0 0-1-.424v.01a1.4 1.4 0 0 0-.791.255 1.5 1.5 0 0 0-.525.67 1.56 1.56 0 0 0-.085.86c.054.288.188.555.385.765a1.37 1.37 0 0 0 1.016.44c.19.003.377-.035.552-.11a1.52 1.52 0 0 0 .857-1.097 1.56 1.56 0 0 0-.082-.867 1.5 1.5 0 0 0-.327-.502"
                      ></path>
                    </svg>
                  </span>
                  <span className="biGQs _P FvqAl FGgoA vvmrG">
                    <div className="biGQs _P ttuOS">Cuộc sống về đêm</div>
                  </span>
                </div>
              </button>
            </span>
            <div className="gsugQ _Q t l _U s S Z1 oFFSh LOYKv">
              <div className="iVLAf _Q t s Cl Y gJwZS l">
                <button
                  //   tabindex="-1"
                  aria-label="Trước"
                  className="aJnEh _G z _S Cl Q"
                  //disabled=""
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="24px"
                    height="24px"
                    className="d Vb UmNoP"
                  >
                    <path d="m16.6 5.65-6.4 6.4 6.4 6.3-1.4 1.4-7.8-7.7 7.8-7.8z"></path>
                  </svg>
                </button>
              </div>
              <div className="iVLAf _Q t s Cl Y BhBiM _U">
                <button
                  //   tabindex="-1"
                  aria-label="Tiếp theo"
                  className="aJnEh _G z _S Cl Q"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="24px"
                    height="24px"
                    className="d Vb UmNoP"
                  >
                    <path d="m7.4 5.65 6.4 6.4-6.4 6.3 1.4 1.4 7.8-7.7-7.8-7.8z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </span>
    </div>
  );
};
export default SelectCategory;
