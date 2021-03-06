# Team05-front

[![Netlify Status](https://api.netlify.com/api/v1/badges/11bb36d4-99d3-4086-996f-2ac6c978bbcc/deploy-status)](https://app.netlify.com/sites/sharp-kare-6fe0e6/deploys)

Este repositorio contiene el frontend del proyecto de visualización de datos del museo de Historia Natural de la Universidad de los Andes.

En la carpeta `ui` se pueden encontrar tanto los mockups como los resultados del ejercicio de card sorting del proyecto.

Mediante el uso de este frontend desarrollado en React un usuario tiene la posibilidad de aprender acerca del museo de Historia Natural de los Andes y apreciar algunos de los especímenes encontrados por los estudiantes de la facultad de biología.

Al correr la herramienta de accesibilidad aXe se observan errores de contraste entre texto y fondo, sin embargo esto se deba a utilizar gradientes e imagenes. En cada caso en particular se evaluó que ni las gradientes li la imagen causaban problemas visuales dado el alto contraste entre texto y fondo.

Además, este proyecto esta corriendo en los servidores de Netlify y está disponible en [bioandes.cpotdevin.com](https://bioandes.cpotdevin.com).

El uso de esta página se puede ver en [YouTube](https://youtu.be/NaL9INgXuEs).

Para poder correr el proyecto es necesario:

### 1. abrir una terminal
### 2. clonar el proyecto
~~~
git clone https://github.com/isis3710-uniandes/Team05-front.git
~~~
### 3. ir a la ubicación de la carpeta raiz del proyecto
~~~
cd Team05-front/
~~~
### 4. instalar los modulos npm requeridos
~~~
npm install
~~~
### 5. correr el servidor
~~~
npm start
~~~
#### P.D. para tener una conección al backend de no es necesario correr el backend puesto que este ya se encuentra corriendo en HEROKU. Este puede tardar unos segundos en responder por primera vez a las peticiones.