import ApiCreator from './api';
import {BASE_URL} from '../config';
const api = ApiCreator(BASE_URL);

export const getEntriesApi = email => api.get(`user?email=${email}`);

export const addNewEntriesApi = data =>
    api.post('entries', {
        body: JSON.stringify(data),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    });
