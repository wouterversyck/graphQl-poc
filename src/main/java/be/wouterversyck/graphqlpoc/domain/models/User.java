package be.wouterversyck.graphqlpoc.domain.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;

@Entity(name = "user")
@Data
public class User {
    @Id
    @GeneratedValue
    private long id;

    @NotBlank
    @Column(name = "first_name", nullable = false)
    private String firstName;

    @NotBlank
    @Column(name = "last_name", nullable = false)
    private String lastName;

    @JsonIgnore
    public static UserBuilder builder() {
        return new UserBuilder();
    }

    public static class UserBuilder {
        private String firstName;
        private String lastName;

        private UserBuilder() {}

        public UserBuilder withFirstName(final String firstName) {
            this.firstName = firstName;
            return this;
        }

        public UserBuilder withLastName(final String lastName) {
            this.lastName = lastName;
            return this;
        }

        public User build() {
            User user = new User();
            user.setFirstName(firstName);
            user.setLastName(lastName);

            return user;
        }
    }
}
