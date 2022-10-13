import React from 'react'
import { useFormContext } from 'react-hook-form'
import styles from './FormField.module.scss'

interface FormFieldProps {
  name: string,
  label?: string,
  placeholder?: string;
  width?: string
}

export const FormField: React.FC<FormFieldProps> = ({name, label, placeholder = '', width = 'auto'} ) => {
  const {register, formState: {errors}} = useFormContext()

  return (
    <div className={styles.form_filed} style={{width}}>
      {label && <label className="form-filed__label">{label}</label>}
      <input 
        className={styles.form_filed__input}
        placeholder={placeholder}
        {...register(name)}
      />
      {!!errors[name]?.message && <p className={styles.form_filed__error}>{errors[name]?.message as string}</p>}
    </div>
  )
}

 