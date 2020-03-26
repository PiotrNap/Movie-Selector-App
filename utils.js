const debounce = (callback, delay) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoudId = setTimeout(() => {
      callback.apply(null, args);
    }, 1000);
  };
};
