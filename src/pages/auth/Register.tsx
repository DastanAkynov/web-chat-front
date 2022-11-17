import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { IRegisterData } from '../../modules/auth/auth.interface'
import { registerFormSchema } from '../../shared/schemas'
import styles from './Auth.module.scss'
import { FormField } from '../../components'
import { useAppDispatch } from '../../app/store/hooks'
import { yupResolver } from '@hookform/resolvers/yup'
import { register } from '../../modules/actions'
import { Link, useNavigate } from 'react-router-dom'

const Register: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch()
  const form = useForm<IRegisterData>({
    resolver: yupResolver(registerFormSchema),
    mode: "onBlur"
  })

  const onSubmit = async (data: IRegisterData): Promise<void> => {
    try {
      await dispatch(register(data)).unwrap()
      navigate('/')
    } catch (err) {
      alert(err)
    }
  }

  return (
    <section className={styles.auth}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Регистрация</h2>
        <p className={styles.subtitle}><Link className={styles.link} to="/login">Ввойти</Link> через аккаунт</p>
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField name="name" placeholder="Имя" width="300px" />
            <FormField name="alias" placeholder="Никнэйм" width="300px" />
            <FormField name="password" placeholder="Пароль"  width="300px" />
            <button className={styles.form_button} type="submit">Регистрация</button>
          </form>
        </FormProvider>
      </div>
    </section>
  )
}

export default Register
