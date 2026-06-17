import { Select } from '@mantine/core';
import styles from './SelectMantine.module.css'
import { useTypedDispatch, useTypedSelector } from '../hooks/redux.ts';
import { setCity } from '../reducers/VacancySlice';

export default function SelectMantine() {
  const dispatch = useTypedDispatch();

  const city = useTypedSelector(
      (state) => state.vacancyReducer.city
  );

  return (
      <Select
          data={['Все города', 'Москва', 'Санкт-Петербург']}
          value={city}
          onChange={(value) => {
            if (value) {
              dispatch(setCity(value));
            }
          }}
          w={250}
          classNames={{input: styles.input}}
      />
  );
}