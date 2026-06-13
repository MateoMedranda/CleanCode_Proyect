
/**
 * VIOLACIÓN AL PRINCIPIO DE RESPONSABILIDAD ÚNICA (SRP)
 * 
 * Este archivo muestra una clase "Dios" o un componente que hace demasiadas cosas.
 * En el contexto de la Reserva Ecológica, el ProductBloc gestiona el inventario de la tienda
 * de souvenirs y, al mismo tiempo, se encarga de las notificaciones por correo.
 */

/**
 * Refactor: Para adherirse al SRP, deberíamos dividir esta clase en varias clases más pequeñas:
 * 
 * 1. ProductBloc: Solo se encarga de la lógica de negocio relacionada con los productos.
 * 2. ProductRepository: Se encarga de la persistencia de los productos (cargar/guardar).
 * 3. Mailer: Se encarga de enviar notificaciones (correo electrónico, SMS, etc.).
 * 
 * De esta manera, cada clase tiene una única responsabilidad y el código es más mantenible y escalable.
 */
