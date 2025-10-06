## 1. Comandos Ejecutados
A continuación, se listan todos los comandos usados para desplegar, verificar y limpiar el contenedor de Apache.

- Ejecutar Container	docker run -d --name nginx -p 8080:80 httpd
- Verificar Ejecución	docker ps
- Consultar Logs	docker logs nginx
- Detener Container	docker stop nginx
- Eliminar Container	docker nginx
- Verificar Limpieza	docker ps -a

## 2. Explicación Breve del docker run
- Comando: docker run -d --name nginx -p 8080:80 httpd
-	docker run: Comando principal para ejecutar un contenedor a partir de una imagen.
-	-d (Detached): Ejecuta el contenedor en segundo plano (modo daemon), liberando la terminal.
-	--name mi-apache: Asigna el nombre mi-apache al contenedor, facilitando su identificación y gestión.
-	-p 8080:80 : Publica el puerto 80 del contenedor (donde escucha nginx) al puerto 8080 del host (localhost). Esto permite acceder al servidor web mediante http://localhost:8081.
-	httpd: Es el nombre de la imagen a utilizar, que contiene el servidor nginx.
## 3. Evidencia
a) Screenshot de docker ps mostrando el container corriendo
<img width="1473" height="799" alt="image" src="https://github.com/user-attachments/assets/c09029f3-81e7-4212-a38e-ed62bf376bfa" />

b) Screenshot del navegador (Accediendo a Apache)
<img width="1790" height="975" alt="image" src="https://github.com/user-attachments/assets/249125c8-a675-4447-b730-0b40817c08eb" />




