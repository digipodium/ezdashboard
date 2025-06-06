import { AxiosResponse } from 'axios';
declare const useAPI: (url: string) => {
    saveData: <T>(data: T) => Promise<AxiosResponse<any>>;
    readAllData: () => Promise<AxiosResponse<any>>;
    readById: <T>(id: string) => Promise<AxiosResponse<T>>;
    updateData: <T>(id: string, data: T) => Promise<AxiosResponse<any>>;
    deleteData: (id: string) => Promise<AxiosResponse<any>>;
};
export default useAPI;
