import { useEffect, useState } from 'react';
import {useParams} from 'react-router'
import type { VacancyType } from '../../types/VacancyType';
import styles from "./VacancyWithDescriptionPage.module.css";

type VacancyWithDescriptionType = VacancyType & {
    description: string;
    about_company: string;
};

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

export default function VacancyWithDescriptionPage() {
    const [vacancy, setVacancy] = useState<VacancyWithDescriptionType | null>(null);
    const {id} = useParams();
    useEffect(() => {
        async function getData() {
            try {
                const response = await fetch(
                    `https://kata-jobs.onrender.com/api/jobs/${id}`
                );

                if (!response.ok) {
                    throw new Error('Ошибка при запросе на сервер');
                }

                const data = await response.json();
                console.log(data.job)
                setVacancy(data.job);
            } catch (error) {
                if (error instanceof Error) {
                    alert('Ошибка: ' + error.message);
                } else {
                    alert('Неизвестная ошибка');
                }
            }
        }

        getData();
    }, [id]);

    return (
        <>
            {vacancy && (
                <div className={styles.cardsContainer}>
                    <div className={styles.card}>
                        <h3 className={styles.title}>{vacancy.name}</h3>

                        <div className={styles.info}>
                        <span className={styles.salary}>
                            {Number(vacancy.salary).toLocaleString('ru-RU')} ₽
                        </span>

                            <span className={styles.experience}>
                            Опыт {vacancy.experience}
                        </span>
                        </div>

                        <div className={styles.company}>
                            {vacancy.company_name}
                        </div>

                        <div className={`${styles.space} ${spaceClasses[vacancy.space]}`}>
                            {spaceLabels[vacancy.space]}
                        </div>


                        <div className={styles.city}>
                            {vacancy.city}
                        </div>

                    </div>

                    <div className={styles.card}>
                    <h3>Компания</h3>
                    <div>{vacancy.about_company}</div>

                    <h3>О вакансии</h3>
                    <div>{vacancy.description}</div>
                    </div>
                </div>
            )}
        </>
    );
}