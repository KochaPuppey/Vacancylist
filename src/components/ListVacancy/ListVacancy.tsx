import styles from './ListVacancy.module.css'
import type {VacancyType} from '../../types/VacancyType.ts';
import {useNavigate} from 'react-router'
type ListVacancyProps = {
  vacancies: VacancyType [];
}
const spaceLabels = {
  office: 'ОФИС',
  remote: 'УДАЛЕНО',
  hybrid: 'ГИБРИД',
}

const spaceClasses = {
  office: styles.office,
  remote: styles.remote,
  hybrid: styles.hybrid,
};

export default function ListVacancy ({vacancies} : ListVacancyProps) {
  const navigate = useNavigate();
  return (
    <div className={styles.cardsContainer}>
      {vacancies.map((vacancy) => (
        <div className={styles.card} key={vacancy.id}>
          <h3 className={styles.title}>{vacancy.name}</h3>

          <div className={styles.info}>
        <span className={styles.salary}>
        {Number(vacancy.salary).toLocaleString('ru-RU')} ₽
        </span>

            <span className={styles.experience}>
          Опыт {vacancy.experience}
        </span>
          </div>

          <div className={styles.company}>{vacancy.company_name}</div>

          <div className={`${styles.space} ${spaceClasses[vacancy.space]}`}>
            {spaceLabels[vacancy.space]}
          </div>

          <div className={styles.city}>{vacancy.city}</div>

          <button className={styles.button} onClick = {() => navigate(`/vacancy/${vacancy.id}`)} >
            Смотреть вакансию
          </button>
        </div>
      ))}
    </div>
  )

}