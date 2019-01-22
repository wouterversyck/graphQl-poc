FROM openjdk:11-jre-slim

ENV SPRING_OUTPUT_ANSI_ENABLED=ALWAYS \
    GRAPHQL_POC_SLEEP=0 \
    JAVA_OPTS=""

# Add a graphql-poc user to run our application so that it doesn't need to run as root
RUN adduser -D -s /bin/sh graphql-poc
WORKDIR /home/graphql-poc

ADD entrypoint.sh entrypoint.sh
RUN chmod 755 entrypoint.sh && chown graphql-poc:graphql-poc entrypoint.sh
USER graphql-poc

ENTRYPOINT ["./entrypoint.sh"]

EXPOSE 80

ADD *.war app.war

