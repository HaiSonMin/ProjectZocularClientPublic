export const validateEmail = (value: string) => {
  const regex =
    /^([0-9a-zA-Z]([-_.]*[0-9a-zA-Z]+)*)@([0-9a-zA-Z]([-_.]*[0-9a-zA-Z]+)*)\.([a-zA-Z]{2,9})$/;
  return regex.test(String(value).toLowerCase());
};

export const validatePhoneNumber = (phoneNumber: string) => {
  const regex = /^(84|0[3|5|7|8|9])[0-9]{8}$/;
  return regex.test(phoneNumber);
};

export const validateName = (name: string) => {
  const regex = /^[A-Za-zÀ-ỹà-ỹ ]+$/g;
  return regex.test(name);
};

export const validateText = (text: string) => {
  const regex = /^[A-Za-zÀ-ỹà-ỹ0-9 ]+$/g;
  return regex.test(text);
};

export const validatePassWithoutUppercaseLetter = (text: string) => {
  const regex = /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
  return regex.test(text);
};

export const validatePass = (text: string) => {
  const regex = /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
  return regex.test(text);
};
