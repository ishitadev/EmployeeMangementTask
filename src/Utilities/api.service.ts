import axios, { AxiosResponse } from "axios";
const rootUrl = "https://localhost:7134";
export class ApiService {

    public static async getData(url: string): Promise<AxiosResponse> {
       
        const response: AxiosResponse = await axios.get(`${rootUrl}/${url}`)
        return response;
    }

    public static async postData(url: string, data?: any): Promise<AxiosResponse> {
        
        const response: AxiosResponse = await axios.post(`${rootUrl}/${url}`, data)
        return response;
    }

    public static async patchData(url: string, data: any): Promise<AxiosResponse> {
        
        const response: AxiosResponse = await axios.patch(`${rootUrl}/${url}`, data)
        return response;
    }
    
    public static async deleteData(url: string): Promise<AxiosResponse> {
      
        const response: AxiosResponse = await axios.delete(`${rootUrl}/${url}`)
        return response;
    }

}