import React, { ReactNode, FC } from 'react'
import styles from './button.module.scss'

type TButton = {
  children?: ReactNode
}

const Button: FC<TButton> = ({ children }) => {
  return <li className={styles.button}>{children}</li>
}

export default Button
