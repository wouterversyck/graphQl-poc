package be.wouterversyck.graphqlpoc.graphqlResolvers;

import be.wouterversyck.graphqlpoc.domain.models.Question;
import be.wouterversyck.graphqlpoc.domain.services.QuestionService;
import com.coxautodev.graphql.tools.GraphQLMutationResolver;
import lombok.NonNull;
import org.springframework.stereotype.Component;

@Component
public class QuestionMutationResolver implements GraphQLMutationResolver {
    private QuestionService questionService;

    public QuestionMutationResolver(@NonNull final QuestionService questionService) {
        this.questionService = questionService;
    }

    public Question addQuestion(final String question, final long id) {
        var questionObj = Question.builder()
                .question(question)
                .userId(id)
                .build();
        return questionService.addQuestion(questionObj);
    }
}
