FROM ubuntu:16.04
MAINTAINER Connor Scully-Allison
LABEL description="Front End Application for Wells Fargo Data Mining Competition"


RUN apt-get update -y
RUN apt-get install --yes curl
RUN curl --silent --location https://deb.nodesource.com/setup_4.x 
RUN apt-get install -y nodejs
RUN apt-get install -y npm

COPY . /wf-frontend
WORKDIR /wf-frontend

RUN npm install @angular/cli
RUN npm install

EXPOSE 4444
ENV FRONTEND_PORT 86
ENV FRONTEND_HOST 0.0.0.0
EXPOSE ${FRONTEND_PORT}

CMD ng serve
