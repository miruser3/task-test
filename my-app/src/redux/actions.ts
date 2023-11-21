import axios, { AxiosResponse } from 'axios';
import { Dispatch } from 'redux';

interface User {
    id: number;
    name: string;

}

export const setUsers = (users: User[]) => ({
    type: 'SET_USERS',
    payload: users,
});

export const fetchH = async (dispatch: Dispatch) => {
    try {
        const response: AxiosResponse<User[]> = await axios.get('https://jsonplaceholder.typicode.com/users');
        const { data: users } = response;
        dispatch(setUsers(users));
    } catch (error) {
        console.error('Error fetching users:', error);

    }
};

