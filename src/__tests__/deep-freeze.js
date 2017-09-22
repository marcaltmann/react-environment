import deepFreeze from 'deep-freeze';

describe('deep-freeze', () => {
  it('should freeze first argument', () => {
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

  it('should not freeze any other arguments', () => {
    const test1 = {
      monday: {
        tasks: {
          1: 'eat',
          2: 'sleep',
        },
      },
    };

    const test2 = {
      tuesday: {
        tasks: {
          1: 'nothing',
          2: 'drink tea',
        },
      },
    };

    deepFreeze(test1, test2);

    function mutation() {
      test2.tuesday.tasks[1] = 'buy tea';
    }

    expect(mutation).not.toThrow();
  });
});
