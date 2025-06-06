import axios, { AxiosResponse } from 'axios'; // Import AxiosResponse for better type hints

const axiosClient = axios.create();

// Use a lowercase 'string' for primitive types
const useAPI = (url: string) => { // CHANGED: 'String' to 'string'

    // Setting baseURL inside the hook like this means it will be reset on every render
    // if the 'url' prop changes, or even if the component using the hook re-renders
    // and 'url' is stable. This might be intentional if 'url' can change frequently,
    // but for a typical base URL, it's often set once or derived from environment variables.
    // Consider if you truly want it to be set on every hook call.
    axiosClient.defaults.baseURL = url;
    axiosClient.defaults.headers.post['Content-Type'] = 'application/json';

    // Type the 'data' parameter more specifically if possible, instead of just 'Object'
    const saveData = <T,>(data: T): Promise<AxiosResponse<any>> => { // CHANGED: 'Object' to generic 'T', added return type
        return axiosClient.post('/add', data);
    }

    const readAllData = (): Promise<AxiosResponse<any>> => { // Added return type
        return axiosClient.get('/getall');
    }

    const readById = <T,>(id: string): Promise<AxiosResponse<T>> => { // CHANGED: 'String' to 'string', added generic 'T' for response type
        return axiosClient.get(`/get/${id}`);
    }

    const updateData = <T,>(id: string, data: T): Promise<AxiosResponse<any>> => { // CHANGED: 'String' to 'string', 'Object' to generic 'T'
        return axiosClient.put(`/update/${id}`, data);
    }

    const deleteData = (id: string): Promise<AxiosResponse<any>> => { // CHANGED: 'String' to 'string'
        return axiosClient.delete(`/delete/${id}`);
    }

    return { saveData, readAllData, readById, updateData, deleteData };
}

export default useAPI;