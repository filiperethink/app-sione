import { createRequestFactory } from '../request';

const api = createRequestFactory('/user');

const getUsers = async () => api.get();

export default {
  getUsers
};
