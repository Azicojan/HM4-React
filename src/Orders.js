
import styles from './styles/Orders.module.css'

export default function Orders() {
    return(
        <div className={styles.orderContainer}>
      <img src={ require('./img/Frame 211.png')} alt="orders" className={styles.cube} />
       <div className={styles.orders}>Orders</div>
        </div>
    )
}