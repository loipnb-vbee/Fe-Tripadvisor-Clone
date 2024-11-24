import api from './api';

const themeQuerry = async () => {
  try {
    const response = await api({
      method: 'GET',
      url: '/theme',
    //   params: { query },
    });

    const { status, result } = response;
    if (status !== 1) throw new Error('Failed to get hotels');
    return result;
  } catch (error) {
    return error?.response?.data || {};
  }
};

export { themeQuerry };