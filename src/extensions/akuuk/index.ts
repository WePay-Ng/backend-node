import { environment } from '@/config/env';
import axios from 'axios';

const acc = btoa(`${environment.akuuk?.secret}:${environment.akuuk?.key}`);
const Client = axios.create({
  baseURL: environment.akuuk?.url,
  headers: {
    Authorization: `Basic ${acc}`,
  },
});

export class Akuuk {}
