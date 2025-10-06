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
-	-p 8080:80 : Publica el puerto 80 del contenedor (donde escucha nginx) al puerto 8080 del host (localhost). Esto permite acceder al servidor web mediante http://localhost:8080.
-	httpd: Es el nombre de la imagen a utilizar, que contiene el servidor nginx.
## 3. Evidencia
a) Screenshot de docker ps mostrando el container corriendo
<img width="1473" height="799" alt="image" src="https://github.com/user-attachments/assets/c09029f3-81e7-4212-a38e-ed62bf376bfa" />

b) Screenshot del navegador (Accediendo a Apache)
<img width="1790" height="975" alt="image" src="https://github.com/user-attachments/assets/249125c8-a675-4447-b730-0b40817c08eb" />
## 4. Conclusiones
- Reforcé cómo se utilizan los flags esenciales (-d, --name, -p) en el comando docker run para controlar la ejecución del contenedor. Comprendí que -p HOST_PORT:CONTAINER_PORT es fundamental para exponer servicios de red que corren dentro del contenedor al exterior.
- Dificultades: Inicialmente, olvidé usar el flag -d, lo que hizo que la terminal se bloqueara mostrando los logs de Apache. Resolví esto cancelando la ejecución (Ctrl+C) y luego volviendo a ejecutar el comando, esta vez incluyendo el flag -d para que corriera en segundo plano





