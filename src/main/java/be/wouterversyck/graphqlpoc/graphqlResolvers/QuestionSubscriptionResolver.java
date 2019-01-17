package be.wouterversyck.graphqlpoc.graphqlResolvers;

import be.wouterversyck.graphqlpoc.domain.models.Question;
import be.wouterversyck.graphqlpoc.domain.services.QuestionService;
import com.coxautodev.graphql.tools.GraphQLSubscriptionResolver;
import lombok.NonNull;
import org.reactivestreams.Publisher;
import org.springframework.stereotype.Component;


@Component
public class QuestionSubscriptionResolver implements GraphQLSubscriptionResolver {
    private QuestionService questionService;

    public QuestionSubscriptionResolver(@NonNull final QuestionService questionService) {
        this.questionService = questionService;
    }

    public Publisher<Question> questionSubscription(int id) {
        return questionService.getQuestionPublisher();
    }
}
