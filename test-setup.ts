import 'react-native-gesture-handler/jestSetup';
export const mockedNavigate = jest.fn();
export const mockedReset = jest.fn();
export const mockedGoBack = jest.fn();
export const mockedUseRoute = jest.fn();
export const mockedSetParams = jest.fn();
export const mockAddListener = jest.fn();

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {};

  return Reanimated;
});

jest.mock('@react-navigation/native', () => {
  const original = jest.requireActual('@react-navigation/native'); // Step 2.
  return {
    ...original,

    functionToMock: jest.fn(),
    useFocusEffect: jest.fn(),
    useNavigation: () => ({
      addListener: mockAddListener.mockImplementation((event, callback) => {
        callback();
        // returning value for `navigationSubscription`
        return jest.fn();
      }),
      canGoBack: () => true,
      goBack: mockedGoBack,
      navigate: mockedNavigate,
      reset: mockedReset,
      setOptions: jest.fn(),
      setParams: mockedSetParams,
    }),
    useRoute: mockedUseRoute,
  };
});
