FROM rod6214/node:18-ubuntu
# RUN mkdir -p /usr/src/app && apt update && apt install -y iproute2
WORKDIR /usr/src/app
COPY ./app/* ./
# # set application directory as workdir
RUN npm install
# # CMD node /usr/src/app/index.js
ENTRYPOINT [ "node", "index.js" ]
