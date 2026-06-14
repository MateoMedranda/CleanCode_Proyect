
/**
 * VIOLACIÓN AL PRINCIPIO DE INVERSIÓN DE DEPENDENCIAS (DIP)
 * 
 * El servicio de publicaciones depende de una implementación concreta
 * en lugar de una abstracción.
*/

/**
 * VIOLACIÓN: Instanciación directa de una dependencia.
 * No podemos inyectar un proveedor diferente (como JsonDatabaseService)
 * sin modificar el constructor o este método. 
 * El nivel superior (PostService) depende del nivel inferior (LocalDatabaseService).
*/

/**
 * Refactor: Deberíamos definir una interfaz 'DatabaseService' que tenga el método 'getFakePosts()'.
 * Luego, tanto 'LocalDatabaseService' como 'JsonDatabaseService' podrían implementar esta interfaz.
 * El 'PostService' solo dependería de la abstracción (interfaz) y no de una implementación concreta.
 * Esto permitiría cambiar fácilmente la fuente de datos sin modificar el 'PostService', cumpliendo así el DIP.
*/
 