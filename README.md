# Microservice-and-Dockers

# Introduction and Problem Statement
This project provides an overview of microservices and Docker in a nutshell. It offers a small and simple project-based approach to understanding microservices and how they work.
also the user can differentiate between monolithic and microservice architecture of a system. Here we have taken an example of an online shopping application where a shopping application can have many features or services like Account service, Product Service, Order Service and Payment Service. In Microservice architecture all of this services run separately. It is widely used in REST API development. where each of the endpoint of each service runs in different environment. Here we can define the environment as different container. more specifically Docker Container. 

# Monolithic Architecture

![](https://github.com/Abhiraj-Sardar/Microservice-and-Dockers-for-all/blob/master/Docs/Monolithic.png)

# Microservice Architecture

![](https://github.com/Abhiraj-Sardar/Microservice-and-Dockers-for-all/blob/master/Docs/microservice.png)


# Dockers

![](https://github.com/Abhiraj-Sardar/Microservice-and-Dockers-for-all/blob/master/Docs/docker-arch.png)

![](https://github.com/Abhiraj-Sardar/Microservice-and-Dockers-for-all/blob/master/Docs/docker-container.png)

![](https://github.com/Abhiraj-Sardar/Microservice-and-Dockers-for-all/blob/master/Docs/docker-image-container.png)

# Useful Docker Commands

# Understanding the Project


# How to run


docker images
docker ps
docker build -t <image-name> .
docker run -p localhostPort:mappedPort <image-name>
docker inspect <container-id>
