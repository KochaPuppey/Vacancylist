import { createAsyncThunk } from '@reduxjs/toolkit';
import type { VacancyType } from '../types/VacancyType';
import type { VacancyFilters } from '../types/VacancyFilters';

export const fetchVacancy = createAsyncThunk<
    VacancyType[],
    VacancyFilters,
    { rejectValue: string }
>(
    'listVacancy/fetchVacancy',
    async (filters, { rejectWithValue }) => {
        const params = new URLSearchParams()
        console.log(filters)
        try {
            if (filters.searchQuery) {
                params.set ('search', filters.searchQuery);
            }

            if (filters.cityQuery && filters.cityQuery !== 'Все города') {
                params.set ('city', filters.cityQuery);
            }

            if (filters.selectSkills?.length) {
                params.set ('skills', filters.selectSkills.join(','));
            }
            const response = await fetch(
                `https://kata-jobs.onrender.com/api/jobs?${params.toString()}&limit=10`
            );

            if (!response.ok) {
                throw new Error('Сервис временно недоступен');
            }

            const data = await response.json();
            return data.jobs;
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            }

            return rejectWithValue('Неизвестная ошибка');
        }
    }
);