FROM ubuntu

RUN apt-get update
RUN apt-get upgrade

EXPOSE 8081
EXPOSE 8082

WORKDIR /home/app

COPY ./server ./

# RUN dotnet dev-certs https
# RUN dotnet build 
