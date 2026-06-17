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
        try {
            const params = new URLSearchParams();

            if (filters.search) {
                params.append('search', filters.search);
            }

            if (filters.city && filters.city !== 'Все города') {
                params.append('city', filters.city);
            }

            if (filters.skills?.length) {
                params.append('skills', filters.skills.join(','));
            }

            const response = await fetch(
                `https://kata-jobs.onrender.com/api/jobs?${params.toString()}`
            );

            if (!response.ok) {
                throw new Error('Сервис временно недоступен');
            }

            const data = await response.json();
            console.log('Пришло с сервера' + data.jobs)
            return data.jobs;
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            }

            return rejectWithValue('Неизвестная ошибка');
        }
    }
);