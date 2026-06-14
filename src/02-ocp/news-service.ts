import {HttpClient} from './http-client';

export class NewsService {
    constructor(private httpClient: HttpClient) {}

    async getLatestNews() {
        console.log('Obteniendo noticias de la reserva biológica...');
        const resp = await this.httpClient.get('https://jsonplaceholder.typicode.com/posts');
        return resp;
    }
}
