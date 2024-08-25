# RUCAVI Web

## Cómo deployar

1. `npm install -g @azure/static-web-apps-cli`
1. `swa build`
1. `swa deploy --env production`

El tercer comando promptea autenticación en el navegador, una vez autenticado se hace el deploy.

Si se recibe un error como este:

**_ERROR. Scopes: https://management.azure.com//.default. Error message: null. null._**

1. Ir al recurso en el portal de Azure
1. ![Buscar el token de implementación](image.png)
1. ![Copiar el token de implementación](image-1.png)
1. `swa deploy --env production -d <token>`
