import axios from 'axios';

// הגדרת כתובת ברירת מחדל
const apiClient = axios.create({
    baseURL: 'http://localhost:5016'
});

apiClient.interceptors.response.use(
    response => {
        // אם הבקשה הצליחה, מחזירים את ה-response
        return response;
    },
    error => {
        // כאן תופסים את השגיאות
        console.error('Error response:', error.response ? error.response.data : error.message);
        return Promise.reject(error);
    }
);


export default apiClient;
