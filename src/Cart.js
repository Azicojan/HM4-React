

import styles from './styles/Cart.module.css'

export default function Cart(){
    return(
        <div className={styles.cartContainer}>
        <img src={ require('./img/shopping-cart.png')} alt="shopping cart" className={styles.cart} />
         <div className={styles.shoppingCart}>Cart</div>
          </div>
    )
}