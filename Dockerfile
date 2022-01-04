FROM alpine

COPY server /home/server

RUN apk update
RUN apk upgrade

RUN apk add bash icu-libs krb5-libs libgcc libintl libssl1.1 libstdc++ zlib \
RUN apk add libgdiplus --repository https://dl-3.alpinelinux.org/alpine/edge/testing/
