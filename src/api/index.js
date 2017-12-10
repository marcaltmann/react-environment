import { v4 } from 'uuid';

const ERROR_RATE = 0.01;
const ROUND_TRIP_TIME = 500;

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

const delay = (time = ROUND_TRIP_TIME) =>
  new Promise(resolve => setTimeout(resolve, time));

export const fetchMessage = () =>
  delay().then(() => {
    if (Math.random() >= (1 - ERROR_RATE)) {
      throw new Error('Boom!');
    }

    return {
      message: fakeDatabase.message,
    };
  });
