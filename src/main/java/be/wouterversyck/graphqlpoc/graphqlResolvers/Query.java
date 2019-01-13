package be.wouterversyck.graphqlpoc.graphqlResolvers;

import be.wouterversyck.graphqlpoc.domain.models.Question;
import be.wouterversyck.graphqlpoc.domain.models.User;
import be.wouterversyck.graphqlpoc.domain.services.QuestionService;
import be.wouterversyck.graphqlpoc.domain.services.UserService;
import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import lombok.NonNull;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class Query implements GraphQLQueryResolver {

    private QuestionService questionService;
    private UserService userService;

    public Query(@NonNull final QuestionService questionService, @NonNull final UserService userService) {
        this.questionService = questionService;
        this.userService = userService;
    }

    public List<Question> questions(final int page, final int count) {
        return questionService.getQuestions(page, count).getContent();
    }

    public List<User> users(final int page, final int count) {
        return userService.getUsers(page, count).getContent();
    }
}
