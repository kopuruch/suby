import { AxiosRequestConfig } from "axios";
import qs from 'qs';


const paramsSerializer: AxiosRequestConfig['paramsSerializer'] = (params) => qs.stringify(params, {
  skipNulls: true,
  arrayFormat: 'brackets',
});

export default paramsSerializer;
