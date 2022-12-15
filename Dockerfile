FROM node:lts

ENV PATH /app:$PATH

WORKDIR /app

COPY ./ /app

RUN npm install

RUN ["chmod", "u+x", "entrypoint.sh"]
RUN apt-get update && apt-get install -y bash

ENTRYPOINT ["./entrypoint.sh"]

EXPOSE 3000
