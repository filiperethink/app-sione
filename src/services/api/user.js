/* eslint-disable object-curly-newline */
import { createRequestFactory } from '../request';

const api = createRequestFactory('/users');

const create = async data =>
  api.post(
    '/',
    { ...data },
    { 'Content-Type': 'application/x-www-form-urlencoded' },
  );

export default {
  create,
};
