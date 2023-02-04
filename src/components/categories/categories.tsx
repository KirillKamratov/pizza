import Button from '../../ui/button/button'
import { pizzaTypes } from '../../utils'
import styles from './categories.module.scss'

const Categories = () => {
  return (
    <ul className={styles.list}>
      {pizzaTypes.map((type, index) => (
        <Button key={index}>{type}</Button>
      ))}
    </ul>
  )
}

export default Categories
