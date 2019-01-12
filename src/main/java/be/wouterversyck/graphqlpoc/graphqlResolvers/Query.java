package be.wouterversyck.graphqlpoc.graphqlResolvers;

import be.wouterversyck.graphqlpoc.domain.models.Question;
import be.wouterversyck.graphqlpoc.domain.services.QuestionService;
import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import lombok.NonNull;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class Query implements GraphQLQueryResolver {

    private QuestionService questionService;

    public Query(@NonNull final QuestionService questionService) {
        this.questionService = questionService;
    }

    public List<Question> questions(final int page, final int count) {
        return questionService.getQuestions(page, count);
    }
}
