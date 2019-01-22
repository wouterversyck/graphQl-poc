#!/bin/sh

echo "The application will start in ${GRAPHQL_POC_SLEEP}s..." && sleep ${GRAPHQL_POC_SLEEP}
exec java ${JAVA_OPTS} -Djava.security.egd=file:/dev/./urandom -jar "${HOME}/app.war" "$@"
