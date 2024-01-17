import axios, { AxiosResponse } from "axios";
import { config } from "../config/configs";

export class ApiService {
  public static async getData(url: string): Promise<AxiosResponse> {
    const response: AxiosResponse = await axios.get(
      `${config.root_url}/${url}`
    );
    return response;
  }

  public static async postData(
    url: string,
    data?: any
  ): Promise<AxiosResponse> {
    const response: AxiosResponse = await axios.post(
      `${config.root_url}/${url}`,
      data
    );
    return response;
  }

  public static async patchData(
    url: string,
    data: any
  ): Promise<AxiosResponse> {
    const response: AxiosResponse = await axios.patch(
      `${config.root_url}/${url}`,
      data
    );
    return response;
  }

  public static async deleteData(url: string): Promise<AxiosResponse> {
    const response: AxiosResponse = await axios.delete(
      `${config.root_url}/${url}`
    );
    return response;
  }
}
