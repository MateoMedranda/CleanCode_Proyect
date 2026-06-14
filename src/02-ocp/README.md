/**
 * VIOLACIÓN AL PRINCIPIO DE ABIERTO/CERRADO (OCP)
 * 
 * En este módulo de noticias de la reserva, el servicio depende directamente
 * de la librería externa 'axios'. Si quisiéramos usar 'fetch' u otra librería,
 * tendríamos que modificar este código interno.
 */

/**
 * Refactor: Para adherirse al OCP, deberíamos definir una interfaz de cliente HTTP
 * y luego implementar esa interfaz con 'axios' o 'fetch'. De esta manera, el servicio
 * de noticias estaría abierto para extensión (podemos agregar nuevos clientes HTTP)
 * pero cerrado para modificación (no necesitamos cambiar el código del servicio).
 */