import getValueAndMessage from './getValueAndMessage';

describe('getValueAndMessage', () => {
  it('should return message and value correctly', () => {
    expect(getValueAndMessage(0).value).toEqual(0);
    expect(getValueAndMessage(3).value).toEqual(3);
    expect(getValueAndMessage({ value: 0 }).value).toEqual(0);
    expect(getValueAndMessage({ value: 2 }).value).toEqual(2);
    expect(getValueAndMessage({ message: 'test' }).message).toEqual('test');
  });
});
