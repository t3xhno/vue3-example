import axios from 'axios';

export const fetchFriends = async (): Promise<Record<string, unknown>> => await axios.get('http://localhost:1337');