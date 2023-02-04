import React from 'react'
import styles from './button-cart.module.scss'
import IconCart from '../../images/icon-cart.svg'

const ButtonCart = () => {
  return (
    <div className={styles.button}>
      <span>0 ₽</span>
      <div className={styles.button__line}></div>
      <img
        src={IconCart}
        alt={'Корзина'}
        className={styles.button__cart}
      />
      <span>0 </span>
    </div>
  )
}

export default ButtonCart
