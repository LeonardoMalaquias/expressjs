#OFICIAL IMAGE FOR NODE
FROM node

#set workdir
WORKDIR /opt/service

#copy root dir to workdir
COPY . /opt/service

#INSTALL
RUN npm install

#expose
EXPOSE 3000

#run app
CMD npm start
