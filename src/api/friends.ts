import axios from 'axios';

export const fetchFriends = async () => await axios.get('http://localhost:1337');