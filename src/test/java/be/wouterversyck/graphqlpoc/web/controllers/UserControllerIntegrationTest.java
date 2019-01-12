package be.wouterversyck.graphqlpoc.web.controllers;

import be.wouterversyck.graphqlpoc.domain.models.User;
import io.restassured.http.ContentType;
import org.junit.Test;

import java.util.List;

import static io.restassured.RestAssured.given;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;

public class UserControllerIntegrationTest extends AbstractIntegrationTest{

    @Test
    public void addUserShouldReturnSameUser() {
        var user = User.builder()
                .withFirstName("firstName")
                .withLastName("lastName")
                .build();

        var response = givenWithAuth()
                .accept(ContentType.JSON)
                .contentType(ContentType.JSON)
                .body(user)
                .when()
                .post("/user")
                .as(User.class);

        assertThat(response.getFirstName(), equalTo(user.getFirstName()));
        assertThat(response.getLastName(), equalTo(user.getLastName()));
    }

    @Test
    public void getUserReturnsUser() {

        var response = givenWithAuth()
                .accept(ContentType.JSON)
                .contentType(ContentType.JSON)
                .when()
                .get("/user/1")
                .as(User.class);

        assertThat(response.getFirstName(), equalTo("first_name_1"));
        assertThat(response.getLastName(), equalTo("last_name_1"));
    }

    @Test
    public void getUsersReturnsUsers() {

        User[] response = givenWithAuth()
                .accept(ContentType.JSON)
                .contentType(ContentType.JSON)
                .when()
                .get("/user/1/2")
                .as(User[].class);

        assertThat(response[0].getFirstName(), equalTo("first_name_2"));
        assertThat(response[0].getLastName(), equalTo("last_name_2"));

        assertThat(response[1].getFirstName(), equalTo("first_name_3"));
        assertThat(response[1].getLastName(), equalTo("last_name_3"));
    }

    @Test
    public void beanValidationWorks() {
        var user1 = User.builder()
                .withFirstName("firstName")
                .build();

        var user2 = User.builder()
                .withLastName("lastName")
                .build();

        List.of(user1, user2).forEach(user ->
            givenWithAuth()
                    .accept(ContentType.JSON)
                    .contentType(ContentType.JSON)
                    .body(user)
                    .when()
                    .post("/user")
                    .then()
                    .statusCode(400)
        );
    }

    @Test
    public void userEndpointIsSecured() {
        given()
                .get("/user")
                .then()
                .statusCode(401);
    }
}