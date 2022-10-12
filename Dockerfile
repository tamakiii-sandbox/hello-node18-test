FROM node:18.10.0-buster-slim

RUN apt update && \
    apt install \
      make \
      && \
    apt clean
