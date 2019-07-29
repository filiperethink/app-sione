import { API } from './client';

const create = async data => {
  const newUser = {
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    password: data.password,
  };

  return await API.post('/users', newUser);
};

export default {
  create,
};
