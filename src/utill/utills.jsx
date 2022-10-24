// add +,- sign
export const addSign = (cnt) => {
  if (cnt > 0) {
    return '+' + String(cnt);
  } else {
    return cnt;
  }
};

// number to String
export const nToS = (num, digits) => {
  const si = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'k' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'G' },
    { value: 1e12, symbol: 'T' },
    { value: 1e15, symbol: 'P' },
    { value: 1e18, symbol: 'E' },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  let i;
  for (i = si.length - 1; i > 0; i--) {
    if (num >= si[i].value) {
      break;
    }
  }
  return (num / si[i].value).toFixed(digits).replace(rx, '$1') + si[i].symbol;
};

// String to Number
export const sToN = (string) => {
  if (!string) {
    return 0;
  }
  const unit = string.slice(-1);
  switch (unit) {
    case 'K':
      return Number(string.slice(0, -1)) * 1000;
    case 'M':
      return Number(string.slice(0, -1)) * 1000000;
    case '+':
      return Number(string.slice(0, -1));
    default:
      return Number(string);
  }
};
