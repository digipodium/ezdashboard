import axios from 'axios';

const axiosClient = axios.create();

const useAPI = (url) => {

    axiosClient.defaults.baseURL = url;
    axiosClient.defaults.headers.post['Content-Type'] = 'application/json';

    const saveData = (data) => {
        return axiosClient.post('/add', data);
    }

    const readAllData = () => {
        return axiosClient.get('/getall');
    }

    const readById = (id) => {
        return axiosClient.get(`/get/${id}`);
    }

    const updateData = (id, data) => {
        return axiosClient.put(`/update/${id}`, data);
    }

    const deleteData = (id) => {
        return axiosClient.delete(`/delete/${id}`);
    }

  return {saveData, readAllData, readById, updateData, deleteData};
}


export default useAPI;