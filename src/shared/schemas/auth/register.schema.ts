import * as yup from "yup"


export const registerFormSchema = yup.object({
  name: yup.string().required('Введите имя'),
  alias: yup.string().required('Создайте уникальный никнейм'),
  password: yup.string().required('Введите пароль').min( 3 ,'Не менее 3 символов')
}).required()