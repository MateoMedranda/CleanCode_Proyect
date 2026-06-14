
/**
 * VIOLACIÓN AL PRINCIPIO DE SUSTITUCIÓN DE LISKOV (LSP)
 * 
 * En la flota de la reserva, intentamos manejar diversos vehículos.
 * Sin embargo, el cliente se ve obligado a conocer los detalles internos
 * de cada marca para poder operar, rompiendo la transparencia de la abstracción.
 */

/**
 * VIOLACIÓN: Este método rompe LSP y OCP. 
 * Si agregamos una nueva marca (ej. Volvo), debemos venir aquí a agregar otro 'if' o 'case'.
 * Además, no podemos tratar a todos los vehículos por igual.
*/

/**
 * Refactor: Podríamos definir una interfaz común 'Vehicle' con un método 'getDetails()' que cada clase implementa a su manera.
 * Así, el VehicleManager solo llamaría a 'vehicle.getDetails()' sin importar la marca, cumpliendo LSP y OCP.
*/
