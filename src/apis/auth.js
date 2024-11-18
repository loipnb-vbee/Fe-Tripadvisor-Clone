import api from './api';

const getTokenFromRefreshToken = async (refreshToken) => {
  try {
    const response = await api({
      method: 'POST',
      url: 'auths/refresh-token',
      data: { refreshToken },
    });
    const { status, result } = response;
    if (status !== 1) throw new Error('Failed to get token from refresh token');
    return result;
  } catch (error) {
    return error?.response?.data || {};
  }
};

export { getTokenFromRefreshToken };
