import api from './api';

const getHotels = async ({ offset, limit }) => {
  try {
    const response = await api({
      method: 'GET',
      url: '/hotels',
      params: { offset, limit },
    });

    const { status, result } = response;
    if (status !== 1) throw new Error('Failed to get hotels');
    return result;
  } catch (error) {
    return error?.response?.data || {};
  }
};

export { getHotels };
