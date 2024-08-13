const parseAxiosError = (err: any, withValidation = true) => {
  const response = err.response;
  const data = response?.data;
  const isValidation = !!data?.errors;

  const status = response?.status || 'Network ErrorBoundary';

  return {
    message: isValidation && withValidation
      ? data?.errors
      : data?.message || err.message,
    status,
    isValidation,
  }
};

export default parseAxiosError;
