# 📘 Run services with docker compose

Docker compose is a tool that is integrated in the docker installation and we can use it to run containers automatically. 

[Read more](https://docs.docker.com/)

## Get started 🚀

you should do the following steps before start the proyect:

### Steps to run 📋

- Install [Docker Desktop for Windows](https://hub.docker.com/editions/community/docker-ce-desktop-windows/)
- Open a CMD or PowerShell.
- You must create a network from docker command directly for this example so use: `docker network create test-net -d bridge`
- At the root directory run the command: `docker-compose up -d`

Note: you could create the network with custom configurations as ip address and others
