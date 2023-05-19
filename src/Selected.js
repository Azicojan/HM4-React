
import styles from './styles/Selected.module.css'


export default function Selected(){
    return(
        <div className={styles.selectedContainer}>
      <img src={ require('./img/Shape (Stroke).png')} alt="selected items" className={styles.shape} />
       <div className={styles.selected}>Selected</div>
        </div>
    )
}