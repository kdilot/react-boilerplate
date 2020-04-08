import axios from 'axios';
import { API_URL } from './global';

export const test = async () => {
    return await axios
        .get(`${API_URL}/test`)
        .then((res) => {
            return res.data;
        })
        .catch((res) => {
            return { data: [] };
        });
};
