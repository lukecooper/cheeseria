# Cheeseria

This is a proof of concept showcasing a Java Spring web api with an Angular client.

## Dependencies

JDK 17 is required to build and run the Java web api. Node v20.13.1 was used to build the Angular client, and it requires the Angular CLI tool to run in development mode (`npm install -g @angular/cli`). The client dependencies will need to be installed with `npm install` from the `client` directory.

## Startup

Run the web api using `./mvnw spring-boot:run`. This will open a server on localhost:8080.

Run the Angular client from the `client` directory using the command `ng serve`. Open a browser at http://localhost:4200 to see the Cheeseria.

## Docker build

The sample docker file builds and runs the web api, opening port 8080. Build the docker image with `docker build -t cheeseria .` (warning, this takes a few minutes), then run this with `docker run -p 8080:8080 cheeseria cheeseria`.

## Next steps

Some example next steps for the proof of concept would be:
- expand the docker build to build and run both web api and Angular client
- use docker compose to spin up a database instance
- modify the web api to make use of the database instance instead of the in-memory H2 database
- populate the database using data migrations
- move default cheese images to external storage
- expand the app functionality to allow addition of new cheese types
- allow filtering by cheese name, colour, price, etc.