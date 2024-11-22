import api from './api';

const searchQuerry = async ({ query }) => {
  try {
    const response = await api({
      method: 'GET',
      url: '/search',
      params: { query },
    });

    const { status, result } = response;
    if (status !== 1) throw new Error('Failed to get hotels');
    return result;
  } catch (error) {
    return error?.response?.data || {};
  }
};

export { searchQuerry };

// import axios from 'axios';

// const searchQuerry = async () => {
//   try {
//     const response = await axios.post(
//       'https://www.tripadvisor.com.vn/data/graphql/ids',
//       {
//         variables: {
//           request: {
//             query: 'a',
//             limit: 10,
//             scope: 'IN_GEO_EXTEND_WORLDWIDE',
//             locale: 'vi-VN',
//             scopeGeoId: 293924,
//             searchCenter: null,
//             types: ['LOCATION', 'QUERY_SUGGESTION', 'RESCUE_RESULT'],
//             locationTypes: [
//               'GEO',
//               'AIRPORT',
//               'ACCOMMODATION',
//               'ATTRACTION',
//               'ATTRACTION_PRODUCT',
//               'EATERY',
//               'NEIGHBORHOOD',
//               'AIRLINE',
//               'SHOPPING',
//               'UNIVERSITY',
//               'GENERAL_HOSPITAL',
//               'PORT',
//               'FERRY',
//               'CORPORATION',
//               'VACATION_RENTAL',
//               'SHIP',
//               'CRUISE_LINE',
//               'CAR_RENTAL_OFFICE',
//             ],
//             userId: null,
//             context: {
//               searchSessionId: '000fe9df47c1e1ee.ssid',
//               typeaheadId: '1732184109430',
//               uiOrigin: 'SINGLE_SEARCH_NAV',
//               routeUid: 'fce20583-c9e5-4c24-bc28-faf03f9810c5',
//             },
//             enabledFeatures: ['articles'],
//             includeRecent: false,
//             includeNestedResults: true,
//           },
//         },
//         extensions: {
//           preRegisteredQueryId: 'c2e5695e939386e4',
//         },
//       },
//       {
//         headers: {
//           accept: '*/*',
//           'accept-language':
//             'vi-VN,vi;q=0.9,en-US;q=0.8,en;q=0.7,fr-FR;q=0.6,fr;q=0.5',
//           'content-type': 'application/json',
//           cookie:
//             'TASameSite=1; TAUnique=^%^1^%^enc^%^3AQ^%^2B3SptyQVzyjJQloHVgP9AncISwiikTVo^%^2Barimi^%^2FJipZeDG49X91lGaZ1nu7w897Nox8JbUSTxk^%^3D; TASSK=enc^%^3AALSxDwMFx5bD^%^2B6ObjmhX7giMqKEMNOhyLtYauMGDOdtB2eZf0Gl64EiZagEYaYOmAJwCMHh29a15SZkm06dZ03Vn1xi63jq8zgPlENPZheidQSz3Xd3JAk7YQ^%^2BBHLjBftA^%^3D^%^3D; _gcl_au=1.1.1057289523.1728108253; _ga=GA1.1.1307216210.1728108253; _lc2_fpi=28c87295fd99--01j9dmeqx2r1tkcb9r2gyg0310; _lc2_fpi_meta=^%^7B^%^22w^%^22^%^3A1728108257186^%^7D; TATrkConsent=eyJvdXQiOiJTT0NJQUxfTUVESUEiLCJpbiI6IkFEVixBTkEsRlVOQ1RJT05BTCJ9; _lr_env_src_ats=false; pbjs_sharedId=1b60f286-3123-4ad1-98ab-0a89be7c5144; pbjs_sharedId_cst=zix7LPQsHA^%^3D^%^3D; pbjs_unifiedID=^%^7B^%^22TDID^%^22^%^3A^%^227de04cc6-2fd2-4947-a966-b04d404e80b1^%^22^%^2C^%^22TDID_LOOKUP^%^22^%^3A^%^22TRUE^%^22^%^2C^%^22TDID_CREATED_AT^%^22^%^3A^%^222024-10-04T10^%^3A28^%^3A34^%^22^%^7D; pbjs_unifiedID_cst=zix7LPQsHA^%^3D^%^3D; TATravelInfo=V2*A.2*MG.-1*HP.2*FL.3*AZ.1*RS.1; PMC=V2*MS.2*MD.20241005*LD.20241117; TAUD=LA-1728133641495-1*RDD-1-2024_10_05*HDD-2524705-2024_10_13.2024_10_14*HD-339673970-2024_10_09.2024_10_10*VRD-339673971-2024_10_09.2024_10_10*G-339673972-2.1.-1.*VRG-339673973-2.0*ARC-421229087*ARDD-1693374739-2024_10_26.2024_10_31*FO-3745242050-VII*FD-3745242051-HAN*CUR-1-VND*LG-3747665959-2.1.T.*LD-3747665960-.....; TART=^%^1^%^enc^%^3AqtKKjlLWXY5YnUW1mdmO4COsLzXK^%^2FAWb2QyeObUuIT68PK97J0kfg85gNDzzFU488^%^2BnN9tvjj^%^2Bk^%^3D; TADCID=kWbon8_7hcfR-oZWABQCrj-Ib21-TgWwDB4AzTFpg4G7SXxiFd34QvPW8gQ3YXCGxjHBe1cILVvAL94x_bEKT79W1Ose0QFHBUg; _lr_sampling_rate=100; pbjs_li_nonid=^%^7B^%^7D; pbjs_li_nonid_cst=zix7LPQsHA^%^3D^%^3D; PAC=AGIb9KlJni7CcRB9LV4KU52QLG2a34TYWTtX00oh4wbnJ-9DI_3CrNwJzzv9cSCEeIdw9Si2iiq9ewRmh9L9k6WGnyaqR7AJbrwF7iLyTdph8hSaSlo77Mvyel4yeBK4-A^%^3D^%^3D; _li_dcdm_c=.tripadvisor.com.vn; _lr_retry_request=true; __vt=DSaZ2qahQSQVNhR4ABQCjdMFtf3dS_auw5cMBDN7STGb0ur4hTtGTP2djnhr1gnAb-fUBircwUJ05BbIG1x5A8uMeJ6QuDzNQW07rryUoHSgSXraJwnGOO3TQXqyMM4bVoujjD9mJ8TMmSy1Xc21PIEFp2NClK4fYjOc6CoEgbQGrWsL9fZkfYB5P-tApNJKU9qs3FkTAShQfzmRFsFyfAmJZhxbhwVUzFv5EJQ3_V3dNqYpzimZdGf8J-inFchxn10fKQq_vynp6JfPAvrSbeV09DZVRDCVUtnW5J-W76i5jklhCsAmVg; TASID=DAF56B37FF923CA4F61D89A6982E0923; ab.storage.deviceId.6e55efa5-e689-47c3-a55b-e6d7515a6c5d=^%^7B^%^22g^%^22^%^3A^%^222f98091f-3d99-9821-bcb5-855d1c84293b^%^22^%^2C^%^22c^%^22^%^3A1728108279773^%^2C^%^22l^%^22^%^3A1732183995565^%^7D; ab.storage.userId.6e55efa5-e689-47c3-a55b-e6d7515a6c5d=^%^7B^%^22g^%^22^%^3A^%^22MTA^%^3A35C4F40FB4872AA4CCF0DC81ED422D6F^%^22^%^2C^%^22c^%^22^%^3A1731494770077^%^2C^%^22l^%^22^%^3A1732183995566^%^7D; ab.storage.sessionId.6e55efa5-e689-47c3-a55b-e6d7515a6c5d=^%^7B^%^22g^%^22^%^3A^%^22c55e7ea5-7546-cd89-5882-dfd1902c4f7b^%^22^%^2C^%^22e^%^22^%^3A1732184010952^%^2C^%^22c^%^22^%^3A1732183995565^%^2C^%^22l^%^22^%^3A1732183995952^%^7D; _gcl_aw=GCL.1732183996.null; TASession=V2ID.DAF56B37FF923CA4F61D89A6982E0923*SQ.3*LS.Tourism*HS.recommended*ES.popularity*DS.5*SAS.popularity*FPS.oldFirst*FA.1*DF.0*TRA.true; SRT=TART_SYNC; __gads=ID=18e117f2172def98:T=1728133460:RT=1732184000:S=ALNI_MaNrf84-y9BrYgBRn_534jgVF9mRg; __gpi=UID=00000f35d4fd70c2:T=1728133460:RT=1732184000:S=ALNI_MbLyyr0HU4WI1LvUjRQ8lxnPW_RdA; __eoi=ID=8dee6d8cc95d2f69:T=1728133460:RT=1732184000:S=AA-AfjYp2q6QA64bKv-WIOpEqlFA; datadome=JZpXwEPC1JmXcajbes4~Cs0IsFtc5JolfAZk9hsAI81sPFk2736cEnRR8T6si~nLSZmmyfTwvgUjjBxWDXmBmc04j4sb560F3gyhgQo41uq_KpwMMn0CG0xtm9U0SyTG; _ga_QX0Q50ZC9P=GS1.1.1732182060.64.1.1732184064.60.0.0^"',
//           origin: 'https://www.tripadvisor.com.vn',
//           priority: 'u=1, i',
//           referer:
//             'https://www.tripadvisor.com.vn/Tourism-g293924-Hanoi-Vacations.html',
//           'sec-ch-device-memory': '8',
//           'sec-ch-ua':
//             '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
//           'sec-ch-ua-arch': '"x86"',
//           'sec-ch-ua-full-version-list':
//             '"Google Chrome";v="131.0.6778.71", "Chromium";v="131.0.6778.71", "Not_A Brand";v="24.0.0.0"',
//           'sec-ch-ua-mobile': '?0',
//           'sec-ch-ua-model': '""',
//           'sec-ch-ua-platform': '"Windows"',
//           'sec-fetch-dest': 'empty',
//           'sec-fetch-mode': 'same-origin',
//           'sec-fetch-site': 'same-origin',
//           'user-agent':
//             'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
//         },
//       },
//     );
//     console.log('Response data:', response.data);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// };

// export { searchQuerry };

