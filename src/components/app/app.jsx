import Categories from '../categories/categories'
import Header from '../header/header'
import styles from './app.module.scss'

const App = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Categories />
    </div>
  )
}

export default App
