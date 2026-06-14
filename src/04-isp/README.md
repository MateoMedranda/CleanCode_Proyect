
/**
 * VIOLACIÓN AL PRINCIPIO DE SEGREGACIÓN DE INTERFAZ (ISP)
 * 
 * El catálogo de fauna define una interfaz "gorda" que obliga a las aves 
 * a implementar métodos que no les corresponden según su naturaleza.
 */

 /**
 * VIOLACIÓN FLAGRANTE: El Avestruz es un ave, pero NO VUELA.
 * La interfaz Bird le obliga a implementar fly(), causando una excepción en tiempo de ejecución
 * o un comportamiento inesperado.
 */

/**
 * Refactor: Deberíamos tener interfaces más específicas, como "FlyingBird", "SwimmingBird", etc., y cada clase implementaría solo lo que le corresponde.
 * Por ejemplo, el Avestruz implementaría "WalkingBird" en lugar de "FlyingBird", evitando así la violación de ISP.
 * Además, podríamos usar clases abstractas o interfaces para definir comportamientos comunes sin forzar a todas las aves a implementar métodos irrelevantes.
 */