import {HttpClient} from './http-client';
    
export class PhotosService {
    constructor(private httpClient: HttpClient) {}

    async getGallery() {
        console.log('Obteniendo fotos de la galería...');
        const resp = await this.httpClient.get('https://jsonplaceholder.typicode.com/photos');
        return resp;
    }
}