FROM rod6214/node:18-ubuntu
WORKDIR /usr/src/app
COPY ./app/* ./
# # set application directory as workdir
RUN npm install
ENTRYPOINT [ "node", "index.js" ]
