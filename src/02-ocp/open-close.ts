import {NewsService} from './news-service';
import {PhotosService} from './photos-service';
import {HttpClient} from './http-client';

(async () => {

    const httpClient = new HttpClient();
    const newsService = new NewsService(httpClient);
    const photoService = new PhotosService(httpClient);

    const posts = await newsService.getLatestNews();
    const photos = await photoService.getGallery();
    
    
    console.log({posts, photos });
})();