export const cellphone = value => {
  return value.length === 11 ? true : false;
}

export const password = value => {
  // 1.至少8个字符；大小写；至少一个数字
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(value);
}