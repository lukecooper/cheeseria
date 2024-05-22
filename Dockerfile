FROM openjdk:17-jdk-slim AS mvn-build
WORKDIR /app

COPY pom.xml mvnw ./
COPY .mvn .mvn
# RUN ./mvnw dependency:resolve

COPY ./src ./src
RUN ./mvnw clean package

FROM openjdk:17-jdk-slim AS runner
WORKDIR /app

COPY --from=mvn-build /app/target/*.jar app.jar

EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]