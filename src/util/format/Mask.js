import StringMask from 'string-mask';

/*
 Follow the pattern to apply and extract the mask
 */

export const apply = (value, mask) => call(mask, 'apply', value);

export const extract = (value, mask) => call(mask, 'extract', value);

// Store the masks to be called dynamically
const masks = {};

const call = (mask, method, value) => {
  if (typeof mask === 'undefined') {
    return value;
  }

  const namePropery =
    method +
    mask
      .charAt(0)
      .toUpperCase()
      .concat(mask.slice(1).toLowerCase());

  return namePropery in masks ? masks[namePropery](value) : value;
};

masks.applyCpfcnpj = value => {
  const formattedValue =
    value.length <= 11
      ? new StringMask('000.000.000-00')
      : new StringMask('00.000.000/0000-00');

  return formattedValue.apply(value).replace(/[^0-9]+$/, '');
};

masks.extractCpfcnpj = value => {
  const formattedValue = value.replace(/[^0-9]/g, '');
  return formattedValue.substring(0, 14);
};
