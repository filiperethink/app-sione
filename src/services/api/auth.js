/* eslint-disable object-curly-newline */
import { createRequestFactory } from '../request';

const api = createRequestFactory('/auth');

const authenticate = async data =>
  api.post(
    '/signup',
    { ...data },
    { 'Content-Type': 'application/x-www-form-urlencoded' },
  );

export default {
  authenticate,
};
