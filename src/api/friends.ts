import axios from 'axios';

type AxiosReturn = Promise<Record<string, Record<string, string | number>>>;

export const fetchFriends = async (): AxiosReturn =>
    await axios.get('http://localhost:1337');