package be.wouterversyck.graphqlpoc.graphqlResolvers;

import be.wouterversyck.graphqlpoc.domain.models.Question;
import be.wouterversyck.graphqlpoc.domain.models.User;
import be.wouterversyck.graphqlpoc.domain.services.QuestionService;
import com.coxautodev.graphql.tools.GraphQLResolver;
import lombok.NonNull;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class UserResolver implements GraphQLResolver<User> {

    private QuestionService questionService;

    public UserResolver(@NonNull final QuestionService questionService) {
        this.questionService = questionService;
    }

    public List<Question> questions(final User user) {
        return questionService.getByUserId(user.getId());
    }
}
