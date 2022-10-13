import axios, { Axios } from 'axios';
import { config } from '../config';

export const api: Axios = axios.create({
  baseURL: config.API
})