FROM hoosin/alpine-nginx-nodejs:latest

EXPOSE 8082

RUN rm -rf /var/www/*
RUN mkdir /etc/nginx/sites-enabled

COPY ./server/dist/ /app/
COPY ./client/build/ /var/www/
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY ./init.sh /app/

WORKDIR /app

RUN npm install 
RUN nginx -t

CMD ["sh", "init.sh"] 
