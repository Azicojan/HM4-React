
import styles from './styles/Manager.module.css'

export default function Manager(){
    return(
        <div className={styles.avatarContainer}>
        <img src={ require('./img/avatar.png')} alt="manager to get in touch" className={styles.managerPhoto} />
         <div className={styles.managerName}>Joshua</div>
          </div>
    )
}