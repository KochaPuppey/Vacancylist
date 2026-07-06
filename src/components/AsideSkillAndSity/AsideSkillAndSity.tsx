import styles from './AsideSkillAndSity.module.css';
import InputMantine from '../../UI/InputMantine';
import ButtonMantine from '../../UI/ButtonMantine';
import SelectMantine from '../../UI/SelectMantine';
import PillsInputMantine from '../../UI/PillsInputMantine';
import { IconPlus } from '@tabler/icons-react';
import {type ChangeEvent, useState, type KeyboardEvent} from 'react';
import {useTypedDispatch} from '../../hooks/redux.ts';
import  {addSkill} from "../../reducers/VacancySlice.ts";

export default function AsideSkillAndSity() {
  const dispatch = useTypedDispatch();

  const [value, setValue] = useState('');
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  const handleClick = () => {
    const skill = value.trim();

    if (!skill) return;

    dispatch(addSkill(skill));
    setValue('');
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleClick();
    }
  };
  return (
    <aside className={styles.aside}>
      <div className={styles.listSkills}>
        <span className={styles.title}>Ключевые навыки</span>
        <div className={styles.addSkills}>
          <InputMantine
            placeholder={'Навык'}
            onChange={handleChange}
            value = {value}
            w={'200'}
            onKeyDown={handleKeyDown}
          />
          <ButtonMantine onClick={handleClick} color={'primary.3'} w={'34'} h={'30'} p={'0'}>
            <IconPlus size={28}/>
          </ButtonMantine>
        </div>
        <PillsInputMantine/>
      </div>
      <div className={styles.selectCity }>
        <SelectMantine />
      </div>
    </aside>
  );
}
