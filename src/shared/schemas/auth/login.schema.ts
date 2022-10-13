import * as yup from "yup"

export const loginFormSchema = yup.object({
  alias: yup.string().required('Введите свой никнейм'),
  password: yup.string().required('Введите свой пароль').min( 3 ,'Не менее 3 символов')
}).required()