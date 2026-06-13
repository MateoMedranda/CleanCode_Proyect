import axios from 'axios';

export class HttpClient{
    async get(url: string) {
        console.log(`Realizando petición GET a ${url}...`);
        const resp = await axios.get(url);
        return resp.data;
    }
}