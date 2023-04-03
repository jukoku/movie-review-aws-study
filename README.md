### 이 앱은 AWS의 EC2와 RDS를 이용하여 공개 배포하였다.

### 컨테이너 실행
> docker run -d -p 3000:3000 -it --network net-01 --name node_app -v /mnt/c/Users/jinho/Documents/Projects/webDevelop/node-study:/app node:18.15.0

### 컨테이너 쉘 접속
> docker exec -it node_app /bin/bash
> docker exec -it mysql-db /bin/bash
> docker exec -it node_study /bin/bash

### 네트워크 생성
> docker network create [네트워크 이름]

### 네트워크 리스트 확인
> docker network ls

## MYSQL 접속
> mysql -u root -p
> Enter password : [암호 입력]
