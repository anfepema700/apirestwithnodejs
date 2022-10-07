# apirestwithnodejs
practice api rest with node js

Para instalar express y morgan
npm i express morgan
morgan permite ver la consola de peticiones
dev=info general
combined= tiempo o momento en que solicitaron la petición
para incluirlo
con el comando
app.use(morgan('combined')); =combined puede ser cambbiado según lo que requieras
combined
common
dev
short
tiny

nodemon
sirve para ejecutar el servidor con cada cambio que realizamos
para instalar se usa el comando npm i nodemon -D = d mayuscula para instalar las dependencias por encima y no de forma principal.
luego en package,json vamos a llamar la ruta cambiando la sección scripts con la linea
"dev":"nodemon src/index.js"
podemos cambiar src con la ruta que deseamos
luego para correr la acción por lotes usamos
npm run dev


