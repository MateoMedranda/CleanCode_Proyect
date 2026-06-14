import { DatabaseService } from './database-service';
import { LocalDatabaseService } from '../data/local-database';
import { JsonDatabaseService } from '../data/local-database';

(() => {
    class PostService {

        constructor(private databaseProvider: DatabaseService) {}

        private posts: any[] = [];

        async getPosts() {

            this.posts = await this.databaseProvider.getFakePosts();

            return this.posts;
        }

    }

    console.log('Obteniendo posts desde JSON:');
    const postService = new PostService(new JsonDatabaseService());
    const posts = postService.getPosts();
    posts.then(console.log);

    console.log('Obteniendo posts desde Local Database:');
    const postService2 = new PostService(new LocalDatabaseService());
    const posts2 = postService2.getPosts();
    posts2.then(console.log);
})();