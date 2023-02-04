import styles from './header.module.scss'
import pizzaLogo from '../../images/pizza-logo.png'
import ButtonCart from '../../ui/button-cart/button-cart'

const Header = () => {
  return (
    <section>
      <div className={styles.header}>
        <div className={styles.header__info}>
          <img
            src={pizzaLogo}
            alt={'Лого пиццы'}
            className={styles.header__logo}
          />
          <div>
            <h1 className={styles.header__heading}>react pizza</h1>
            <p className={styles.header__text}>
              самая вкусная пицца во вселенной
            </p>
          </div>
        </div>
        <ButtonCart />
      </div>
    </section>
  )
}

export default Header
