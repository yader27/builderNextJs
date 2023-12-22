

#CONFIGURACION YADER
# # Usa una imagen de Node.js
# FROM node:16.14.0

## CONFIGURACION CARLOS
FROM node:16.14.0
WORKDIR /app/app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]

##########################################################################################
# -- PROCEDIMIENTO PARA PROBAR LA IMAGEN EQUIPO LOCAL
##########################################################################################
# 1. Dentro del directorio del proyecto se crea la imagen
# docker build -t yes_page_web_next_image .
# 2. Correr en una sola linea
# docker-compose rm -s -v yes-page-web-nextjs; docker rmi yes_page_web_next_image  -f; docker build -t yes_page_web_next_image .; docker images; docker-compose build yes-page-web-nextjs; docker-compose up -d yes-page-web-nextjs; docker-compose logs -f yes-page-web-nextjs;

##########################################################################################
# -- PROCEDIMIENTO PARA CREAR IMAGEN PARA EL AMBIENTE DE DESARROLLO
##########################################################################################

# VERIFICAR QUE LA IMAGEN ESTE CREADA Y ELIMINARLA ANTES DE GENERARLA
# 1. Verificar si la imagen yes_page_web_next_image existe en el servidor
#  docker images 
# 2. INGRESAR Eliminar los contenedores en caso de estar disponibles (sin los volumes)
# cd /opt/ridivi/server_containers/ridivi
# docker-compose rm -s -v yes-page-web-nextjs;
# 3. En caso de tenerla creada se debe eliminar  -f para forzar la eliminacion de los contenedores que tengan asociados
# docker rmi yes_page_web_next_image  -f

# 1. PARA GENERAR LA IMAGEN DEBE USAR (debe estar en el directorio y haber realizado el pull al commit requerido)
# cd /opt/ridivi/yes_page_nextjs 
# docker build -t yes_page_web_next_image .
# 2. Luego revisar que la imagen que haya creado con 
# docker images
# 3. Hacer un build en la carpeta de los contenedores 
## cd /opt/ridivi/server_containers/ridivi
# docker-compose build yes-page-web-nextjs 
# 4. Levantar los contenedores para validar que no hayan errores
# docker-compose up -d yes-page-web-nextjs
# 5. Abre los logs del contenedor para validar que no haya errores
# docker-compose logs -f yes-page-web-nextjs

# Ejecutarlo en una sola Linea despues de haber realizado un git pull
# docker images; cd /opt/ridivi/server_containers/ridivi; docker-compose rm -s -v yes-page-web-nextjs; docker rmi yes_page_web_next_image  -f; cd /opt/ridivi/yes_page_nextjs;docker build -t yes_page_web_next_image .;docker images; cd /opt/ridivi/server_containers/ridivi; docker-compose build yes-page-web-nextjs; docker-compose up -d yes-page-web-nextjs; docker-compose logs -f yes-page-web-nextjs;