import deepFreeze from 'deep-freeze';

describe('deep-freeze', () => {
  it('should throw', () => {
    const test = {
      monday: {
        tasks: {
          1: 'eat',
          2: 'sleep',
        },
      },
    };

    deepFreeze(test);

    function mutation() {
      test.monday.tasks[1] = 'love';
    }

    expect(mutation).toThrow();
  });
});
