# API AUTOMATION
## Ejecución de pruebas

    npm test

## Casos de prueba
|Título| Creación de una publicación - caso exitoso|
|--|--|
| Descripción | Se creará una publicación acerca de un producto con método POST |
| Etiqueta | posts (keyword)|
| Tipo de Prueba | Smoke |
| Tecnología | Web |
| Pre-Condiciones | El usuario debe estar registrado |


|Pasos|  |  |
|--|--|--|
| **Descripción**  | **Datos de Prueba** | **Resultado Esperado** |
|Se realiza llamada usando método POST a la URL: https://jsonplaceholder.typicode.com/posts| title:  "test", body:  "bar", userId:  1 |1- Status code sea 201. 							2- validación de esquema ok|