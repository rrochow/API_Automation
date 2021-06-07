# API AUTOMATION

## Contexto de la web
La web tiene como enfoque, el poder comentar las ventajas y desventajas de los productos con opiniones de usuarios que han comprado dichos productos (red social de opiniones de productos).

## Ejecución de pruebas

    npm test

## Caso de prueba 1
|Título| Creación de una publicación - caso exitoso|
|--|--|
| Descripción | Se creará una publicación acerca de un producto con método POST |
| Etiqueta | posts |
| Tipo de Prueba | Smoke |
| Tecnología | Web |
| Pre-Condiciones | El usuario debe estar registrado |

|Pasos|  |  |
|--|--|--|
| **Descripción**  | **Datos de Prueba** | **Resultado Esperado** |
|Se realiza llamada usando método POST a la URL: https://jsonplaceholder.typicode.com/posts| title: "Audífonos Sony", body: "Tienen una coloración mínima, son cómodos y de material duradero", userId: 1 |1- Status code sea 201. 							2- validación de parámetro id en el body|

## Caso de prueba 2
|Título| Obtener todas las publicaciones - caso exitoso|
|--|--|
| Descripción | Se obtendrá todas las publicaciones con método GET |
| Etiqueta | gets |
| Tipo de Prueba | Smoke |
| Tecnología | Web |
| Pre-Condiciones | El usuario debe estar registrado, deben existir publicaciones |

|Pasos|  |  |
|--|--|--|
| **Descripción**  | **Datos de Prueba** | **Resultado Esperado** |
|Se realiza llamada usando método GET a la URL: https://jsonplaceholder.typicode.com/posts| No tiene |1- Status code sea 200. 							2- El body de respuesta debe ser un arreglo|

## Caso de prueba 3
|Título| Obtener las publicaciones de un usuario- caso exitoso|
|--|--|
| Descripción | Se obtendrá todas las publicaciones perteneciente a un usuario con método GET |
| Etiqueta | gets |
| Tipo de Prueba | Smoke |
| Tecnología | Web |
| Pre-Condiciones | El usuario debe estar registrado, deben existir publicaciones |

|Pasos|  |  |
|--|--|--|
| **Descripción**  | **Datos de Prueba** | **Resultado Esperado** |
|Se realiza llamada usando método GET a la URL: https://jsonplaceholder.typicode.com/posts/2/comments| No tiene |1- Status code sea 200. 							2- El usuario posee 5 publicaciones|

## Caso de prueba 4
|Título| Modificar una publicación- caso exitoso|
|--|--|
| Descripción | Se modificará una publicación perteneciente a un usuario con método PUT |
| Etiqueta | puts |
| Tipo de Prueba | Smoke |
| Tecnología | Web |
| Pre-Condiciones | El usuario debe estar registrado, el usuario debe tener al menos una publicación |

|Pasos|  |  |
|--|--|--|
| **Descripción**  | **Datos de Prueba** | **Resultado Esperado** |
|Se realiza llamada usando método PUT a la URL: https://jsonplaceholder.typicode.com/posts/2| id: 2, title: "Samsung s8", body: 'Resistente, buena cámara, mala bateria', userId: idUsuario  |1- Status code sea 200. 							2- Comprobar que se actualizó el campo title|

## Caso de prueba 5
|Título| Eliminar una publicación- caso exitoso|
|--|--|
| Descripción | Se eliminará las publicaciones perteneciente a un usuario con método DELETE |
| Etiqueta | deletes |
| Tipo de Prueba | Smoke |
| Tecnología | Web |
| Pre-Condiciones | El usuario debe estar registrado, el usuario debe tener al menos una publicación |

|Pasos|  |  |
|--|--|--|
| **Descripción**  | **Datos de Prueba** | **Resultado Esperado** |
|Se realiza llamada usando método DELETE a la URL: https://jsonplaceholder.typicode.com/posts/2| No tiene  |1- Status code sea 200. 							2- El body de respuesta debe ser un objeto|