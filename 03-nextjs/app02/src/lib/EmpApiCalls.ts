
import Emp from "@/models/Emp";
import axios, { AxiosResponse } from "axios";

const apiUrl = "/api/emps";

export const getAllEmps = ():Promise<AxiosResponse> => axios.get(apiUrl);

export const getEmpById = (id:number):Promise<AxiosResponse> => axios.get(`${apiUrl}/${id}`);

export const getEmpsByDeptId = (deptId:number):Promise<AxiosResponse> => axios.get(`${apiUrl}?deptId=${deptId}`);

export const deleteEmpById = (id:number) : Promise<AxiosResponse> => axios.delete(`${apiUrl}/${id}`);

export const addEmp = (emp:Emp) : Promise<AxiosResponse> => axios.post(apiUrl,emp);

export const updateEmp = (emp:Emp) : Promise<AxiosResponse> => axios.put(apiUrl,emp);
