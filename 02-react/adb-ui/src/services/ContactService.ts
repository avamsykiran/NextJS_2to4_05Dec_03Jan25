import axios, { type AxiosResponse } from 'axios';
import type { Contact } from '../models/Contact';

const apiUrl:string = "http://localhost:9999/contacts";

export const getAll = ():Promise<AxiosResponse<Contact[]>> => {
    return axios.get<Contact[]>(apiUrl);
}

export const getById = (id:number):Promise<AxiosResponse<Contact>> => {
    return axios.get<Contact>(`${apiUrl}/${id}`);
}

export const deleteById = (id:number):Promise<AxiosResponse<void>> => {
    return axios.delete<void>(`${apiUrl}/${id}`);
}

export const add = (contact:Contact):Promise<AxiosResponse<Contact>> => {
    return axios.post<Contact>(apiUrl,contact);
}

export const update = (contact:Contact):Promise<AxiosResponse<Contact>> => {
    return axios.put<Contact>(`${apiUrl}/${contact.id}`,contact);
}