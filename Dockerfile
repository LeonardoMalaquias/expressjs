#OFICIAL IMAGE FOR NODE
FROM node
#alteracao no meu codigo
#set workdir
WORKDIR /opt/app

#copy root dir to workdir
COPY . /opt/app

#INSTALL
RUN npm install --quiet
