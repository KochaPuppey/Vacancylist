import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { fetchVacancy } from './VacancyThunk';
import type { VacancyType } from '../types/VacancyType';

interface VacancyState {
    listVacancy: VacancyType[];
    isLoading: boolean;
    error: string | null;

    search: string;
    city: string;
    selectSkills: string[];
}

const initialState: VacancyState = {
    listVacancy: [],
    isLoading: false,
    error: null,

    search: '',
    city: 'Все города',
    selectSkills: ['JavaScript', 'React', 'Redux', 'Python'],
};

export const VacancySlice = createSlice({
    name: 'listVacancy',
    initialState,

    reducers: {
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },

        setCity: (state, action: PayloadAction<string>) => {
            state.city = action.payload;
        },

        addSkill: (state, action: PayloadAction<string>) => {
            const skill = action.payload.trim();

            if (skill && !state.selectSkills.includes(skill)) {
                state.selectSkills.push(skill);
            }
        },

        removeSkill: (state, action: PayloadAction<string>) => {
            state.selectSkills = state.selectSkills.filter(
                (skill) => skill !== action.payload
            );
        },

        setSkills: (state, action: PayloadAction<string[]>) => {
            state.selectSkills = action.payload;
        }

    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchVacancy.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })

            .addCase(fetchVacancy.fulfilled, (state, action) => {
                state.isLoading = false;
                state.listVacancy = action.payload;
            })

            .addCase(fetchVacancy.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload ?? 'Неизвестная ошибка';
            });
    },
});

export const {
    setSearch,
    setCity,
    addSkill,
    removeSkill,
    setSkills,
} = VacancySlice.actions;

export default VacancySlice.reducer;