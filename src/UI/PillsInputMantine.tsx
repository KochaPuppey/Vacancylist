import { PillsInput, Pill } from '@mantine/core';
import { useTypedSelector, useTypedDispatch } from '../hooks/redux';
import { removeSkill } from '../reducers/VacancySlice';

export default function PillsInputMantine() {
    const dispatch = useTypedDispatch();

    const selectSkills = useTypedSelector(
        (state) => state.vacancyReducer.selectSkills
    );

    return (
        <PillsInput w="200" mt="12">
            <Pill.Group>
                {selectSkills.map((skill) => (
                    <Pill
                        key={skill}
                        withRemoveButton
                        onRemove={() => dispatch(removeSkill(skill))}
                    >
                        {skill}
                    </Pill>
                ))}
            </Pill.Group>
        </PillsInput>
    );
}