import { v4 } from 'uuid';

// Fake API
// Could be used for testing, also. The delay could be set to zero then

const fakeDatabase = {
  records: [
    {
      id: v4(),
      title: 'title',
    },
    {
      id: v4(),
      title: 'different title',
    },
  ],
  message: 'Hello World!',
};

const delay = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms));

export const fetchMessage = () =>
  delay(500).then(() => {
    if (Math.random() > 0.5) {
      throw new Error('Boom!');
    }

    return {
      message: fakeDatabase.message,
    };
  });
