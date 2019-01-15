package be.wouterversyck.graphqlpoc.graphqlResolvers;

import be.wouterversyck.graphqlpoc.domain.models.User;
import be.wouterversyck.graphqlpoc.domain.services.UserService;
import com.coxautodev.graphql.tools.GraphQLMutationResolver;
import org.springframework.stereotype.Component;

@Component
public class UserMutationResolver implements GraphQLMutationResolver {
    private UserService userService;

    public UserMutationResolver(final UserService userService) {
        this.userService = userService;
    }

    public User addUser(final String firstName, final String lastName) {
        var user = User.builder()
                .withFirstName(firstName)
                .withLastName(lastName)
                .build();

        return userService.addUser(user);
    }
}
