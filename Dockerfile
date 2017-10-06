FROM ubuntu:16.04
MAINTAINER Connor Scully-Allison
LABEL description="Front End Application for Wells Fargo Data Mining Competition"

RUN curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
RUN apt update
RUN apt-get install -y nodejs

RUN npm install -g @angular/cli

COPY . /wf-frontend
WORKDIR /wf-frontend

RUN npm install

EXPOSE 4444
ENV FRONTEND_PORT 86
ENV FRONTEND_HOST 0.0.0.0
EXPOSE ${FRONTEND_PORT}

CMD ng serve
