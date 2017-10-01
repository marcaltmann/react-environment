describe('Promises', () => {
  const createPromise = (shouldResolve) =>
    new Promise((resolve, reject) => {
      if (shouldResolve) {
        resolve('Promise fulfilled');
      } else {
        reject(new Error('Promise rejected'));
      }
    });

  test('fulfilling promise', () => {
    const promise = createPromise(true);
    return promise.then(res => {
      expect(res).toEqual('Promise fulfilled');
    });
  });

  test('rejecting promise', () => {
    const promise = createPromise(false);
    return promise.then(undefined, err => {
      expect(err).toEqual(new Error('Promise rejected'));
    });
  });
});
