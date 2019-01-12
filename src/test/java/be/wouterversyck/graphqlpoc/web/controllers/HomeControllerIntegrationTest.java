package be.wouterversyck.graphqlpoc.web.controllers;

import be.wouterversyck.graphqlpoc.domain.models.User;
import io.restassured.http.ContentType;
import org.junit.Test;

import java.util.Arrays;
import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;

public class HomeControllerIntegrationTest extends AbstractIntegrationTest{

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

        assertThat(response.getFirstName(), equalTo("first_name"));
        assertThat(response.getLastName(), equalTo("last_name"));
    }

    @Test
    public void getUsersReturnsUsers() {

        User[] response = givenWithAuth()
                .accept(ContentType.JSON)
                .contentType(ContentType.JSON)
                .when()
                .get("/user/1/2")
                .as(User[].class);

        assertThat(response[0].getFirstName(), equalTo("first_name_3"));
        assertThat(response[0].getLastName(), equalTo("last_name_3"));

        assertThat(response[0].getFirstName(), equalTo("first_name_4"));
        assertThat(response[0].getLastName(), equalTo("last_name_4"));
    }
}