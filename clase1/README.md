## 1. Comandos Ejecutados
A continuación, se listan todos los comandos usados para desplegar, verificar y limpiar el contenedor de Apache.
Tarea	Comando
Ejecutar Container	docker run -d --name mi-apache -p 8081:80 httpd
Verificar Ejecución	docker ps
Consultar Logs	docker logs mi-apache
Detener Container	docker stop mi-apache
Eliminar Container	docker rm mi-apache
Verificar Limpieza	docker ps -a

## 2. Explicación Breve del docker run
Comando: docker run -d --name mi-apache -p 8081:80 httpd
•	docker run: Comando principal para ejecutar un contenedor a partir de una imagen.
•	-d (Detached): Ejecuta el contenedor en segundo plano (modo daemon), liberando la terminal.
•	--name mi-apache: Asigna el nombre mi-apache al contenedor, facilitando su identificación y gestión.
•	-p 8081:80 (Publish): Publica el puerto 80 del contenedor (donde escucha Apache) al puerto 8081 del host (tu máquina local). Esto permite acceder al servidor web mediante http://localhost:8081.
•	httpd: Es el nombre de la imagen a utilizar, que contiene el servidor Apache HTTP Server.
## 3. Evidencia
a) Screenshot de docker ps mostrando el container corriendo
Después de ejecutar docker run -d --name mi-apache -p 8081:80 httpd, ejecuta docker ps.
Bash
CONTAINER ID   IMAGE     COMMAND              CREATED         STATUS         PORTS                  NAMES
2a9b3c5e8d1f   httpd     "httpd-foreground"   5 seconds ago   Up 4 seconds   0.0.0.0:8081->80/tcp   mi-apache
b) Screenshot del navegador (Accediendo a Apache)
Accede a http://localhost:8081 en tu navegador. Deberías ver la página de bienvenida por defecto de Apache, que dice "It works!".
c) Screenshot o salida mostrando que el container fue eliminado correctamente
Después de ejecutar docker stop mi-apache y luego docker rm mi-apache, ejecuta docker ps -a para listar todos los contenedores, incluidos los detenidos. mi-apache ya no debería aparecer o si aparece, no debería tener ID ni nombre (Docker ha limpiado la referencia).
Bash


