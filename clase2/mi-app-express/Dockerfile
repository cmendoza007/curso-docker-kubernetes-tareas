Usa una imagen base de Node.js ligera y segura
FROM node:20-alpine

# Define el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia los archivos de configuración
COPY package*.json ./

# Instala las dependencias definidas en package.json
RUN npm install --only=production

# Copia el código de la aplicación
COPY . .

# El puerto que la aplicación Express usa internamente por defecto (3000)
# Esto es principalmente para documentación.
EXPOSE 3000

# Comando que se ejecuta al iniciar el contenedor
# La aplicación usará el puerto definido por la variable de entorno 'PORT'
CMD [ "npm", "start" ]
