FROM mysql:latest
  ENV MYSQL_ROOT_PASSWORD sonar
  ENV MYSQL_DATABASE sonar
  ENV MYSQL_USER sonar
  ENV MYSQL_PASSWORD sonar
  
FROM sonarqube:latest
