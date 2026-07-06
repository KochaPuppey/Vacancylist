import styles from './Header.module.css'
import {UserCircleIcon} from '@phosphor-icons/react'
import imageHH from '../../assets/image 2.png'
export default function Header () {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <img src={imageHH} />
        <p>.FrontEnd</p>
      </div>
      <div className={styles.middle}>
          <div className={styles.vacancy}>
        <span>Вакансии FE</span>
          <span className={styles.dot}></span>
          </div>
        <span className={styles.aboutMe}> <UserCircleIcon size={22} />Обо мне</span>
      </div>
    </header>
  )
}