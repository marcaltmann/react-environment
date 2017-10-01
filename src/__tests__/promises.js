describe('Promises', () => {
  const createPromise = (shouldResolve) =>
    new Promise((resolve, reject) => {
      if (shouldResolve) {
        resolve('Promise fulfilled');
      } else {
        reject(new Error('Promise rejected'));
      }
    });

  describe('standard syntax', () => {
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

  describe('with async', () => {
    test('fulfilling promise', async () => {
      const promise = createPromise(true);
      const result = await promise;
      expect(result).toEqual('Promise fulfilled');
    });

    test('rejecting promise', async () => {
      const promise = createPromise(false);
      try {
        await promise;
      } catch (e) {
        expect(e).toEqual(new Error('Promise rejected'));
      }
    });
  });

  describe('with matchers', () => {
    test('fulfilling promise', () => {
      const promise = createPromise(true);
      return expect(promise).resolves.toEqual('Promise fulfilled');
    });

    test('rejecting promise', () => {
      const promise = createPromise(false);
      return expect(promise).rejects.toEqual(new Error('Promise rejected'));
    });
  });

  describe('with matchers and async', () => {
    test('fulfilling promise', async () => {
      const promise = createPromise(true);
      await expect(promise).resolves.toEqual('Promise fulfilled');
    });

    test('rejecting promise', async () => {
      const promise = createPromise(false);
      await expect(promise).rejects.toEqual(new Error('Promise rejected'));
    });
  });
});
