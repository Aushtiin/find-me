import axios from 'axios';

const apiUrl = "http://localhost:4040/api/users"

export const signUpService = async (payload) => {
    const res = await axios.post(`${apiUrl}/signup`, payload)
}

export const signInService = async (payload) => {
    const res = await axios.post(`${apiUrl}/login`, payload)
}