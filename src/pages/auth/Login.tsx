import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { ILoginData } from '../../modules/auth/auth.interface'
import { loginFormSchema } from '../../shared/schemas'
import styles from './Auth.module.scss'
import { FormField } from '../../components'
import { useAppDispatch } from '../../app/store/hooks'
import { yupResolver } from '@hookform/resolvers/yup'
import { login } from '../../modules/actions'
import { Link, useNavigate } from 'react-router-dom'

const Login: React.FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate();
  const form = useForm<ILoginData>({
    resolver: yupResolver(loginFormSchema),
    mode: "onBlur"
  })

  const onSubmit = async (data: ILoginData): Promise<void> => {
    try {
      await dispatch(login(data)).unwrap()
      navigate('/')
    } catch (err) {
      alert(err)
    }
  }

  return (
    <section className={styles.auth}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Ввойти</h2>
        <p className={styles.subtitle}>Нет аккаунта, хочу пройти <Link className={styles.link} to="/auth/register">регистрацию</Link></p>
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField name="alias" placeholder="Никнэйм" width="300px" />
            <FormField name="password" placeholder="Пароль"  width="300px" />
            <button className={styles.form_button} type="submit">Ввойти</button>
          </form>
        </FormProvider>
      </div>
    </section>
  )
}

export default Login
