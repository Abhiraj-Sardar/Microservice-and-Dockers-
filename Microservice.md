Online Shopping App
--------------------
1. Account (service) => Account DB
2. Product (service) => Product DB

- now we will try to communicate to Product from Account (for this we use axios)
- /Account => npm i axios
- run /account and /product api in different terminal after necessary changes to see connection between them

Docker
----------------
create docker file
> docker build -t account-service .
> docker run -p 3001:3001 account-service