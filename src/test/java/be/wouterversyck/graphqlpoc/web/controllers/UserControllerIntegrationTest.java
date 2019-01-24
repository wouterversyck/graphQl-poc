package be.wouterversyck.graphqlpoc.web.controllers;

import be.wouterversyck.graphqlpoc.domain.models.User;
import io.restassured.http.ContentType;
import org.junit.Test;

import java.util.List;

import static io.restassured.RestAssured.given;
import static java.lang.String.format;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;

public class UserControllerIntegrationTest extends AbstractIntegrationTest{

    @Test
    public void addUserShouldReturnSameUser_AndDeleteShouldRemoveUser() {
        var user = User.builder()
                .firstName("firstName")
                .lastName("lastName")
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

        givenWithAuth()
                .accept(ContentType.JSON)
                .contentType(ContentType.JSON)
                .body(user)
                .when()
                .delete(format("/user/%s", response.getId()))
                .then()
                .statusCode(200);

        givenWithAuth()
                .accept(ContentType.JSON)
                .contentType(ContentType.JSON)
                .body(user)
                .when()
                .get(format("/user/%s", response.getId()))
                .then()
                .statusCode(404);
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
        givenWithAuth()
                .accept(ContentType.JSON)
                .contentType(ContentType.JSON)
                .when()
                .get("/user/1/2")
                .then()
                    .statusCode(200)
                    .body("pageSize", is(2))
                    .body("totalElements", is(4))
                    .body("content.firstName",
                            hasItems("first_name_3", "first_name_4"))
                    .body("content.lastName",
                        hasItems("last_name_3", "last_name_4"))
                    .body("content.id",
                            hasItems(3, 4));

    }

    @Test
    public void beanValidationWorks() {
        var user1 = User.builder()
                .firstName("firstName")
                .build();

        var user2 = User.builder()
                .lastName("lastName")
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
}