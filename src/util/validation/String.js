export const validateCpfCnpj = cpfcnpj => {
  const pattern = /^[0-9]+$/;
  if (
    cpfcnpj &&
    (cpfcnpj.length === 11 || cpfcnpj.length === 14) &&
    pattern.test(String(cpfcnpj))
  ) {
    return cpfcnpj.length === 11 ? validateCpf(cpfcnpj) : validateCnpj(cpfcnpj);
  }
  return false;
};

const validateCpf = cpf => {
  if (
    !cpf ||
    cpf.length !== 11 ||
    cpf === '00000000000' ||
    cpf === '11111111111' ||
    cpf === '22222222222' ||
    cpf === '33333333333' ||
    cpf === '44444444444' ||
    cpf === '55555555555' ||
    cpf === '66666666666' ||
    cpf === '77777777777' ||
    cpf === '88888888888' ||
    cpf === '99999999999'
  ) {
    return false;
  }
  let sum = 0;
  let rest;
  for (let i = 1; i <= 9; i += 1) {
    sum += parseInt(cpf.substring(i - 1, i), 10) * (11 - i);
  }
  rest = (sum * 10) % 11;
  if (rest === 10 || rest === 11) {
    rest = 0;
  }
  if (rest !== parseInt(cpf.substring(9, 10), 10)) {
    return false;
  }
  sum = 0;
  for (let i = 1; i <= 10; i += 1) {
    sum += parseInt(cpf.substring(i - 1, i), 10) * (12 - i);
  }
  rest = (sum * 10) % 11;
  if (rest === 10 || rest === 11) {
    rest = 0;
  }
  if (rest !== parseInt(cpf.substring(10, 11), 10)) {
    return false;
  }
  return true;
};

const validateCnpj = cnpj => {
  if (
    !cnpj ||
    cnpj.length !== 14 ||
    cnpj === '00000000000000' ||
    cnpj === '11111111111111' ||
    cnpj === '22222222222222' ||
    cnpj === '33333333333333' ||
    cnpj === '44444444444444' ||
    cnpj === '55555555555555' ||
    cnpj === '66666666666666' ||
    cnpj === '77777777777777' ||
    cnpj === '88888888888888' ||
    cnpj === '99999999999999'
  ) {
    return false;
  }
  let size = cnpj.length - 2;
  let numbers = cnpj.substring(0, size);
  const digits = cnpj.substring(size);
  let sum = 0;
  let pos = size - 7;
  for (let i = size; i >= 1; i -= 1) {
    sum += numbers.charAt(size - i) * pos;
    pos -= 1;
    if (pos < 2) {
      pos = 9;
    }
  }
  let resultado = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  if (resultado !== parseInt(digits.charAt(0), 10)) {
    return false;
  }
  size += 1;
  numbers = cnpj.substring(0, size);
  sum = 0;
  pos = size - 7;
  for (let i = size; i >= 1; i -= 1) {
    sum += numbers.charAt(size - i) * pos;
    pos -= 1;
    if (pos < 2) {
      pos = 9;
    }
  }
  resultado = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  if (resultado !== parseInt(digits.charAt(1), 10)) {
    return false;
  }
  return true;
};
