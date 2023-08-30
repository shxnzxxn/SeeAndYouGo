# Base image
FROM openjdk:11

#WORKDIR /app

# Copy JAR file to container
COPY build/libs/seeandyougo-0.0.1-SNAPSHOT.jar seeandyougo-0.0.1-SNAPSHOT.jar

EXPOSE 8080

# Entry point for running the application
CMD ["java", "-jar", "seeandyougo-0.0.1-SNAPSHOT.jar"]
