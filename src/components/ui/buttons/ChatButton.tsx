import React, { ReactNode } from 'react'
import styles from './ChatButton.module.scss'
import PlusIcon from '../../../shared/assets/icons/plus-icon.svg'


type ChatButtonProps = {
  children: ReactNode
}

export const ChatButton: React.FC<ChatButtonProps> = ({children}) => {
  return (
    <button className={styles.btn}>
      <img src={PlusIcon} className={styles.plus_icon} alt="plus" />
      {children}
    </button>)
}