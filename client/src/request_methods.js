import axios from 'axios'

const Base_URL = "http://localhost:3001/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMTY4Y2Q5NjRmZDRiZDUzNTJhMWE5OSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NjU4NDAyNSwiZXhwIjoxNjQ2NjAyMDI1fQ.-DmMgHZ2_kHF--GNujLwHyy8_CI_e5mYrcZDM2gRkeU";

export const publicRequest = axios.create({
    baseURL: Base_URL,
})

export const userRequest = axios.create({
    baseURL: Base_URL,
    header: { token: `Bearer ${TOKEN}` }
})
// export const publicRequest = axios.create({
//     baseURL: Base_URL,
// })
// export const publicRequest = axios.create({
//     baseURL: Base_URL,
// })