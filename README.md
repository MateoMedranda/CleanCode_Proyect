# BITACORA

---

## Responsabilidad Única (SRP)

Refactor: En primer lugar se decidió realizar las clases en distintos archivos .ts, se delegó las responsabilidades a cada clase, siguiendo el principio SRP, haciendo que cada clase tenga una responsabilidad única y una única razón para cambiar.

**¿Qué pasaría si mañana decidimos notificar por WhatsApp en lugar de Email? ¿Cuántas clases tendrías que modificar ahora vs. antes?**

Si mañana quisieramos cambiar el proveedor, lo único necesario sería modificar una clase con el nuevo código, esta clase sería `Mailer`, mientras que antes se debía probablemente modificar toda la lógica de la clase `ProductBloc` y en un código implementado probablemente todas las clases que dependan de `ProductBloc`.

## Abierto/Cerrado (OCP)

Refactor: Se decidió separar por archivos .ts y crear una interfaz `HttpClient`, la cual tendrá el uso de `axios` o `fetch` para realizar las peticiones http, de esta forma, se hace una inyección de dependencias, permitiendo cambiar en cualquier momento el recurso para realizar peticiones http o cambiar las uris. de esta forma queda abierto a extensión y cerrado a modificación.

**Si se detecta una vulnerabilidad en axios y debes migrar a fetch en minutos, ¿qué tan rápido lo harías con este diseño?**

Con este diseño el cambio se haría instantaneo, cambiando solo la línea que usa `axios` por `fetch`, por lo que es ultra eficaz y evita tener que corregir múltiples archivos.

## Sustitución de Liskov (LSP)

Refactor: Se optó por crear una clase abstracta `Vehicle` para que cada uno de los autos implemente a su manera los métodos, de esta forma solucionamos la violación al principio OCP y LSP.

**Si la reserva adquiere un "Dron", ¿podría tu manager procesarlo sin añadir nuevos if/else?**

Sí podría manejarlo, se podría agregar sin problemas e implementar a su forma los métodos, sin embargo deberíamos hacer que la clase sea de un nombre genérico o crear otra clase abstracta para los drones.

## Segregación de Interfaz (ISP)

Refactor: Para la segregación de interfaces, primero se tenía el problema de que se forzaba a todos a implementar todos los métodos incluso si no se usaban, lo que dejaba métodos declarados pero con código basura, por eso se optó por separar y crear nuevas interfaces para que cada clase implemente lo que necesite.

**¿Cómo evita tu diseño que un "Pingüino" tenga un método fly() que lance errores?**

El diseño esta hecho para que una clase pingüino implemente lo que necesite, en este caso implementa `Bird`, `RunningBird` y `SwimmingBird`, de esta forma no tiene el método `fly()`, permitiendo su ejecución sin errores.

## Inversión de Dependencias (DIP)

Refactor: Pra la inversión de dependencias es necesaria una interfaz la cual será implementada por las clases de bajo nivel, pero será utilizada como dependencia de la clase de alto nivel, de esta forma se puede implementar diferentes BDD sin tener que modificar muchas clases.

**¿Qué tan fácil es inyectar un "MockDatabase" para pruebas unitarias ahora?**

Ahora insertar un `MockDatabase` será solo crear una nueva clase que implemente de la interfaz, y al momento de realizar una prueba unitaria, solo necesita la inyección de dependencias, sin tener que alterar nada del código.