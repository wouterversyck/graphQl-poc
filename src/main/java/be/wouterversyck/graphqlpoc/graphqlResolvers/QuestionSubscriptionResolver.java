package be.wouterversyck.graphqlpoc.graphqlResolvers;

import be.wouterversyck.graphqlpoc.domain.models.Question;
import be.wouterversyck.graphqlpoc.domain.services.QuestionService;
import com.coxautodev.graphql.tools.GraphQLSubscriptionResolver;
import org.reactivestreams.Publisher;


public class QuestionSubscriptionResolver implements GraphQLSubscriptionResolver {
    private QuestionService questionService;

    public QuestionSubscriptionResolver(final QuestionService questionService) {
        this.questionService = questionService;
    }

    public Publisher<Question> questionSubscription() {
        return questionService.getQuestionPublisher();
    }
}
