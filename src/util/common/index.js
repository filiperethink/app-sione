export const commonError = err => ({
  status: true,
  message: err.message,
  statusCode: err.code,
});

export const commonResponse = (err, res) => {
  if (err) {
    return { success: false, error: commonError(err), data: null };
  }
  return { success: true, error: null, data: res.data || res };
};
