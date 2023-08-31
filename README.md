# Crudtodo (ngrx store and effects)


![imagen ngrx](./readme/operadores%20flattening.png)


# EFFECTS
En el contexto de Angular y el estado de la aplicación gestionado por NgRx, los "effects" son una parte importante de la arquitectura de gestión de estado. Los effects se utilizan para manejar efectos secundarios en una aplicación Angular que están relacionados con las acciones que se despachan en el store de NgRx. Los efectos son útiles para gestionar tareas asíncronas, como peticiones HTTP, manipulación de datos asíncrona y otras operaciones que no deben llevarse a cabo directamente en los componentes.

Los efectos se definen como clases en Angular que escuchan las acciones despachadas y reaccionan a ellas tomando acciones asíncronas. Cada efecto está compuesto por tres partes principales:

    Escuchadores de Acciones: Se define una acción específica o un conjunto de acciones a las que el efecto estará atento. Cuando una de estas acciones es despachada en el store, el efecto se activa.

    Lógica de Efecto: Aquí es donde se realiza el trabajo asíncrono o con efectos secundarios. Puede incluir llamadas HTTP, interacciones con servicios, manejo de bases de datos u otras operaciones asíncronas.

    Despacho de Acciones Resultantes: Una vez que se ha completado la lógica del efecto, se puede despachar una o varias acciones adicionales en el store. Estas acciones resultantes pueden ser utilizadas para actualizar el estado, notificar sobre el éxito o el fracaso de una operación, o realizar otras acciones necesarias.

Los efectos ayudan a mantener una separación clara entre la lógica de la aplicación y las operaciones asíncronas, lo que mejora la modularidad, la legibilidad y el mantenimiento del código. También permiten centralizar la gestión de efectos secundarios en un lugar, lo que facilita el seguimiento y la depuración de posibles problemas.

En resumen, los efectos en NgRx son utilizados para manejar operaciones asíncronas y efectos secundarios en una aplicación Angular, manteniendo la lógica de la aplicación limpia y modular. 





# OPERADORES 
## ofType
La función ofType se utiliza comúnmente para escuchar y reaccionar solo a ciertos tipos de acciones en los efectos de NgRx. Por ejemplo, si tienes varios tipos de acciones en tu aplicación y deseas que un efecto solo reaccione a una acción específica, puedes utilizar ofType para filtrar las acciones.

## exhaustMap
exhaustMap es un operador de RxJS que se utiliza para manejar secuencias de observables en un orden secuencial y asegurarse de que solo una secuencia se procese a la vez. Cuando se utiliza con NgRx en combinación con efectos, exhaustMap es útil para asegurarse de que una nueva acción no inicie una nueva solicitud o proceso hasta que la acción anterior se haya completado

## concatMap
concatMap es un operador de RxJS que se utiliza para manejar secuencias de observables en un orden secuencial, de manera similar a exhaustMap. Sin embargo, a diferencia de exhaustMap, concatMap no descarta las solicitudes entrantes mientras otra secuencia está en proceso. En su lugar, encola las solicitudes entrantes y las procesa una por una en el orden en que se emitieron

## mergeMap
procesa todo en paralelo

## switchMap
da preferencia a la notificacion mas reciente cancelando el observable anterior si lo hubiera.