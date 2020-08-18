FROM rod6214/node:18-ubuntu
WORKDIR /usr/src
COPY ./app ./
EXPOSE 5000
# # set application directory as workdir
RUN npm install
ENTRYPOINT [ "node", "index.js" ]
