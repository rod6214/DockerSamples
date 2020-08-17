FROM nginx:latest

# You should create in the current dir a folder with your certificate
COPY ./certs/*.crt /etc/ssl/certs
COPY ./certs/*.pem /etc/ssl/certs
COPY ./*.conf /etc/nginx/conf.d/
ENTRYPOINT [ "/docker-entrypoint.sh", "nginx", "-g", "daemon off;" ]
