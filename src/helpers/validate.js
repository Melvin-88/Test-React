export const required = value =>
  value || typeof value === "number" ? undefined : "Это поле обязательно";

export const maxLength = max => value =>
  value && value.length > max
    ? `Это поле не должно быть больше ${max} символов`
    : undefined;

export const minLength = min => value =>
  value && value.length < min
    ? `Это поле не должно быть менее ${min} символов`
    : undefined;

export const equally = val => value =>
  value && value !== val ? `error` : undefined;

export const number = value =>
  value && isNaN(Number(value)) ? "Введите цифры" : undefined;

export const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined;

export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Введите Email адрес"
    : undefined;

export const phoneNumber = value =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ? "Invalid phone number, must be 10 digits"
    : undefined;
