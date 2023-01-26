import { body } from "express-validator";

export const registerValidation = [
  body("email", "Неверный формат почты").isEmail(),
  body("name", "Вы не указали имя").isLength({ max: 50 }),
  body("password", "Пароль должен быть минимум 6 символов").isLength({
    min: 6,
  }),
  body("tel", "Номер телефона должен состоять из 11 символов")
    .isLength({
      min: 11,
      max: 11,
    })
    .optional(),
];
export const loginValidation = [
  body("email", "Неверный формат почты").isEmail(),
  body("password", "Пароль должен быть минимум 6 символов").isLength({
    min: 6,
  }),
];
export const itemCreateValidation = [
  body("title", "Введите имя предмета").isLength({ min: 3 }).isString(),
  body("price", "Введите цену предмета").isLength({ min: 2 }),
  body("img", "Неверная ссылка на изображение").optional().isString(),
  body("desc", "Введите описание предмета").isLength({ min: 5 }).isString(),
  body("category", "Введите category").optional().isArray(),
];
