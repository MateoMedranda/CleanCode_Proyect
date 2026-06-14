import { ProductRepository } from "./product-repository";
import { Mailer } from "./mailer";
import { Product } from "./product";

(() => {
   
    class ProductBloc {
        private productRepository: ProductRepository;
        private mailer: Mailer;
        
        constructor() {
            this.productRepository = new ProductRepository();
            this.mailer = new Mailer();
        }

        // Responsabilidad 1: Carga de productos (Lógica de Negocio/Persistencia)
        loadProduct(id: number) {
            return this.productRepository.loadProduct(id);
        }

        // Responsabilidad 2: Guardado de productos (Lógica de Persistencia)
        saveProduct(product: Product) {
            this.productRepository.saveProduct(product);
        }

        // Responsabilidad 3: Notificación a clientes (Lógica de Comunicación)
        notifyClients() {
            this.mailer.notifyCustomer("mdmedranda1@espe.edu.ec","¡Nuevo producto disponible!");
        }
    }

    // Ejecución de ejemplo
    const productBloc = new ProductBloc();
    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'Recuerdo árbol de la amistad' });
    productBloc.notifyClients();
    
})();

