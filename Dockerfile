FROM node:12.16.1

RUN mkdir -p /usr/src/app && mkdir -p /data/db && mkdir -p /data/app

COPY . /usr/src/app

RUN sed -i '/jessie-updates/d' /etc/apt/sources.list  # Now archived
RUN apt-get update && apt-get install -y nano \
    libpcap-dev git \
    build-essential

WORKDIR /usr/src/app
RUN npm install

EXPOSE 5000

WORKDIR /usr/src/app
CMD ["node", "Main.js"]
