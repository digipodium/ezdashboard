import axios from 'axios';

const axiosClient = axios.create();

const useAPI = (url: String) => {

    axiosClient.defaults.baseURL = url;
    axiosClient.defaults.headers.post['Content-Type'] = 'application/json';

    const saveData = (data: Object) => {
        return axiosClient.post('/add', data);
    }

    const readAllData = () => {
        return axiosClient.get('/getall');
    }

    const readById = (id: String) => {
        return axiosClient.get(`/get/${id}`);
    }

    const updateData = (id: String, data: Object) => {
        return axiosClient.put(`/update/${id}`, data);
    }

    const deleteData = (id: String) => {
        return axiosClient.delete(`/delete/${id}`);
    }

    return { saveData, readAllData, readById, updateData, deleteData };
}


export default useAPI;