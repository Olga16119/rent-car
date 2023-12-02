const shortAddress = address => {
  return address.split(', ').slice(-2);
};

export default shortAddress;
